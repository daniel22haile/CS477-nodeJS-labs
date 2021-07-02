window.onload = function() {
    console.log('inside client js -- main.js');
    document.getElementById('productId').onclick = function(event) {
        event.preventDefault();
    }
}