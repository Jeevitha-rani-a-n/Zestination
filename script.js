const destinations = [
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
    description: "City of lights, romance, and cafés."
  },
  {
    name: "Tokyo, Japan",
    image: "C:\Users\Admin\OneDrive\Desktop\WDPD\images\tokyo.jpg",
    description: "Blend of tradition and futuristic life."
  },
  {
    name: "Cape Town, South Africa",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    description: "Mountains, beaches and safaris."
  },
  {
    name: "New York, USA",
    image: "C:\Users\Admin\OneDrive\Desktop\WDPD\images\newyork.jpg",
    description: "Skyscrapers, Broadway and bagels."
  },
  {
    name: "Rome, Italy",
    image: "C:\Users\Admin\OneDrive\Desktop\WDPD\images\rome.jpg",
    description: "Colosseum, pasta, and ancient wonders."
  },
  {
    name: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
    description: "Opera House and ocean vibes."
  },
  {
    name: "Istanbul, Turkey",
    image: "C:\Users\Admin\OneDrive\Desktop\WDPD\images\istanbul.jpg",
    description: "Where East meets West."
  },
  {
    name: "Reykjavik, Iceland",
    image: "C:\Users\Admin\OneDrive\Desktop\WDPD\images\reykjavik.jpg",
    description: "Northern lights & geothermal spas."
  },
  {
    name: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1549649639-8f4c72d8d8a5?auto=format&fit=crop&w=800&q=80",
    description: "Gaudí architecture & beach life."
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
  

  
  