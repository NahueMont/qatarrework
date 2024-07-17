const productButton = document.getElementById('product-button');
const productDropdown = document.getElementById('product-dropdown');

productButton.addEventListener('click', () => {
    const isVisible = productDropdown.classList.toggle('hidden');
    productButton.setAttribute('aria-expanded', !isVisible);
});

// Cerrar el dropdown si se hace clic fuera
window.addEventListener('click', (event) => {
     if (!productDropdown.contains(event.target) && !productButton.contains(event.target)) {
            productDropdown.classList.add('hidden');
            productButton.setAttribute('aria-expanded', 'false');
        }
    });

    //
    