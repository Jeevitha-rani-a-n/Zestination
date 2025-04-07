const destinations = [
  {
    name: "Paris, France",
    image: "paris.jpg",
    description: "City of lights, romance, and cafés."
  },
  {
    name: "Tokyo, Japan",
    image: "tokyo.jpg", // Make sure this file exists in /images
    description: "Blend of tradition and futuristic life."
  },
  {
    name: "Cape Town, South Africa",
    image: "capetown.jpg",
    description: "Mountains, beaches and safaris."
  },
  {
    name: "New York, USA",
    image: "newyork.jpg",
    description: "Skyscrapers, Broadway and bagels."
  },
  {
    name: "Rome, Italy",
    image: "rome.jpg",
    description: "Colosseum, pasta, and ancient wonders."
  },
  {
    name: "Sydney, Australia",
    image: "sydney.jpg",
    description: "Opera House and ocean vibes."
  },
  {
    name: "Istanbul, Turkey",
    image: "istanbul.jpg",
    description: "Where East meets West."
  },
  {
    name: "Reykjavik, Iceland",
    image: "reykjavik.jpg",
    description: "Northern lights & geothermal spas."
  }
];

const cardGrid = document.getElementById("cardGrid");

destinations.forEach((place) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${place.image}" alt="${place.name}">
    <div class="card-content">
      <h2>${place.name}</h2>
      <p>${place.description}</p>
      <button class="book-btn">Book Now</button>
    </div>
  `;

  cardGrid.appendChild(card);
});




  
  
