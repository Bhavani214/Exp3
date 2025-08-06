let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(id, name, price) {
    // Add item to cart
    cart.push({ id, name, price });
    cartCount++;
    cartTotal += price;

    // Update the cart count
    document.getElementById('cart-count').innerText = cartCount;

    alert(`${name} has been added to your cart!`);
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';

    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items

    // Display items in cart
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Update total price
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}
