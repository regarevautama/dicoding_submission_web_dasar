document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let targetId = this.getAttribute('href').substring(1);
            let targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll('.lightbox-trigger');
    images.forEach(function (image) {
        image.addEventListener('click', function () {

            let overlay = document.createElement('div');
            overlay.classList.add('overlay');

            let enlargedImage = document.createElement('img');
            enlargedImage.src = this.src;
            enlargedImage.classList.add('enlarged-image');

            overlay.appendChild(enlargedImage);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
});