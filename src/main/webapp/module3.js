/**
 * 
 */
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");

    // Initialize the cart as an empty array
    let cart = [];

    // Event listeners for adding and subtracting items
    document.querySelectorAll(".add-item-btn, .subtract-item-btn").forEach(function(button) {
        button.addEventListener("click", function() {
            const productCard = this.closest(".place-card");
            const productName = productCard.querySelector(".card-title").textContent;
            const productPrice = parseFloat(productCard.querySelector(".cost").textContent.replace("$", "").replace(/,/g, ""));

            if (this.classList.contains("add-item-btn")) {
                // Add an item to the cart
                const cartItem = cart.find(item => item.name === productName);
                if (cartItem) {
                    cartItem.quantity++;
                } else {
                    cart.push({ name: productName, price: productPrice, quantity: 1 });
                }
            } else if (this.classList.contains("subtract-item-btn")) {
                // Subtract an item from the cart
                const cartItem = cart.find(item => item.name === productName);
                if (cartItem) {
                    if (cartItem.quantity > 1) {
                        cartItem.quantity--;
                    } else {
                        // Remove the item from the cart if the quantity becomes 0
                        const index = cart.findIndex(item => item.name === productName);
                        if (index !== -1) {
                            cart.splice(index, 1);
                        }
                    }
                }
            }

            // Update the cart table
            renderCart();
        });
    });

    // Function to render the cart items in the table
    function renderCart() {
        cartItems.innerHTML = "";
        cart.forEach(function(item, index) {
            const total = item.price * item.quantity;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${total.toFixed(2)}</td>
            `;

            cartItems.appendChild(row);
        });
    }
});



