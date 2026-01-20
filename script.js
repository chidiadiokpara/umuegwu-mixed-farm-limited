let Cart = [];

const cartpopup = document.getElementById("cart-popup");
const cartItems = document.getElementById("cart-items");
const carttotal = document.getElementById("cart-total");
const closeCart = document.getElementById("close-cart");
const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.parentElement;
        const name = card.dataset.name;
        const price = parseInt(card.dataset.price);

        const existing = cart.find(item => item.name === name);

        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        const li = document.createElement("li");
        li.innerHTML = `
      ${item.name} x${item.qty} - ₦${item.price.toLocaleString()}
      <span class="remove-item" onclick="removeItem(${index})">✖</span>
    `;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = `Total: ₦${total.toLocaleString()}`;
    cartPopup.style.display = "block";
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

closeCart.addEventListener("click", () => {
    cartPopup.style.display = "none";
});




const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.05)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 300);
    });
});


const timelineItems = document.querySelectorAll(".timeline-item");

const showTimelineItems = () => {
    timelineItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            item.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showTimelineItems);
showTimelineItems();


const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "Added ✔️";
        setTimeout(() => {
            button.textContent = "Add to Cart 🛒";
        }, 1200);
    });
});



const supplySteps = document.querySelectorAll(".supply-step");

window.addEventListener("scroll", () => {
    supplySteps.forEach(step => {
        const pos = step.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (pos < screenHeight - 100) {
            step.style.opacity = "1";
            step.style.transform = "translateY(0)";
        }
    });
});

// // Function to update the cart display
// function updateCart() {
//     cartItemsList.innerHTML = "";
//     let total = 0;

//     cart.forEach((item, index) => {
//         const li = document.createElement("li");
//         li.innerHTML = `${item.name} (₦${item.price.toLocaleString()}) x ${item.qty} <span class="remove" data-index="${index}">✖️</span>`;
//         cartItemsList.appendChild(li);
//         total += item.price * item.qty;
//     });

//     cartTotal.textContent = `Total: ₦${total.toLocaleString()}`;

//     // Add remove functionality
//     document.querySelectorAll(".remove").forEach(btn => {
//         btn.addEventListener("click", e => {
//             const index = e.target.dataset.index;
//             cart.splice(index, 1);
//             updateCart();
//         });
//     });

//     // Show popup if there is at least one item
//     cartPopup.style.display = cart.length ? "block" : "none";
// }

// // Add to cart button click
// addToCartButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const itemName = btn.parentElement.previousElementSibling.textContent;
//         const itemPriceText = btn.parentElement.textContent.replace("🛒", "").trim();
//         const itemPrice = parseInt(itemPriceText.replace(/[^0-9]/g, ""), 10);

//         // Check if item already in cart
//         const existingItem = cart.find(i => i.name === itemName);
//         if (existingItem) {
//             existingItem.qty += 1;
//         } else {
//             cart.push({ name: itemName, price: itemPrice, qty: 1 });
//         }

//         updateCart();
//     });
// });

// // Close cart
// closeCartBtn.addEventListener("click", () => {
//     cartPopup.style.display = "none";
// });


const cartPopup = document.getElementById("cart-popup");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const closeCartBtn = document.getElementById("close-cart");
let cart = [];






// const logo = document.getElementById("farmLogo");

// logo.addEventListener("click", () => {
//     logo.style.transform = "rotate(360deg)";
//     logo.style.transition = "1s";

//     setTimeout(() => {
//         logo.style.transform = "rotate(0deg)";
//     }, 1000);
// });