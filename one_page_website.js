// Wait for the DOM to be ready before executing the script
document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("close-lightbox");

    // Loop through all the thumbnails and add a click event listener
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            const largeImage = thumbnail.getAttribute("data-large");
            lightboxImage.src = largeImage; // Set the lightbox image to the large version
            lightbox.style.display = "flex"; // Show the lightbox modal
        });
    });

    // Close the lightbox when the user clicks on the close button (×)
    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none"; // Hide the lightbox modal
    });

    // Optionally, close the lightbox if the user clicks outside the image
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});

