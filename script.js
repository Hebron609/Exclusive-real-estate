const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// Optional: Close menu when a link is clicked (good UX)
navMenu.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);

$(".clients-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: "linear",
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    600: {
      items: 4
    },
    800: {
      items: 4
    },
    1200: {
      items: 4
    }
  }
});



const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}



prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Initialize the carousel
updateCarousel();





// Select all accordion items and the image element
const accordionItems = document.querySelectorAll('.accordion-item');
const accordionImage = document.getElementById('accordion-image');

// Add click event listeners to each accordion item
accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    // Check if the clicked item is already active
    const isActive = item.classList.contains('active');

    // Remove active class and hide content for all items
    accordionItems.forEach(i => {
      i.classList.remove('active');
      const content = i.querySelector('.accordion-content1');
      if (content) {
        content.style.display = 'none';
      }
    });

    // If the clicked item was not active, activate it and show its content
    if (!isActive) {
      item.classList.add('active');
      const content = item.querySelector('.accordion-content1');
      if (content) {
        content.style.display = 'block';
      }

      // Update the image based on the clicked item's data-image attribute
      const newImage = item.getAttribute('data-image');
      if (newImage) {
        accordionImage.setAttribute('src', newImage);
      }
    }
  });
});

  
  const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;

    // Toggle active class for the header
    header.classList.toggle('active');

    // Toggle the display of the content
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  });
});