// Get references to elements
const sellingImage = document.getElementById('sellingImage');
const sellingTitle = document.getElementById('sellingTitle');
const sellingDescription = document.getElementById('sellingDescription');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Define content variations
const contentVariations = [
  {
    image: './images/sellinghouse.png',
    title: 'Best interior paint colors for selling your house.',
    description: 'GSK Developers reveal that dark grey may attract more prospective buyers - and higher offers - when you are getting ready to sell.'
  },
  {
    image: './images/sell1.png',
    title: 'Tips for staging your home to sell quickly.',
    description: 'Learn how proper staging can make your home stand out in the market and attract more potential buyers.'
  },
  {
    image: './images/jsimage3.jpeg',
    title: 'Tips for staging your home to sell quickly.',
    description: 'Learn how proper staging can make your home stand out in the market and attract more potential buyers.'
  },
  // Add more variations as needed
];

// Initial content index
let currentIndex = 0;

// Function to update content based on currentIndex
function updateContent() {
  sellingImage.src = contentVariations[currentIndex].image;
  sellingTitle.textContent = contentVariations[currentIndex].title;
  sellingDescription.textContent = contentVariations[currentIndex].description;
}

// Event listener for left arrow
leftArrow.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + contentVariations.length) % contentVariations.length;
  updateContent();
});

// Event listener for right arrow
rightArrow.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % contentVariations.length;
  updateContent();
});

// Initial content update
updateContent();
