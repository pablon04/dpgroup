document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image');
    let currentImageIndex = 0;
    const intervalTime = 6 * 1000; // 40 seconds in milliseconds

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.remove('hidden');
                img.classList.add('active');
            } else {
                img.classList.remove('active');
                img.classList.add('hidden');
            }
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    // Initialize the first image
    showImage(currentImageIndex);

    // Set the interval for changing images
    setInterval(nextImage, intervalTime);

});