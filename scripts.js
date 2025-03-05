// Function to show the specific slide in the slideshow container
function showSlide(container, index) {
    const slides = container.querySelectorAll('.slide'); // Get all slides within this container

    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Ensure the index is within bounds
    if (index >= slides.length) {
        index = 0; // Reset to first slide
    } else if (index < 0) {
        index = slides.length - 1; // Go to last slide if index is negative
    }

    // Show the selected slide
    slides[index].style.display = 'block';
}

// Function to handle the change of slides (next or previous)
function changeSlide(container, direction) {
    const slides = container.querySelectorAll('.slide');
    let currentIndex = Array.from(slides).findIndex(slide => slide.style.display === 'block');

    if (currentIndex === -1) currentIndex = 0; // If no slide is showing, start from the first slide

    currentIndex += direction; // Adjust the index based on the direction (+1 for next, -1 for prev)

    // Call showSlide to update the display
    showSlide(container, currentIndex);
}

// Initialize all slideshows on the page
document.querySelectorAll('.slideshow-container').forEach(container => {
    let currentIndex = 0; // Initialize the starting slide for each container

    // Set up event listeners for next and prev buttons
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');

    prevButton.addEventListener('click', () => changeSlide(container, -1)); // Go to previous slide
    nextButton.addEventListener('click', () => changeSlide(container, 1));  // Go to next slide

    // Initialize the first slide for the container
    showSlide(container, currentIndex);
});
