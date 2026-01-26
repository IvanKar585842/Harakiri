const cartOverlay = document.getElementById('cartOverlay');
const cartOpenBtn = document.getElementById('cartOpenBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');

let cart = [];

/* OPEN / CLOSE */
cartOpenBtn.onclick = () => cartOverlay.classList.add('active');
cartCloseBtn.onclick = () => cartOverlay.classList.remove('active');

/* ADD TO CART */
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('buy-btn')) return;

  const btn = e.target;

  const product = {
    id: btn.dataset.id,
    title: btn.dataset.title,
    price: +btn.dataset.price,
    img: btn.dataset.img,
    qty: 1
  };

  const existing = cart.find(p => p.id === product.id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push(product);
  }

  renderCart();
  cartOverlay.classList.add('active');
});

/* RENDER */
function renderCart() {
  cartItemsEl.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    const li = document.createElement('li');
    li.className = 'cart-item';

    li.innerHTML = `<div class="cart-item-image">
    <img src="${item.img}" alt="${item.title}">
  </div>

  <div class="cart-item-info">

    <h3 class="cart-item-title">${item.title}</h3>

    <div class="cart-item-meta-wrapper">
      <p class="cart-item-meta">Medium | Black</p>
      <button class="cart-remove-btn" data-action="remove" data-id="${item.id}">
  <svg class="card-trash" width="20" height="20" viewBox="0 0 24 24">
    <path d="M3 6h18" />
    <path d="M8 6v14" />
    <path d="M16 6v14" />
    <path d="M5 6l1 14h12l1-14" />
  </svg>
</button>
    </div>

    <p class="cart-item-price">$${item.price}</p>
    <p class="cart-item-discount">(30% Off)</p>

    <div class="cart-qty">
      <button data-action="minus" class="produkt-numb" data-id="${item.id}">−</button>
      <span class="produkt-number">${item.qty}</span>
      <button data-action="plus" class="produkt-numb" data-id="${item.id}">+</button>
    </div>
  </div>`;

    cartItemsEl.appendChild(li);
  });

  cartTotalEl.textContent = `$${total}`;
}

/* CONTROLS */
cartItemsEl.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  const action = e.target.dataset.action;
  const item = cart.find(i => i.id === id);
  if (!item) return;

  if (action === 'plus') item.qty++;
  if (action === 'minus') {
    item.qty--;
    if (item.qty === 0) cart = cart.filter(i => i.id !== id);
  }
  if (action === 'remove') {
    cart = cart.filter(i => i.id !== id);
  }

  renderCart();
});