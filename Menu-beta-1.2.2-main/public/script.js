document.addEventListener('DOMContentLoaded', function() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const confirmarCompraButton = document.getElementById('confirmar-compra');
    const notificationElement = document.getElementById('notification');
    const customerNameInput = document.getElementById('customer-name');

    cart = {}; // Vacía el carrito después de confirmar la compra
    updateCart(); // Actualiza el carrito en la interfaz
    notificationElement.classList.remove('hidden');
    setTimeout(function() {
        notificationElement.classList.add('hidden');
    }, 3000);
}); // END: ed8c6549bwf9
