$(document).ready(function () {
    saveImagesToLocalStorage();
    loadImagesFromLocalStorage();
});

function saveImagesToLocalStorage() {
    // Select all image elements
    const whoAreImages = document.querySelectorAll('.whoAreWrapper img');

    const homeImages = document.querySelectorAll('.homeWrapper img');

    const whoAreImagesURL = [];

    const homeImagesURL = [];

    // Loop through each image element and get the src attribute
    whoAreImages.forEach(img => {
        whoAreImagesURL.push(img.src);
    });

    homeImages.forEach(img => {
        homeImagesURL.push(img.src);
    });

    // Save the image URLs array to local storage with different keys
    localStorage.setItem('savedWrapperImages', JSON.stringify(whoAreImagesURL));

    localStorage.setItem('savedHomeWrapperImages', JSON.stringify(homeImagesURL));

}

// Load images from local storage
function loadImagesFromLocalStorage() {
    const savedWrapperImages = localStorage.getItem('savedWrapperImages');

    if (savedWrapperImages) {
        const whoAreImagesURL = JSON.parse(savedWrapperImages);
    }

    const savedHomeWrapperImages = localStorage.getItem('savedHomeWrapperImages');

    if (savedHomeWrapperImages) {
        const homeImagesURL = JSON.parse(savedHomeWrapperImages);
    }

}