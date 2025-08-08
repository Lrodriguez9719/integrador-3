document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.querySelector(".cart-count");
  const cartIconOutline = document.getElementById("cart-icon-outline");
  const cartIconFilled = document.getElementById("cart-icon-filled");
  const cartModal = document.getElementById("cart-modal");
  const closeModal = document.querySelector(".close-modal");
  const cartItemsList = document.getElementById("cart-items");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  let cart = [];

  // Update cart count and icon
  const updateCartUI = () => {
    cartCount.textContent = cart.length;
    if (cart.length > 0) {
      cartIconOutline.style.display = "none";
      cartIconFilled.style.display = "inline";
    } else {
      cartIconOutline.style.display = "inline";
      cartIconFilled.style.display = "none";
    }
  };

  // Add item to cart
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const product = {
        name: e.target.dataset.product,
        price: e.target.dataset.price,
        image: e.target.dataset.image,
        id: e.target.dataset.id,
      };
      cart.push(product);
      updateCartUI();
      alert(`${product.name} ha sido añadido a tu carrito de compras!`);
    });
  });

  // Show cart modal
  cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartModal.style.display = "flex";

    if (cart.length === 0) {
      cartItemsList.innerHTML = `<p class="empty-cart-message">Tu carrito está vacío.</p>`;
      document.getElementById("checkout-btn").disabled = true;
      document.getElementById("checkout-btn").classList.add("disabled");
    } else {
      cartItemsList.innerHTML = cart
        .map(
          (item, index) => `
          <li>
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
            <div class="item-info">
              <span>${item.name}</span>
              <span class="price">$${item.price}</span>
            </div>
            <button class="remove-item" data-index="${index}">Eliminar</button>
          </li>
        `
        )
        .join("");
      document.getElementById("checkout-btn").disabled = false;
      document.getElementById("checkout-btn").classList.remove("disabled");
    }

    // Add event listeners for remove buttons
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        updateCartUI();
        cartIcon.click(); // Refresh the cart modal
      });
    });
  });

  // Close cart modal
  closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  // Checkout button
  // Checkout button
document.getElementById("checkout-btn").addEventListener("click", async () => {
  if (cart.length > 0) {
    try {
      const response = await fetch("/api/carrito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productos: cart }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Checkout successful:", result);
        alert("Compra exitosa!");
        cart = []; // Clear the cart after successful checkout
        updateCartUI();
        cartModal.style.display = "none"; // Close the modal
      } else {
        console.error("Checkout failed:", response.statusText);
        alert("La compra ha fallado. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Un error ocurrió durante la compra. Por favor, inténtalo de nuevo.");
    }
  } else {
    console.log("The cart is empty.");
    alert("Tu carrito está vacío. Por favor, añade productos antes de proceder al pago.");
  }
});
});