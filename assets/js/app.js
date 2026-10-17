/**
 * PAPA GENO'S - LUXURY RESTAURANT & GRILL
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // DISHES DATASET (Prices in PKR)
  // ==========================================
  const MENU_ITEMS = [
    {
      id: 'tikka-pizza',
      name: 'Tikka Pizza',
      category: 'pizza',
      tag: 'Best Seller',
      spice: 2,
      hasSizes: true,
      sizes: [
        { label: 'Small (7")', price: 599 },
        { label: 'Medium (10")', price: 1199, selected: true },
        { label: 'Large (13")', price: 1799 }
      ],
      description: 'Tender clay-oven spiced chicken tikka chunks, crisp bell peppers, sweet red onions, signature herb marinara, and melted whole-milk mozzarella.',
      image: 'assets/images/tikka-pizza.jpg',
      ingredients: 'Chicken Tikka chunks, Mozzarella cheese, Red bell peppers, Onions, Fresh dough, Signature pizza sauce, Oregano',
      calories: '280 kcal / slice'
    },
    {
      id: 'kababish-pizza',
      name: 'Kababish Pizza',
      category: 'pizza',
      tag: 'Chef Signature',
      spice: 3,
      hasSizes: true,
      sizes: [
        { label: 'Small (7")', price: 649 },
        { label: 'Medium (10")', price: 1299, selected: true },
        { label: 'Large (13")', price: 1899 }
      ],
      description: 'Juicy flame-charred seekh kabab medallions, spicy green chilies, rings of red onions, and rich mozzarella finished with creamy garlic sauce.',
      image: 'assets/images/kababish-pizza.jpg',
      ingredients: 'Charcoal Seekh Kabab slices, Green chilies, Red onions, Mozzarella, Creamy garlic drizzle, Herb crust',
      calories: '310 kcal / slice'
    },
    {
      id: 'shahi-pizza',
      name: 'Shahi Pizza',
      category: 'pizza',
      tag: 'Royal Luxury',
      spice: 1,
      hasSizes: true,
      sizes: [
        { label: 'Small (7")', price: 699 },
        { label: 'Medium (10")', price: 1399, selected: true },
        { label: 'Large (13")', price: 1999 }
      ],
      description: 'A royal feast with Mughlai butter chicken, smoked gourmet sausages, sliced Spanish black olives, golden sweet corn, and a velvety cream crust.',
      image: 'assets/images/shahi-pizza.jpg',
      ingredients: 'Mughlai chicken, Smoked sausages, Black olives, Sweet corn, Cream-stuffed crust, Premium mozzarella',
      calories: '330 kcal / slice'
    },
    {
      id: 'bihari-pizza',
      name: 'Bihari Pizza',
      category: 'pizza',
      tag: 'Smoky & Tender',
      spice: 3,
      hasSizes: true,
      sizes: [
        { label: 'Small (7")', price: 649 },
        { label: 'Medium (10")', price: 1299, selected: true },
        { label: 'Large (13")', price: 1899 }
      ],
      description: 'Melt-in-your-mouth Bihari marinated chicken boti infused with roasted aromatics, mustard oil, roasted red peppers, and mint-coriander cream.',
      image: 'assets/images/bihari-pizza.jpg',
      ingredients: 'Bihari chicken boti, Mustard aromatics, Onion rings, Fresh mint cream, Mozzarella cheese',
      calories: '295 kcal / slice'
    },
    {
      id: 'zinger-burger',
      name: 'Zinger Burger',
      category: 'burger',
      tag: 'Crispy Legend',
      spice: 2,
      hasSizes: false,
      price: 590,
      description: 'Double-breaded crunchy chicken breast fillet, crispy shredded iceberg lettuce, signature zesty mayo, nestled in a toasted sesame brioche bun.',
      image: 'assets/images/zinger-burger.jpg',
      ingredients: 'Fried chicken breast fillet, Spicy secret coating, Iceberg lettuce, Zesty mayo, Brioche bun',
      calories: '540 kcal'
    },
    {
      id: 'chapli-burger',
      name: 'Chapli Burger',
      category: 'burger',
      tag: 'Peshawari Heritage',
      spice: 3,
      hasSizes: false,
      price: 650,
      description: 'Authentic Peshawari spiced minced patty with crushed pomegranate seeds, charred ripe tomato slice, melted sharp cheddar, and fresh mint chutney.',
      image: 'assets/images/chapli-burger.jpg',
      ingredients: 'Spiced Peshawari minced patty, Pomegranate seeds, Charred tomato, Cheddar cheese, Mint-coriander yogurt sauce',
      calories: '590 kcal'
    },
    {
      id: 'chicken-roll',
      name: 'Chicken Roll',
      category: 'roll',
      tag: 'Street Gourmet',
      spice: 2,
      hasSizes: false,
      price: 380,
      description: 'Golden flaky griddled paratha stuffed with succulent charcoal-grilled chicken tikka boti, thin rings of onion, and our house tamarind & mint chutney.',
      image: 'assets/images/chicken-roll.jpg',
      ingredients: 'Crispy flaky paratha, Grilled chicken boti, Sliced onions, Mint-tamarind chutney, Secret chaat masala',
      calories: '420 kcal'
    },
    {
      id: 'shawarma',
      name: 'Shawarma',
      category: 'roll',
      tag: 'Authentic Lebanese',
      spice: 1,
      hasSizes: false,
      price: 390,
      description: 'Slow-roasted rotisserie shaved chicken shavings, tangy pickled cucumbers, french fries, and authentic Lebanese garlic toum wrapped in warm flatbread.',
      image: 'assets/images/shawarma.jpg',
      ingredients: 'Rotisserie chicken breast, Pickled cucumbers, French fries, Authentic garlic toum, Soft flatbread',
      calories: '450 kcal'
    },
    {
      id: 'chicken-wings',
      name: 'Chicken Wings',
      category: 'sides',
      tag: 'Crispy & Glazed',
      spice: 2,
      hasSizes: true,
      sizes: [
        { label: '6 Pieces', price: 550, selected: true },
        { label: '10 Pieces', price: 890 }
      ],
      description: 'Ultra-crispy jumbo wings tossed in your choice of signature spicy honey BBQ glaze or flaming hot buffalo sauce. Served with ranch dip.',
      image: 'assets/images/chicken-wings.jpg',
      ingredients: 'Jumbo chicken wings, Crispy seasoned coating, Honey BBQ or Buffalo sauce, Ranch dipping sauce',
      calories: '480 kcal'
    },
    {
      id: 'chicken-pasta',
      name: 'Chicken Pasta',
      category: 'pasta',
      tag: 'Creamy Italian',
      spice: 1,
      hasSizes: false,
      price: 890,
      description: 'Al dente penne pasta tossed in a luxurious white garlic cream sauce, loaded with tender grilled chicken slices, button mushrooms, and aged parmesan.',
      image: 'assets/images/chicken-pasta.jpg',
      ingredients: 'Penne pasta, Grilled chicken breast, Garlic cream Alfredo sauce, Button mushrooms, Parmesan cheese, Fresh parsley',
      calories: '610 kcal'
    },
    {
      id: 'french-fries',
      name: 'French Fries',
      category: 'sides',
      tag: 'Crispy Golden',
      spice: 0,
      hasSizes: false,
      price: 320,
      description: 'Thick-cut skin-on golden potato fries, fried to crispy perfection, dusted with coarse Himalayan salt or zesty peri-peri masala. Served with dip.',
      image: 'assets/images/french-fries.jpg',
      ingredients: 'Farm potatoes, Himalayan pink salt, Peri-peri dust, Signature garlic mayo dip',
      calories: '360 kcal'
    },
    {
      id: 'tortilla-wrap',
      name: 'Tortilla Wrap',
      category: 'roll',
      tag: 'Zesty & Fresh',
      spice: 2,
      hasSizes: false,
      price: 520,
      description: 'Toasted flour tortilla wrapped with crispy golden tenders, fresh garden greens, diced tomatoes, sweet corn, and smoky chipotle cream sauce.',
      image: 'assets/images/tortilla-wrap.jpg',
      ingredients: 'Flour tortilla, Crispy tenders, Romaine lettuce, Diced tomatoes, Chipotle dressing, Shredded cheddar',
      calories: '490 kcal'
    },
    {
      id: 'hot-shots',
      name: 'Hot Shots (10 Pcs)',
      category: 'sides',
      tag: 'Crunchy Bites',
      spice: 3,
      hasSizes: false,
      price: 450,
      description: 'Ten bite-sized crispy chicken breast poppers seasoned with our flaming red spice rub, served with sweet chili sauce and garlic mayonnaise.',
      image: 'assets/images/hot-shots.jpg',
      ingredients: 'Chicken breast bites, Spicy southern dredge, Sweet chili dip, Garlic mayo',
      calories: '380 kcal'
    },
    {
      id: 'royal-zinger-combo',
      name: "Papa's Royal Zinger Feast",
      category: 'deals',
      tag: 'Special Combo',
      spice: 2,
      hasSizes: false,
      price: 850,
      oldPrice: 1050,
      description: 'Our signature crispy Zinger Burger served alongside a basket of golden French Fries and a refreshing beverage cup. Complete satisfaction!',
      image: 'assets/images/burger-combo.jpg',
      ingredients: '1 Zinger Burger, 1 Large French Fries, 1 Chilled Drink (500ml), Dipping sauces',
      calories: '980 kcal'
    }
  ];

  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  let cart = JSON.parse(localStorage.getItem('papa_genos_cart')) || [];
  let currentCategory = 'all';
  let searchQuery = '';
  let activeCoupon = null;

  // Selected sizes map: { itemId: selectedSizeObj }
  const selectedSizes = {};
  MENU_ITEMS.forEach(item => {
    if (item.hasSizes) {
      const def = item.sizes.find(s => s.selected) || item.sizes[0];
      selectedSizes[item.id] = def;
    }
  });

  // ==========================================
  // DOM REFERENCES
  // ==========================================
  const menuGrid = document.getElementById('menuGrid');
  const searchInput = document.getElementById('menuSearch');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const cartBtn = document.getElementById('cartBtn');
  const floatingCartBtn = document.getElementById('floatingCartBtn');
  const cartBadge = document.getElementById('cartBadge');
  const cartBadgeFloat = document.getElementById('cartBadgeFloat');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDeliveryEl = document.getElementById('cartDelivery');
  const cartDiscountRow = document.getElementById('cartDiscountRow');
  const cartDiscountEl = document.getElementById('cartDiscount');
  const cartTotalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const promoInput = document.getElementById('promoCodeInput');
  const applyPromoBtn = document.getElementById('applyPromoBtn');

  // Checkout Modal
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutModalBackdrop = document.getElementById('checkoutModalBackdrop');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const checkoutForm = document.getElementById('checkoutForm');
  const checkoutGrandTotal = document.getElementById('checkoutGrandTotal');
  const orderNowNavBtn = document.getElementById('orderNowNavBtn');
  const heroOrderBtn = document.getElementById('heroOrderBtn');

  // Receipt Modal
  const receiptModal = document.getElementById('receiptModal');
  const receiptModalBackdrop = document.getElementById('receiptModalBackdrop');
  const closeReceiptBtn = document.getElementById('closeReceiptBtn');
  const receiptContent = document.getElementById('receiptContent');

  // Quick View Modal
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewModalBackdrop = document.getElementById('quickViewModalBackdrop');
  const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');
  const quickViewBody = document.getElementById('quickViewBody');

  // Reservation Modal
  const reservationModal = document.getElementById('reservationModal');
  const reservationModalBackdrop = document.getElementById('reservationModalBackdrop');
  const closeReservationBtn = document.getElementById('closeReservationBtn');
  const openReservationBtn = document.getElementById('openReservationBtn');
  const reservationForm = document.getElementById('reservationForm');

  // Mobile Menu
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  // Header scroll detection
  const headerMain = document.getElementById('headerMain');

  // ==========================================
  // INITIAL RENDER
  // ==========================================
  renderMenu();
  updateCartUI();

  // ==========================================
  // NAVBAR SCROLL EFFECT
  // ==========================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      headerMain.classList.add('scrolled');
    } else {
      headerMain.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // ==========================================
  // MENU RENDERING
  // ==========================================
  function renderMenu() {
    if (!menuGrid) return;

    const filtered = MENU_ITEMS.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <i class="fa-solid fa-utensils" style="font-size: 3rem; color: var(--color-choco-border); margin-bottom: 1rem;"></i>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-cream-100); margin-bottom: 0.5rem;">No dishes found</h3>
          <p style="color: var(--color-cream-muted);">Try a different search keyword or category filter.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = filtered.map(item => {
      let currentPrice = item.price;
      let sizeSelectorHTML = '';

      if (item.hasSizes) {
        const activeSize = selectedSizes[item.id] || item.sizes[0];
        currentPrice = activeSize.price;

        sizeSelectorHTML = `
          <div class="dish-size-select-wrap">
            <span class="dish-size-label">Select Size / Portion:</span>
            <div class="dish-size-pills">
              ${item.sizes.map(s => `
                <button type="button" class="size-pill ${s.label === activeSize.label ? 'active' : ''}" 
                  data-item-id="${item.id}" data-size-label="${s.label}" data-size-price="${s.price}">
                  ${s.label}
                </button>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Spice icons
      let spiceHTML = '';
      if (item.spice > 0) {
        spiceHTML = `<div class="dish-spice" title="Spice level: ${item.spice}/3">${'🌶️'.repeat(item.spice)}</div>`;
      }

      return `
        <article class="dish-card" data-dish-id="${item.id}">
          <div class="dish-thumb-wrap">
            <img class="dish-thumb" src="${item.image}" alt="${item.name}" loading="lazy">
            <span class="dish-tag">${item.tag}</span>
            ${spiceHTML}
          </div>
          <div class="dish-body">
            <div class="dish-title-row">
              <h3 class="dish-title">${item.name}</h3>
            </div>
            <p class="dish-desc">${item.description}</p>
            ${sizeSelectorHTML}
            <div class="dish-footer">
              <div class="dish-price-col">
                <span class="dish-currency">PKR Price</span>
                <span class="dish-price" id="price-display-${item.id}">Rs. ${currentPrice.toLocaleString()}</span>
              </div>
              <div class="dish-actions">
                <button type="button" class="btn-quick-view" data-quickview-id="${item.id}" title="Quick View">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button type="button" class="btn-add-cart" data-cart-id="${item.id}">
                  <i class="fa-solid fa-plus"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach size change listeners
    menuGrid.querySelectorAll('.size-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const itemId = pill.getAttribute('data-item-id');
        const sizeLabel = pill.getAttribute('data-size-label');
        const sizePrice = parseInt(pill.getAttribute('data-size-price'), 10);

        selectedSizes[itemId] = { label: sizeLabel, price: sizePrice };

        // Update UI pill active states
        const parentPills = pill.closest('.dish-size-pills');
        parentPills.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        // Update displayed price
        const priceDisplay = document.getElementById(`price-display-${itemId}`);
        if (priceDisplay) {
          priceDisplay.textContent = `Rs. ${sizePrice.toLocaleString()}`;
        }
      });
    });

    // Attach Add to Cart listeners
    menuGrid.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-cart-id');
        addItemToCart(itemId);
      });
    });

    // Attach Quick View listeners
    menuGrid.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-quickview-id');
        openQuickView(itemId);
      });
    });
  }

  // ==========================================
  // CATEGORY TABS & SEARCH
  // ==========================================
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderMenu();
    });
  }

  // ==========================================
  // CART OPERATIONS
  // ==========================================
  function addItemToCart(itemId, customSize = null) {
    const item = MENU_ITEMS.find(m => m.id === itemId);
    if (!item) return;

    let selectedSizeLabel = null;
    let itemPrice = item.price;

    if (item.hasSizes) {
      const sizeObj = customSize || selectedSizes[itemId] || item.sizes[0];
      selectedSizeLabel = sizeObj.label;
      itemPrice = sizeObj.price;
    }

    // Unique key: itemId + sizeLabel (so Small and Large Tikka Pizza are separate entries)
    const cartItemKey = selectedSizeLabel ? `${item.id}-${selectedSizeLabel}` : item.id;

    const existingIndex = cart.findIndex(c => c.key === cartItemKey);
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push({
        key: cartItemKey,
        id: item.id,
        name: item.name,
        size: selectedSizeLabel,
        price: itemPrice,
        image: item.image,
        qty: 1
      });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${item.name} ${selectedSizeLabel ? `(${selectedSizeLabel})` : ''} to cart!`, 'fa-cart-plus');
    bumpCartBadge();
  }

  function changeCartQty(key, delta) {
    const idx = cart.findIndex(c => c.key === key);
    if (idx === -1) return;

    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) {
      cart.splice(idx, 1);
    }

    saveCart();
    updateCartUI();
  }

  function removeCartItem(key) {
    cart = cart.filter(c => c.key !== key);
    saveCart();
    updateCartUI();
  }

  function saveCart() {
    localStorage.setItem('papa_genos_cart', JSON.stringify(cart));
  }

  function bumpCartBadge() {
    if (cartBadge) {
      cartBadge.classList.add('bump');
      setTimeout(() => cartBadge.classList.remove('bump'), 300);
    }
  }

  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Update Badges
    if (cartBadge) cartBadge.textContent = totalItems;
    if (cartBadgeFloat) cartBadgeFloat.textContent = totalItems;

    // Delivery calculation: Free if subtotal > 1999 or cart is empty
    const deliveryFee = (totalItems === 0 || subtotal >= 1999) ? 0 : 150;

    // Discount calculation
    let discount = 0;
    if (activeCoupon && subtotal > 0) {
      if (activeCoupon.type === 'percent') {
        discount = Math.round((subtotal * activeCoupon.value) / 100);
      } else if (activeCoupon.type === 'flat') {
        discount = activeCoupon.value;
      }
    }

    const finalTotal = Math.max(0, subtotal + deliveryFee - discount);

    if (cartSubtotalEl) cartSubtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
    if (cartDeliveryEl) {
      cartDeliveryEl.textContent = deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`;
    }

    if (cartDiscountRow && cartDiscountEl) {
      if (discount > 0) {
        cartDiscountRow.style.display = 'flex';
        cartDiscountEl.textContent = `- Rs. ${discount.toLocaleString()} (${activeCoupon.code})`;
      } else {
        cartDiscountRow.style.display = 'none';
      }
    }

    if (cartTotalEl) cartTotalEl.textContent = `Rs. ${finalTotal.toLocaleString()}`;
    if (checkoutGrandTotal) checkoutGrandTotal.textContent = `Rs. ${finalTotal.toLocaleString()}`;

    // Render Cart Items
    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-view">
          <i class="fa-solid fa-basket-shopping cart-empty-icon"></i>
          <h4 class="cart-empty-title">Your cart is empty</h4>
          <p class="cart-empty-desc">Delicious stone-baked pizzas and juicy burgers await you!</p>
          <button type="button" class="btn-primary" id="btnBrowseMenu" style="margin-top: 0.5rem;">
            Explore Menu
          </button>
        </div>
      `;

      const browseBtn = document.getElementById('btnBrowseMenu');
      if (browseBtn) {
        browseBtn.addEventListener('click', () => {
          closeCartDrawer();
          const menuSection = document.getElementById('menu');
          if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
        });
      }

      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;

    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          ${item.size ? `<span class="cart-item-meta">Size: ${item.size}</span>` : ''}
          <span class="cart-item-price">Rs. ${item.price.toLocaleString()}</span>
        </div>
        <div class="cart-item-qty-controls">
          <button type="button" class="qty-btn" data-qty-dec="${item.key}">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="qty-val">${item.qty}</span>
          <button type="button" class="qty-btn" data-qty-inc="${item.key}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <button type="button" class="btn-item-remove" data-remove-key="${item.key}" title="Remove">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    // Attach item qty listeners
    cartItemsList.querySelectorAll('[data-qty-inc]').forEach(btn => {
      btn.addEventListener('click', () => {
        changeCartQty(btn.getAttribute('data-qty-inc'), 1);
      });
    });

    cartItemsList.querySelectorAll('[data-qty-dec]').forEach(btn => {
      btn.addEventListener('click', () => {
        changeCartQty(btn.getAttribute('data-qty-dec'), -1);
      });
    });

    cartItemsList.querySelectorAll('[data-remove-key]').forEach(btn => {
      btn.addEventListener('click', () => {
        removeCartItem(btn.getAttribute('data-remove-key'));
      });
    });
  }

  // ==========================================
  // CART DRAWER TOGGLES
  // ==========================================
  function openCartDrawer() {
    if (cartDrawer && cartDrawerBackdrop) {
      cartDrawer.classList.add('open');
      cartDrawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (cartDrawer && cartDrawerBackdrop) {
      cartDrawer.classList.remove('open');
      cartDrawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (floatingCartBtn) floatingCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartDrawerBackdrop) cartDrawerBackdrop.addEventListener('click', closeCartDrawer);

  // Promo Code
  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) return;

      if (code === 'PAPA10') {
        activeCoupon = { code: 'PAPA10', type: 'percent', value: 10 };
        showToast('Coupon PAPA10 applied! 10% discount added.', 'fa-tag');
        updateCartUI();
      } else if (code === 'GENO50') {
        activeCoupon = { code: 'GENO50', type: 'flat', value: 50 };
        showToast('Coupon GENO50 applied! Rs. 50 discount added.', 'fa-tag');
        updateCartUI();
      } else {
        showToast('Invalid coupon code. Try PAPA10', 'fa-circle-xmark');
      }
    });
  }

  // ==========================================
  // CHECKOUT MODAL
  // ==========================================
  function openCheckout() {
    if (cart.length === 0) {
      showToast('Your cart is empty! Add dishes to proceed.', 'fa-triangle-exclamation');
      return;
    }
    closeCartDrawer();
    if (checkoutModal && checkoutModalBackdrop) {
      checkoutModal.classList.add('open');
      checkoutModalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCheckout() {
    if (checkoutModal && checkoutModalBackdrop) {
      checkoutModal.classList.remove('open');
      checkoutModalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
  if (orderNowNavBtn) orderNowNavBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      // If empty, add default crowd favorite or scroll to menu
      addItemToCart('zinger-burger');
      openCheckout();
    } else {
      openCheckout();
    }
  });

  if (heroOrderBtn) heroOrderBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      addItemToCart('royal-zinger-combo');
      openCartDrawer();
    } else {
      openCheckout();
    }
  });

  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
  if (checkoutModalBackdrop) checkoutModalBackdrop.addEventListener('click', closeCheckout);

  // Delivery Option switch
  const deliveryOpts = document.querySelectorAll('.delivery-opt-card');
  deliveryOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      deliveryOpts.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });

  // Payment Option switch
  const paymentOpts = document.querySelectorAll('.payment-opt-card');
  paymentOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      paymentOpts.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });

  // Checkout Form Submission
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const customerName = document.getElementById('custName').value.trim();
      const customerPhone = document.getElementById('custPhone').value.trim();
      const customerAddress = document.getElementById('custAddress').value.trim();
      const customerCity = document.getElementById('custCity').value.trim();
      const customerNotes = document.getElementById('custNotes').value.trim();

      const activeDelivery = document.querySelector('.delivery-opt-card.active');
      const deliveryMethod = activeDelivery ? activeDelivery.getAttribute('data-delivery-type') : 'Standard Delivery';

      const activePayment = document.querySelector('.payment-opt-card.active');
      const paymentMethod = activePayment ? activePayment.getAttribute('data-payment-type') : 'Cash on Delivery';

      // Calculations
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const deliveryFee = (subtotal >= 1999 || deliveryMethod === 'Self Pickup') ? 0 : 150;
      let discount = 0;
      if (activeCoupon) {
        if (activeCoupon.type === 'percent') discount = Math.round((subtotal * activeCoupon.value) / 100);
        else if (activeCoupon.type === 'flat') discount = activeCoupon.value;
      }
      const grandTotal = Math.max(0, subtotal + deliveryFee - discount);

      // Generate Order ID
      const orderId = 'PG-' + Math.floor(100000 + Math.random() * 900000);

      const orderData = {
        orderId,
        date: new Date().toLocaleDateString('en-PK', { dateStyle: 'medium', timeStyle: 'short' }),
        customer: {
          name: customerName,
          phone: customerPhone,
          address: customerAddress,
          city: customerCity,
          notes: customerNotes
        },
        deliveryMethod,
        paymentMethod,
        items: [...cart],
        subtotal,
        deliveryFee,
        discount,
        grandTotal
      };

      // Close checkout modal
      closeCheckout();

      // Show Order Success Receipt
      showOrderReceipt(orderData);

      // Reset cart
      cart = [];
      activeCoupon = null;
      saveCart();
      updateCartUI();
    });
  }

  // ==========================================
  // RECEIPT & WHATSAPP GENERATOR
  // ==========================================
  function showOrderReceipt(order) {
    if (!receiptContent) return;

    // Build WhatsApp message link
    let waText = `*NEW ORDER - PAPA GENO'S RESTAURANT*\n`;
    waText += `*Order ID:* ${order.orderId}\n`;
    waText += `*Customer:* ${order.customer.name} (${order.customer.phone})\n`;
    waText += `*Address:* ${order.customer.address}, ${order.customer.city}\n`;
    waText += `*Delivery Type:* ${order.deliveryMethod}\n`;
    waText += `*Payment:* ${order.paymentMethod}\n`;
    waText += `--------------------------------\n`;
    waText += `*ITEMS ORDERED:*\n`;
    order.items.forEach((item, i) => {
      waText += `${i+1}. ${item.name} ${item.size ? `(${item.size})` : ''} x ${item.qty} = Rs. ${item.price * item.qty}\n`;
    });
    waText += `--------------------------------\n`;
    waText += `*Subtotal:* Rs. ${order.subtotal.toLocaleString()}\n`;
    if (order.deliveryFee > 0) waText += `*Delivery Fee:* Rs. ${order.deliveryFee}\n`;
    if (order.discount > 0) waText += `*Discount:* -Rs. ${order.discount}\n`;
    waText += `*GRAND TOTAL:* Rs. ${order.grandTotal.toLocaleString()}\n`;
    if (order.customer.notes) waText += `*Special Note:* ${order.customer.notes}\n`;

    const waEncoded = encodeURIComponent(waText);
    const waUrl = `https://wa.me/923001234567?text=${waEncoded}`;

    receiptContent.innerHTML = `
      <div class="receipt-success-icon">
        <i class="fa-solid fa-check"></i>
      </div>
      <h3 class="receipt-title">Order Placed Successfully!</h3>
      <span class="receipt-id-tag">ORDER ID: ${order.orderId}</span>
      <p style="color: var(--color-cream-300); margin-bottom: 1.5rem; font-size: 0.95rem;">
        Thank you, <strong>${order.customer.name}</strong>! Your order is being freshly prepared in our artisan stone oven.
        Estimated delivery time is <strong>30-40 minutes</strong>.
      </p>

      <div class="receipt-details-table">
        <div class="receipt-row">
          <span>Date &amp; Time</span>
          <span>${order.date}</span>
        </div>
        <div class="receipt-row">
          <span>Delivery Mode</span>
          <span>${order.deliveryMethod}</span>
        </div>
        <div class="receipt-row">
          <span>Payment Mode</span>
          <span>${order.paymentMethod}</span>
        </div>
        <div class="receipt-row">
          <span>Deliver To</span>
          <span>${order.customer.address}, ${order.customer.city}</span>
        </div>
        <div class="receipt-row" style="margin-top: 0.5rem; font-weight: 700; color: var(--color-gold-light);">
          <span>Items Ordered</span>
          <span>Qty &amp; Price</span>
        </div>
        ${order.items.map(it => `
          <div class="receipt-row" style="font-size: 0.85rem;">
            <span>${it.name} ${it.size ? `<small>(${it.size})</small>` : ''}</span>
            <span>${it.qty} × Rs. ${it.price.toLocaleString()}</span>
          </div>
        `).join('')}
        <div class="receipt-row">
          <span>Subtotal</span>
          <span>Rs. ${order.subtotal.toLocaleString()}</span>
        </div>
        <div class="receipt-row">
          <span>Delivery Charges</span>
          <span>${order.deliveryFee === 0 ? 'FREE' : `Rs. ${order.deliveryFee}`}</span>
        </div>
        ${order.discount > 0 ? `
          <div class="receipt-row">
            <span>Special Discount</span>
            <span>- Rs. ${order.discount.toLocaleString()}</span>
          </div>
        ` : ''}
        <div class="receipt-row">
          <span>Total Payable</span>
          <span>Rs. ${order.grandTotal.toLocaleString()}</span>
        </div>
      </div>

      <div class="receipt-actions">
        <a href="${waUrl}" target="_blank" class="btn-primary" style="background: linear-gradient(135deg, #25D366, #128C7E);">
          <i class="fa-brands fa-whatsapp" style="font-size: 1.2rem;"></i> Send to WhatsApp Order Desk
        </a>
        <button type="button" class="btn-gold" onclick="window.print()">
          <i class="fa-solid fa-print"></i> Print Receipt
        </button>
      </div>
    `;

    if (receiptModal && receiptModalBackdrop) {
      receiptModal.classList.add('open');
      receiptModalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeReceipt() {
    if (receiptModal && receiptModalBackdrop) {
      receiptModal.classList.remove('open');
      receiptModalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (closeReceiptBtn) closeReceiptBtn.addEventListener('click', closeReceipt);
  if (receiptModalBackdrop) receiptModalBackdrop.addEventListener('click', closeReceipt);

  // ==========================================
  // QUICK VIEW MODAL
  // ==========================================
  function openQuickView(itemId) {
    const item = MENU_ITEMS.find(m => m.id === itemId);
    if (!item || !quickViewBody) return;

    let priceRange = `Rs. ${item.price?.toLocaleString() || ''}`;
    if (item.hasSizes) {
      const minP = Math.min(...item.sizes.map(s => s.price));
      const maxP = Math.max(...item.sizes.map(s => s.price));
      priceRange = `Rs. ${minP.toLocaleString()} - Rs. ${maxP.toLocaleString()}`;
    }

    quickViewBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
        <div style="border-radius: var(--radius-lg); overflow: hidden; height: 320px; border: 1px solid var(--color-gold-primary);">
          <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <span class="dish-tag" style="position: static; width: fit-content;">${item.tag}</span>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff;">${item.name}</h3>
          <p style="color: var(--color-cream-muted); font-size: 0.95rem; line-height: 1.6;">${item.description}</p>
          <div style="background: rgba(44, 23, 13, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-choco-border);">
            <div style="font-size: 0.85rem; color: var(--color-gold-light); margin-bottom: 0.3rem;">
              <strong>Key Ingredients:</strong>
            </div>
            <div style="font-size: 0.85rem; color: var(--color-cream-300);">${item.ingredients}</div>
            <div style="font-size: 0.8rem; color: var(--color-cream-muted); margin-top: 0.5rem;">
              <i class="fa-solid fa-fire-flame-curved"></i> Estimated Calories: ${item.calories}
            </div>
          </div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--color-gold-light);">
            ${priceRange}
          </div>
          <div style="display: flex; gap: 1rem;">
            <button type="button" class="btn-primary" id="btnQuickAddToCart">
              <i class="fa-solid fa-plus"></i> Add to Cart Now
            </button>
          </div>
        </div>
      </div>
    `;

    const addBtn = document.getElementById('btnQuickAddToCart');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        addItemToCart(item.id);
        closeQuickView();
        openCartDrawer();
      });
    }

    if (quickViewModal && quickViewModalBackdrop) {
      quickViewModal.classList.add('open');
      quickViewModalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeQuickView() {
    if (quickViewModal && quickViewModalBackdrop) {
      quickViewModal.classList.remove('open');
      quickViewModalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (closeQuickViewBtn) closeQuickViewBtn.addEventListener('click', closeQuickView);
  if (quickViewModalBackdrop) quickViewModalBackdrop.addEventListener('click', closeQuickView);

  // ==========================================
  // TABLE RESERVATION MODAL
  // ==========================================
  function openReservation() {
    if (reservationModal && reservationModalBackdrop) {
      reservationModal.classList.add('open');
      reservationModalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeReservation() {
    if (reservationModal && reservationModalBackdrop) {
      reservationModal.classList.remove('open');
      reservationModalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (openReservationBtn) openReservationBtn.addEventListener('click', openReservation);
  if (closeReservationBtn) closeReservationBtn.addEventListener('click', closeReservation);
  if (reservationModalBackdrop) reservationModalBackdrop.addEventListener('click', closeReservation);

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('resName').value;
      const guests = document.getElementById('resGuests').value;
      const date = document.getElementById('resDate').value;
      closeReservation();
      showToast(`Table reserved for ${name} (${guests} Guests) on ${date}! We look forward to hosting you.`, 'fa-champagne-glasses');
      reservationForm.reset();
    });
  }

  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================
  function showToast(message, iconClass = 'fa-circle-check') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i class="fa-solid ${iconClass} toast-icon"></i>
      <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Remove after 3.5s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // Expose helpers globally to sync with HTML deals buttons and footer links
  window.addDealToCart = function(dealName, dealPrice, dealImage) {
    const dealKey = 'deal-' + dealName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const existingIndex = cart.findIndex(c => c.key === dealKey);
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push({
        key: dealKey,
        id: dealKey,
        name: dealName,
        size: 'Special Combo Feast',
        price: dealPrice,
        image: dealImage,
        qty: 1
      });
    }
    saveCart();
    updateCartUI();
    showToast(`Added ${dealName} to cart!`, 'fa-cart-plus');
    bumpCartBadge();
    openCartDrawer();
  };

  window.filterByDish = function(dishName) {
    if (searchInput) {
      searchInput.value = dishName;
      searchQuery = dishName;
      currentCategory = 'all';
      tabButtons.forEach(b => {
        if (b.getAttribute('data-category') === 'all') b.classList.add('active');
        else b.classList.remove('active');
      });
      renderMenu();
      const menuSection = document.getElementById('menu');
      if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
});

