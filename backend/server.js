require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Get all movies
app.get('/api/movies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

// Get a single movie
app.get('/api/movies/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Movie not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

// Add a new movie
app.post('/api/movies', async (req, res) => {
  const { title, description, imageUrl, rating, category } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO movies (title, description, imageUrl, rating, category) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, imageUrl, rating, category]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

// Update a movie
app.put('/api/movies/:id', async (req, res) => {
  const { title, description, imageUrl, rating, category } = req.body;
  try {
    const result = await pool.query(
      'UPDATE movies SET title = $1, description = $2, imageUrl = $3, rating = $4, category = $5 WHERE id = $6 RETURNING *',
      [title, description, imageUrl, rating, category, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Movie not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

// Delete a movie
app.delete('/api/movies/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM movies WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Movie not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
