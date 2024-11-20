// Smooth scrolling for nav links
document.querySelectorAll('.sidebar nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close the sidebar when a link is clicked (only for small screens)
    if (window.innerWidth <= 768) {
      const sidebar = document.getElementById("sidebar");
      sidebar.classList.remove("visible"); // Hide sidebar after selecting an item
    }
  });
});

// Sidebar toggle function
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("visible"); // Toggle the 'visible' class to show/hide
}

// Typing animation for "web developer"
const typingText = document.getElementById("typing");
const text = "web developer";
let index = 0;
let typingSpeed = 150; // Base typing speed
let deleteSpeed = 100; // Speed for deleting characters
let cursorVisible = true; // Cursor visibility
const cursorElement = document.createElement("span"); // Create a cursor element
cursorElement.textContent = "|"; // Cursor character
cursorElement.style.fontWeight = "bold"; // Make it bold
cursorElement.style.color = "#ff007a"; // Cursor color
cursorElement.style.animation = "blink 0.7s step-end infinite"; // Blinking effect
typingText.appendChild(cursorElement); // Append cursor to the typing text

// Function to type the text
function type() {
  if (index < text.length) {
    typingText.innerHTML = text.substring(0, index + 1); // Display the text up to the current index
    index++;
    // Randomize typing speed
    setTimeout(type, typingSpeed + Math.random() * 100);
  } else {
    // Pause before deleting
    setTimeout(() => {
      deleteText(); // Start deleting the text
    }, 2000);
  }
}

// Function to delete the text
function deleteText() {
  if (index > 0) {
    typingText.innerHTML = text.substring(0, index - 1); // Remove the last character
    index--;
    setTimeout(deleteText, deleteSpeed); // Continue deleting
  } else {
    // Pause before typing again
    setTimeout(() => {
      index = 0; // Reset index
      type(); // Start typing again
    }, 1000);
  }
}

// Start the typing animation when the window loads
window.onload = type;

// CSS for cursor blinking effect
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Particles.js configuration
particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 100,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#ffffff"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 2
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});

// JavaScript for circular progress bars
const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
 endValue = Number(progressBar.getAttribute("data-percent")),
    speed = 50,
    progressColor = "#ff66b2"; // You can make this dynamic if needed

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = progressColor;

    progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6}deg, #333 0deg)`;
    
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});

