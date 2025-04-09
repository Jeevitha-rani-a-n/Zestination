
const destinations = [
  {
    name: "Paris, France",
    image: "paris.jpg",
    description: "City of lights, romance, and cafés."
  },
  {
    name: "Tokyo, Japan",
    image: "tokyo.jpg",
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
if (cardGrid) {
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
}

// LOGIN SCRIPT
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (username === "admin" && password === "travel123") {
        sessionStorage.setItem("loggedIn", true);
        window.location.href = "travel.html";
      } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
      }
    });
  }

  if (window.location.pathname.includes("travel.html")) {
    if (!sessionStorage.getItem("loggedIn")) {
      window.location.href = "login.html";
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("thankYouModal");
  const closeBtn = document.getElementById("closeModalBtn");

  // Show modal when any "Book Now" button is clicked
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("book-btn")) {
      modal.style.display = "block";
    }
  });

  // Close modal when close button is clicked
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Optional: Close modal when clicking outside the content
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
