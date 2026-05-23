// Cart State Management
let cart = JSON.parse(localStorage.getItem('apple_cart')) || [];

// Save Cart
function saveCart() {
  localStorage.setItem('apple_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartItems();
}

// Add Item
function addItemToCart(item) {
  const existingItem = cart.find(i => i.name === item.name);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  
  saveCart();
  
  // Show cart when item added
  if (!document.getElementById('cart-panel').classList.contains('translate-x-0')) {
    toggleCart();
  }
}

// Remove Item
function removeItemFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

// Update Quantity
function updateQuantity(index, change) {
  if (cart[index]) {
    cart[index].quantity = (cart[index].quantity || 1) + change;
    if (cart[index].quantity <= 0) {
      removeItemFromCart(index);
    } else {
      saveCart();
    }
  }
}

// Toggle Cart Sidebar
function toggleCart() {
  const panel = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  
  if (panel.classList.contains('translate-x-full')) {
    // Open
    panel.classList.remove('translate-x-full');
    panel.classList.add('translate-x-0');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
  } else {
    // Close
    panel.classList.add('translate-x-full');
    panel.classList.remove('translate-x-0');
    overlay.classList.add('opacity-0');
    setTimeout(() => overlay.classList.add('hidden'), 300);
  }
}

// Update Cart Badge
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  
  badges.forEach(badge => {
    if (totalItems > 0) {
      badge.textContent = totalItems;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

// Render Cart Items
function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-gray-500">
      <svg class="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
      <p class="text-lg">Your bag is empty.</p>
    </div>`;
    totalEl.textContent = "₹0";
    return;
  }
  
  let html = '';
  let total = 0;
  
  cart.forEach((item, index) => {
    const qty = item.quantity || 1;
    // Basic price parsing (e.g. "From ₹999" -> 999)
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
    total += priceNum * qty;
    
    html += `
      <div class="flex items-center gap-4 bg-gray-50 p-4 rounded-xl relative group">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain" />
        <div class="flex-1">
          <h4 class="font-bold text-sm text-gray-900">${item.name}</h4>
          <p class="text-sm text-gray-500">${item.price}</p>
          <div class="flex items-center gap-3 mt-2">
            <button onclick="updateQuantity(${index}, -1)" class="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors font-bold pb-0.5">-</button>
            <span class="text-sm font-semibold">${qty}</span>
            <button onclick="updateQuantity(${index}, 1)" class="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors font-bold pb-0.5">+</button>
          </div>
        </div>
        <button onclick="removeItemFromCart(${index})" class="text-gray-400 hover:text-red-500 transition-colors p-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    `;
  });
  
  container.innerHTML = html;
  totalEl.textContent = "₹" + total.toLocaleString();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCartItems();
});
