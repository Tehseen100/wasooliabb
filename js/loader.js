// Script to Control Loader Display 

// Function to hide the loader and show the content
function hideLoader() {
    document.getElementById('loader').style.display = 'none'; // Hide the loader
    document.getElementById('content').style.visibility = 'visible'; // Show the content
}

// Hide loader when page is fully loaded
// window.addEventListener('load', function () {
//     hideLoader();
// });

// timeout if the page takes too long to load
setTimeout(hideLoader, 3000); 
