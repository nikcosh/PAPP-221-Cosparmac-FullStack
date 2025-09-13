import faf from "./images/faf.jpg";
import f1 from "./images/f1.jpg";
import madmax from "./images/madmax.jpg";
import terminator2 from "./images/terminator2.jpg";
import taxi from "./images/taxi.jpg";
import mrbean from "./images/mrbean.jpg";

const moviesData = [
  { 
    id: 1, 
    title: "Fast and Furious", 
    description: "Dominic Toretto and his crew return to the streets for high-octane car chases, daring heists, and adrenaline-pumping stunts that push the limits of speed and loyalty.", 
    rating: 9.8, 
    category: "Action", 
    imageUrl: faf 
  },
  { 
    id: 2, 
    title: "F1 The Movie", 
    description: "Follow the intense world of Formula 1 racing where precision, speed, and courage collide on the track, revealing the triumphs and struggles of elite drivers.", 
    rating: 8.5, 
    category: "Action", 
    imageUrl: f1 
  },
  { 
    id: 3, 
    title: "Terminator 2", 
    description: "A cyborg from the future must protect the young John Connor from a more advanced Terminator, in a gripping battle between man, machine, and fate.", 
    rating: 9, 
    category: "Sci-Fi", 
    imageUrl: terminator2 
  },
  { 
    id: 4, 
    title: "Mad Max: Fury Road", 
    description: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord, leading to explosive chases and breathtaking vehicular combat.", 
    rating: 8.5, 
    category: "Sci-Fi", 
    imageUrl: madmax 
  },
  { 
    id: 5, 
    title: "Taxi", 
    description: "A fast-driving cabbie and a bumbling police officer team up for hilarious adventures across the streets of Marseille, combining speed with laugh-out-loud comedy.", 
    rating: 9, 
    category: "Comedy", 
    imageUrl: taxi 
  },
  { 
    id: 6, 
    title: "Mr Bean's Holiday", 
    description: "Follow the iconic Mr. Bean as he embarks on a chaotic European vacation full of hilarious mishaps, awkward encounters, and unexpected adventures.", 
    rating: 7.9, 
    category: "Comedy", 
    imageUrl: mrbean 
  },
];

export default moviesData;
