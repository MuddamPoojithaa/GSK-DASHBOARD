

// function autoScroll() {
//   const wrapper = document.querySelector('.wrapper');
//   const containers = document.querySelectorAll('.individualContainer');
//   const totalWidth = wrapper.scrollWidth;
//   const moveDistance = 1.5;
//   let currentScroll = 0;
//   let continueScrolling = true; // Flag to control scrolling

//   // Scroll function
//   function scroll() {
//     if (continueScrolling) {
//       currentScroll += moveDistance;
//       wrapper.scrollLeft = currentScroll;
//       if (currentScroll >= totalWidth) {
//         currentScroll = 0;
//       }
//       requestAnimationFrame(scroll);
//     }
//   }

//   // Event listener to toggle scrolling on click
//   containers.forEach(individualContainer => {
//     individualContainer.addEventListener('click', () => {
//       continueScrolling = !continueScrolling; // Toggle scrolling
//       if (continueScrolling) {
//         scroll(); // If scrolling should continue, start the scroll function
//       }
//     });
//   });

//   // Start scrolling initially
//   scroll();
// }

// window.onload = function() {
//   autoScroll();
// };
function autoScroll() {
  const wrapper = document.querySelector('.wrapper');
  const containers = document.querySelectorAll('.individualContainer');
  const totalWidth = wrapper.scrollWidth;
  const moveDistance = 1.5;
  let currentScroll = 0;
  let continueScrolling = true; // Flag to control scrolling

  // Scroll function
  function scroll() {
    if (continueScrolling) {
      currentScroll += moveDistance;
      wrapper.scrollLeft = currentScroll;
      if (currentScroll >= totalWidth) {
        currentScroll = 0;
      }
      requestAnimationFrame(scroll);
    }
  }

  // Function to pause autoScroll
  function pauseScroll() {
    continueScrolling = false;
  }

  // Function to resume autoScroll
  function resumeScroll() {
    continueScrolling = true;
    scroll();
  }

  // Event listener to toggle scrolling on click
  containers.forEach(individualContainer => {
    individualContainer.addEventListener('click', () => {
      continueScrolling = !continueScrolling; // Toggle scrolling
      if (continueScrolling) {
        scroll(); // If scrolling should continue, start the scroll function
      }
    });
  });

  // Listen for anchor clicks to pause autoScroll temporarily
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      // Pause autoScroll
      pauseScroll();

      // Smooth scroll to the anchor's target
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });

      // Resume autoScroll after a short delay to allow smooth scrolling to complete
      setTimeout(() => {
        resumeScroll();
      }, 1000); // Adjust delay as needed
    });
  });

  // Start scrolling initially
  scroll();
}

window.onload = function() {
  autoScroll();
};
