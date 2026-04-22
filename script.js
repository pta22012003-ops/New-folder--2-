// Product Data - Cellphones Style Premium Images & Real Specs
f (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
}
let products = JSON.parse(localStorage.getItem("products")) || [
    {
        id: 1,
        name: "iPhone 17 Pro Max",
        brand: "iphone",
        price: 36990000,
        originalPrice: 41990000,
        image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "12GB RAM", "A19 Pro"],
        tag: "Sắp ra mắt",
        color: "Titan Đen",
        storageOptions: ["256GB", "512GB", "1TB", "2TB"],
        ram: "12GB",
        battery: "4852 mAh",
        screen: "6.9 inch",
        chipset: "Apple A19 Pro (3nm)",
        rearCamera: "48MP + 48MP + 48MP",
        frontCamera: "24MP"
    },
    {
        id: 2,
        name: "iPhone 17 Pro",
        brand: "iphone",
        price: 32990000,
        originalPrice: 37990000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=640&h=640&fit=crop&q=90",
        specs: ["128GB", "12GB RAM", "A19 Pro"],
        tag: "Sắp ra mắt",
        color: "Titan Xám",
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        ram: "12GB",
        battery: "3682 mAh",
        screen: "6.3 inch",
        chipset: "Apple A19 Pro (3nm)",
        rearCamera: "48MP + 48MP + 48MP",
        frontCamera: "24MP"
    },
    {
        id: 3,
        name: "iPhone 17",
        brand: "iphone",
        price: 24990000,
        originalPrice: 28990000,
        image: "https://images.unsplash.com/photo-1510557880102-c9146f39e5c4?w=640&h=640&fit=crop&q=90",
        specs: ["128GB", "8GB RAM", "A19"],
        tag: "Sắp ra mắt",
        color: "Xanh Mint",
        storageOptions: ["128GB", "256GB", "512GB"],
        ram: "8GB",
        battery: "3650 mAh",
        screen: "6.3 inch",
        chipset: "Apple A19 (3nm)",
        rearCamera: "48MP + 48MP",
        frontCamera: "24MP"
    },
    {
        id: 4,
        name: "iPhone 16 Pro Max",
        brand: "iphone",
        price: 32990000,
        originalPrice: 36990000,
        image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "8GB RAM", "A18 Pro"],
        tag: "Mới nhất",
        color: "Titan Sa Mạc",
        storageOptions: ["256GB", "512GB", "1TB"],
        ram: "8GB",
        battery: "4685 mAh",
        screen: "6.9 inch",
        chipset: "Apple A18 Pro (3nm)",
        rearCamera: "48MP + 48MP + 12MP",
        frontCamera: "12MP"
    },
    {
        id: 5,
        name: "iPhone 16 Pro",
        brand: "iphone",
        price: 28990000,
        originalPrice: 31990000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=640&h=640&fit=crop&q=90",
        specs: ["128GB", "8GB RAM", "A18 Pro"],
        tag: "Mới nhất",
        color: "Titan Tự Nhiên",
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        ram: "8GB",
        battery: "3582 mAh",
        screen: "6.3 inch",
        chipset: "Apple A18 Pro (3nm)",
        rearCamera: "48MP + 48MP + 12MP",
        frontCamera: "12MP"
    },
    {
        id: 6,
        name: "iPhone 16 Plus",
        brand: "iphone",
        price: 22990000,
        originalPrice: 25990000,
        image: "https://images.unsplash.com/photo-1510557880102-c9146f39e5c4?w=640&h=640&fit=crop&q=90",
        specs: ["128GB", "8GB RAM", "A18"],
        tag: "Mới nhất",
        color: "Hồng Pastel",
        storageOptions: ["128GB", "256GB", "512GB"],
        ram: "8GB",
        battery: "4674 mAh",
        screen: "6.7 inch",
        chipset: "Apple A18 (3nm)",
        rearCamera: "48MP + 12MP",
        frontCamera: "12MP"
    },
    {
        id: 7,
        name: "iPhone 16",
        brand: "iphone",
        price: 19990000,
        originalPrice: 22990000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=640&h=640&fit=crop&q=90",
        specs: ["128GB", "8GB RAM", "A18"],
        tag: "Mới nhất",
        color: "Xanh Ultramarine",
        storageOptions: ["128GB", "256GB", "512GB"],
        ram: "8GB",
        battery: "3561 mAh",
        screen: "6.1 inch",
        chipset: "Apple A18 (3nm)",
        rearCamera: "48MP + 12MP",
        frontCamera: "12MP"
    },
    {
        id: 8,
        name: "iPhone 15 Pro Max",
        brand: "iphone",
        price: 27990000,
        originalPrice: 34990000,
        image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "8GB RAM", "A17 Pro"],
        tag: "Giảm giá sốc",
        color: "Titan Tự Nhiên",
        storageOptions: ["256GB", "512GB", "1TB"],
        ram: "8GB",
        battery: "4422 mAh",
        screen: "6.7 inch",
        chipset: "Apple A17 Pro",
        rearCamera: "48MP + 12MP + 12MP",
        frontCamera: "12MP"
    },
    {
        id: 9,
        name: "iPhone 15 Pro",
        brand: "iphone",
        price: 23990000,
        originalPrice: 28990000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=640&h=640&fit=crop&q=90",
        specs: ["128GB", "8GB RAM", "A17 Pro"],
        tag: "Giảm giá sốc",
        color: "Titan Xanh",
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        ram: "8GB",
        battery: "3274 mAh",
        screen: "6.1 inch",
        chipset: "Apple A17 Pro",
        rearCamera: "48MP + 12MP + 12MP",
        frontCamera: "12MP"
    },
    {
        id: 10,
        name: "iPhone 15",
        brand: "iphone",
        price: 17990000,
        originalPrice: 22990000,
        image: "https://images.unsplash.com/photo-1510557880102-c9146f39e5c4?w=640&h=640&fit=crop&q=90",
        specs: ["128GB", "6GB RAM", "A16 Bionic"],
        tag: "Giá tốt",
        color: "Hồng",
        storageOptions: ["128GB", "256GB", "512GB"],
        ram: "6GB",
        battery: "3349 mAh",
        screen: "6.1 inch",
        chipset: "Apple A16 Bionic",
        rearCamera: "48MP + 12MP",
        frontCamera: "12MP"
    },
    {
        id: 11,
        name: "Samsung Galaxy S24 Ultra",
        brand: "samsung",
        price: 28990000,
        originalPrice: 33990000,
        image: "https://images.unsplash.com/photo-1610945265078-3858a0828671?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "12GB RAM", "Snapdragon 8 Gen 3"],
        tag: "Hot",
        color: "Titan Gray",
        storageOptions: ["256GB", "512GB", "1TB"],
        ram: "12GB",
        battery: "5000 mAh",
        screen: "6.8 inch",
        chipset: "Snapdragon 8 Gen 3 for Galaxy",
        rearCamera: "200MP + 50MP + 12MP + 10MP",
        frontCamera: "12MP"
    },
    {
        id: 12,
        name: "Samsung Galaxy S24+",
        brand: "samsung",
        price: 23990000,
        originalPrice: 26990000,
        image: "https://images.unsplash.com/photo-1610945264803-c22fa62de8d7?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "12GB RAM", "Snapdragon 8 Gen 3"],
        tag: null,
        color: "Cobalt Violet",
        storageOptions: ["256GB", "512GB"],
        ram: "12GB",
        battery: "4900 mAh",
        screen: "6.7 inch",
        chipset: "Snapdragon 8 Gen 3 for Galaxy",
        rearCamera: "50MP + 12MP + 10MP",
        frontCamera: "12MP"
    },
    {
        id: 13,
        name: "Samsung Galaxy Z Fold5",
        brand: "samsung",
        price: 34990000,
        originalPrice: 41990000,
        image: "https://images.unsplash.com/photo-1621330396153-2fc76f404646?w=640&h=640&fit=crop&q=90",
        specs: ["512GB", "12GB RAM", "Foldable"],
        tag: "Premium",
        color: "Phantom Black",
        storageOptions: ["256GB", "512GB", "1TB"],
        ram: "12GB",
        battery: "4400 mAh",
        screen: "7.6 inch (màn chính)",
        chipset: "Snapdragon 8 Gen 2",
        rearCamera: "50MP + 12MP + 10MP",
        frontCamera: "10MP + 4MP"
    },
    {
        id: 14,
        name: "Xiaomi 14 Ultra",
        brand: "xiaomi",
        price: 24990000,
        originalPrice: 27990000,
        image: "https://images.unsplash.com/photo-1598327775669-3116a627fd22?w=640&h=640&fit=crop&q=90",
        specs: ["512GB", "16GB RAM", "Leica 1-inch"],
        tag: "Camera Pro",
        color: "Trắng Sứ",
        storageOptions: ["512GB", "1TB"],
        ram: "16GB",
        battery: "5000 mAh",
        screen: "6.73 inch",
        chipset: "Snapdragon 8 Gen 3",
        rearCamera: "50MP + 50MP + 50MP + 50MP",
        frontCamera: "32MP"
    },
    {
        id: 15,
        name: "Xiaomi 14",
        brand: "xiaomi",
        price: 16990000,
        originalPrice: 18990000,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "12GB RAM", "Snapdragon 8 Gen 3"],
        tag: null,
        color: "Đen Mờ",
        storageOptions: ["256GB", "512GB"],
        ram: "12GB",
        battery: "4610 mAh",
        screen: "6.36 inch",
        chipset: "Snapdragon 8 Gen 3",
        rearCamera: "50MP + 50MP + 50MP",
        frontCamera: "32MP"
    },
    {
        id: 16,
        name: "Redmi Note 13 Pro+",
        brand: "xiaomi",
        price: 8990000,
        originalPrice: 9990000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "8GB RAM", "200MP OIS"],
        tag: "Best Seller",
        color: "Tím Aurora",
        storageOptions: ["256GB", "512GB"],
        ram: "8GB / 12GB",
        battery: "5000 mAh",
        screen: "6.67 inch",
        chipset: "MediaTek Dimensity 7200-Ultra",
        rearCamera: "200MP + 8MP + 2MP",
        frontCamera: "16MP"
    },
    {
        id: 17,
        name: "OPPO Find X7 Ultra",
        brand: "oppo",
        price: 22990000,
        originalPrice: 24990000,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "12GB RAM", "Hasselblad"],
        tag: "Flagship",
        color: "Ocean Blue",
        storageOptions: ["256GB", "512GB"],
        ram: "12GB / 16GB",
        battery: "5000 mAh",
        screen: "6.82 inch",
        chipset: "Snapdragon 8 Gen 3",
        rearCamera: "50MP + 50MP + 50MP + 50MP",
        frontCamera: "32MP"
    },
    {
        id: 18,
        name: "OPPO Reno11 Pro",
        brand: "oppo",
        price: 13990000,
        originalPrice: 15990000,
        image: "https://images.unsplash.com/photo-1567581935884-334a0b6d8319?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "12GB RAM", "Portrait Pro"],
        tag: null,
        color: "Xám Đá",
        storageOptions: ["256GB", "512GB"],
        ram: "12GB",
        battery: "4600 mAh",
        screen: "6.7 inch",
        chipset: "MediaTek Dimensity 8200",
        rearCamera: "50MP + 32MP + 8MP",
        frontCamera: "32MP"
    },
    {
        id: 19,
        name: "Google Pixel 8 Pro",
        brand: "google",
        price: 22990000,
        originalPrice: 25990000,
        image: "https://images.unsplash.com/photo-1598327775669-3116a627fd22?w=640&h=640&fit=crop&q=90",
        specs: ["256GB", "12GB RAM", "Tensor G3"],
        tag: "AI Photography",
        color: "Obsidian",
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        ram: "12GB",
        battery: "5050 mAh",
        screen: "6.7 inch",
        chipset: "Google Tensor G3",
        rearCamera: "50MP + 48MP + 48MP",
        frontCamera: "10.5MP"
    }
];

// Cart State
let cart = [];

// Format Price
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Render Products - Premium UI
function renderProducts(filter = 'all', searchTerm = '') {
    const grid = document.getElementById('productsGrid');
    let filtered = products;

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.brand === filter);
    }

    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-16">
                <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i data-lucide="search-x" class="w-12 h-12 text-gray-400"></i>
                </div>
                <p class="text-gray-500 text-lg">Không tìm thấy sản phẩm phù hợp</p>
                <button onclick="filterProducts('all'); document.getElementById('searchInput').value=''" class="mt-4 text-orange-500 font-medium hover:underline">Xem tất cả sản phẩm</button>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    grid.innerHTML = filtered.map((product, index) => `
        <div class="product-card bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 group cursor-pointer hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-500" 
             onclick="window.location.href='product-detail.html?id=${product.id}'"
             style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both;">
            <div class="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white aspect-square">
                <img src="${product.image}" alt="${product.name}" class="product-image w-full h-full object-cover object-center p-4 transition-all duration-700 group-hover:scale-110">
                ${product.tag ? `
                    <div class="absolute top-5 left-5 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        ${product.tag}
                    </div>
                ` : ''}
                ${product.originalPrice > product.price ? `
                    <div class="absolute top-5 right-5 bg-black/90 backdrop-blur text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                        -${Math.round((1 - product.price/product.originalPrice) * 100)}%
                    </div>
                ` : ''}
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6" onclick="event.stopPropagation()">
                    <div class="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <button onclick="addToCart(${product.id}); event.stopPropagation();" class="bg-white text-gray-900 p-4 rounded-2xl hover:bg-orange-500 hover:text-white transition-all shadow-xl backdrop-blur-sm">
                            <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                        </button>
                        <button onclick="window.location.href='product-detail.html?id=${product.id}'; event.stopPropagation();" class="bg-white/90 backdrop-blur text-gray-900 p-4 rounded-2xl hover:bg-white transition-all shadow-xl">
                            <i data-lucide="eye" class="w-5 h-5"></i>
                        </button>
                        <button class="bg-white/90 backdrop-blur text-gray-900 p-4 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-xl">
                            <i data-lucide="heart" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">${product.brand}</span>
                    <div class="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-lg">
                        <i data-lucide="star" class="w-3 h-3 text-yellow-500 fill-current"></i>
                        <span class="text-xs font-bold text-yellow-700">4.9</span>
                    </div>
                </div>
                <h3 class="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">${product.name}</h3>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${product.specs.slice(0, 2).map(spec => `
                        <span class="text-xs bg-gray-50 border border-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">${spec}</span>
                    `).join('')}
                </div>
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <div class="text-xl font-bold text-gray-900">${formatPrice(product.price)}</div>
                        ${product.originalPrice > product.price ? `
                            <div class="text-sm text-gray-400 line-through">${formatPrice(product.originalPrice)}</div>
                        ` : '<div class="text-sm text-gray-300">Miễn phí vận chuyển</div>'}
                    </div>
                    <button onclick="addToCart(${product.id}); event.stopPropagation();" class="bg-gray-900 hover:bg-orange-500 text-white w-12 h-12 rounded-2xl transition-all flex items-center justify-center shadow-lg hover:shadow-orange-500/30">
                        <i data-lucide="plus" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// Filter Products
function filterProducts(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-orange-500', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700');
        if (btn.dataset.filter === category) {
            btn.classList.add('active', 'bg-orange-500', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-700');
        }
    });

    renderProducts(category, document.getElementById('searchInput').value);
}

// Search Functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderProducts(activeFilter, e.target.value);
});

document.getElementById('mobileSearchInput').addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderProducts(activeFilter, e.target.value);
    // Scroll to products if searching
    if (e.target.value) {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
});

// View Product Detail
function viewProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === Number(productId));

if (!product) {
    console.error("Không tìm thấy sản phẩm!");
    return;
}
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showToast(`Đã thêm ${product.name} vào giỏ hàng`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center text-gray-500 mt-12">
                <i data-lucide="shopping-bag" class="w-16 h-16 mx-auto mb-4 text-gray-300"></i>
                <p>Giỏ hàng của bạn đang trống</p>
                <button onclick="toggleCart(); scrollToProducts();" class="mt-4 text-orange-500 font-medium hover:underline">
                    Tiếp tục mua sắm
                </button>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-bold text-gray-900 text-sm line-clamp-2">${item.name}</h4>
                    <p class="text-xs text-gray-500 mb-2">${item.specs[0]}</p>
                    <div class="text-orange-600 font-bold">${formatPrice(item.price)}</div>
                </div>
                <div class="flex flex-col items-end space-y-2">
                    <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 transition-colors">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                    <div class="flex items-center space-x-2 bg-white rounded-lg border">
                        <button onclick="updateQuantity(${item.id}, -1)" class="px-2 py-1 hover:bg-gray-100 transition-colors text-gray-600">-</button>
                        <span class="text-sm font-medium w-8 text-center">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="px-2 py-1 hover:bg-gray-100 transition-colors text-gray-600">+</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.textContent = formatPrice(subtotal);
    
    lucide.createIcons();
}

// Toggle Cart Sidebar
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const content = document.getElementById('cartContent');
    
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        setTimeout(() => content.classList.add('open'), 10);
        document.body.style.overflow = 'hidden';
    } else {
        content.classList.remove('open');
        setTimeout(() => {
            sidebar.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('open');
}

// Scroll to Products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Show Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showToast('Giỏ hàng của bạn đang trống!');
        return;
    }
    
    alert(`Cảm ơn bạn đã đặt hàng!\nTổng thanh toán: ${document.getElementById('cartSubtotal').textContent}\n\nĐơn hàng của bạn sẽ được xử lý trong thời gian sớm nhất.`);
    cart = [];
    updateCartUI();
    toggleCart();
}

// Countdown Timer
function startCountdown() {
    let hours = 2;
    let minutes = 45;
    let seconds = 30;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 2;
            minutes = 45;
            seconds = 30;
        }
        
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    startCountdown();
    lucide.createIcons();
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.add('hidden');
        });
    });
});

// Handle Escape key to close cart
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('cartSidebar');
        if (!sidebar.classList.contains('hidden')) {
            toggleCart();
        }
    }
});
