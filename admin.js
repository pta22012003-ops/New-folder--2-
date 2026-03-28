// Admin Dashboard Functionality
const adminProducts = [
    {
        id: 1,
        name: "iPhone 17 Pro Max",
        brand: "iPhone",
        price: 36990000,
        stock: 0,
        sold: 0,
        status: "upcoming",
        image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=100&h=100&fit=crop"
    },
    {
        id: 2,
        name: "iPhone 17 Pro",
        brand: "iPhone",
        price: 32990000,
        stock: 0,
        sold: 0,
        status: "upcoming",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&h=100&fit=crop"
    },
    {
        id: 3,
        name: "iPhone 17",
        brand: "iPhone",
        price: 24990000,
        stock: 0,
        sold: 0,
        status: "upcoming",
        image: "https://images.unsplash.com/photo-1510557880102-c9146f39e5c4?w=100&h=100&fit=crop"
    },
    {
        id: 4,
        name: "iPhone 16 Pro Max",
        brand: "iPhone",
        price: 32990000,
        stock: 85,
        sold: 45,
        status: "active",
        image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=100&h=100&fit=crop"
    },
    {
        id: 5,
        name: "iPhone 16 Pro",
        brand: "iPhone",
        price: 28990000,
        stock: 72,
        sold: 38,
        status: "active",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&h=100&fit=crop"
    },
    {
        id: 6,
        name: "iPhone 16 Plus",
        brand: "iPhone",
        price: 22990000,
        stock: 55,
        sold: 28,
        status: "active",
        image: "https://images.unsplash.com/photo-1510557880102-c9146f39e5c4?w=100&h=100&fit=crop"
    },
    {
        id: 7,
        name: "iPhone 16",
        brand: "iPhone",
        price: 19990000,
        stock: 68,
        sold: 52,
        status: "active",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop"
    },
    {
        id: 8,
        name: "iPhone 15 Pro Max",
        brand: "iPhone",
        price: 27990000,
        stock: 50,
        sold: 128,
        status: "active",
        image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=100&h=100&fit=crop"
    },
    {
        id: 9,
        name: "iPhone 15 Pro",
        brand: "iPhone",
        price: 23990000,
        stock: 45,
        sold: 96,
        status: "active",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&h=100&fit=crop"
    },
    {
        id: 10,
        name: "iPhone 15",
        brand: "iPhone",
        price: 17990000,
        stock: 65,
        sold: 145,
        status: "active",
        image: "https://images.unsplash.com/photo-1510557880102-c9146f39e5c4?w=100&h=100&fit=crop"
    },
    {
        id: 11,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        price: 28990000,
        stock: 35,
        sold: 89,
        status: "active",
        image: "https://images.unsplash.com/photo-1610945265078-3858a0828671?w=100&h=100&fit=crop"
    },
    {
        id: 12,
        name: "Samsung Galaxy S24+",
        brand: "Samsung",
        price: 23990000,
        stock: 28,
        sold: 67,
        status: "active",
        image: "https://images.unsplash.com/photo-1610945264803-c22fa62de8d7?w=100&h=100&fit=crop"
    },
    {
        id: 13,
        name: "Samsung Galaxy Z Fold5",
        brand: "Samsung",
        price: 34990000,
        stock: 15,
        sold: 42,
        status: "active",
        image: "https://images.unsplash.com/photo-1621330396153-2fc76f404646?w=100&h=100&fit=crop"
    },
    {
        id: 7,
        name: "Xiaomi 14 Ultra",
        brand: "Xiaomi",
        price: 24990000,
        stock: 25,
        sold: 74,
        status: "active",
        image: "https://images.unsplash.com/photo-1598327775669-3116a627fd22?w=100&h=100&fit=crop"
    },
    {
        id: 8,
        name: "Xiaomi 14",
        brand: "Xiaomi",
        price: 16990000,
        stock: 40,
        sold: 92,
        status: "active",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=100&h=100&fit=crop"
    },
    {
        id: 9,
        name: "Redmi Note 13 Pro+",
        brand: "Xiaomi",
        price: 8990000,
        stock: 60,
        sold: 156,
        status: "active",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop"
    },
    {
        id: 10,
        name: "OPPO Find X7 Ultra",
        brand: "OPPO",
        price: 22990000,
        stock: 18,
        sold: 45,
        status: "active",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=100&h=100&fit=crop"
    },
    {
        id: 11,
        name: "OPPO Reno11 Pro",
        brand: "OPPO",
        price: 13990000,
        stock: 3,
        sold: 38,
        status: "low",
        image: "https://images.unsplash.com/photo-1567581935884-334a0b6d8319?w=100&h=100&fit=crop"
    },
    {
        id: 12,
        name: "Google Pixel 8 Pro",
        brand: "Google",
        price: 22990000,
        stock: 22,
        sold: 51,
        status: "active",
        image: "https://images.unsplash.com/photo-1598327775669-3116a627fd22?w=100&h=100&fit=crop"
    }
];

// Sample orders data
const orders = [
    {
        id: "ORD001",
        date: "28/12/2024",
        customer: "Nguyễn Văn A",
        product: "iPhone 15 Pro Max",
        quantity: 1,
        total: 29990000,
        status: "completed"
    },
    {
        id: "ORD002",
        date: "27/12/2024",
        customer: "Trần Thị B",
        product: "Galaxy S24 Ultra",
        quantity: 2,
        total: 57980000,
        status: "shipping"
    },
    {
        id: "ORD003",
        date: "26/12/2024",
        customer: "Lê Văn C",
        product: "Xiaomi 14 Ultra",
        quantity: 1,
        total: 24990000,
        status: "pending"
    },
    {
        id: "ORD004",
        date: "25/12/2024",
        customer: "Phạm Thị D",
        product: "OPPO Find X7 Ultra",
        quantity: 1,
        total: 22990000,
        status: "completed"
    },
    {
        id: "ORD005",
        date: "24/12/2024",
        customer: "Hoàng Văn E",
        product: "iPhone 15",
        quantity: 3,
        total: 59970000,
        status: "cancelled"
    }
];

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('mainContent');
    const icon = document.getElementById('sidebarToggleIcon');
    
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('full');
    content.classList.toggle('expanded');
    
    if (sidebar.classList.contains('collapsed')) {
        icon.setAttribute('data-lucide', 'chevron-right');
    } else {
        icon.setAttribute('data-lucide', 'chevron-left');
    }
    
    lucide.createIcons();
}

// Show section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    document.getElementById(sectionId + 'Section').classList.remove('hidden');
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('bg-orange-600', 'text-white');
        item.classList.add('hover:bg-gray-800');
    });
    
    // Set active nav item
    const activeNav = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (activeNav) {
        activeNav.classList.add('bg-orange-600', 'text-white');
        activeNav.classList.remove('hover:bg-gray-800');
    }
    
    // Update section title
    const titles = {
        dashboard: 'Dashboard',
        orders: 'Quản lý đơn hàng',
        products: 'Quản lý sản phẩm',
        inventory: 'Quản lý kho hàng',
        analytics: 'Phân tích dữ liệu',
        customers: 'Quản lý khách hàng'
    };
    
    document.getElementById('sectionTitle').textContent = titles[sectionId];
    
    // Load section data
    if (sectionId === 'orders') {
        loadOrders();
    } else if (sectionId === 'products') {
        loadProducts();
    } else if (sectionId === 'inventory') {
        loadInventory();
    } else if (sectionId === 'dashboard') {
        loadRecentOrders();
    }
}

// Load recent orders
function loadRecentOrders() {
    const container = document.getElementById('recentOrders');
    container.innerHTML = orders.map(order => `
        <tr class="table-row">
            <td class="px-6 py-4">
                <span class="font-medium text-gray-900">${order.id}</span>
            </td>
            <td class="px-6 py-4">
                <div>
                    <p class="font-medium">${order.customer}</p>
                    <p class="text-sm text-gray-500">${order.date}</p>
                </div>
            </td>
            <td class="px-6 py-4">
                <p class="text-gray-900">${order.product}</p>
                <p class="text-sm text-gray-500">Số lượng: ${order.quantity}</p>
            </td>
            <td class="px-6 py-4 font-bold text-gray-900">
                ${formatPrice(order.total)}
            </td>
            <td class="px-6 py-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}">
                    ${getStatusText(order.status)}
                </span>
            </td>
        </tr>
    `).join('');
}

// Load orders
function loadOrders() {
    const container = document.getElementById('ordersTable');
    container.innerHTML = orders.map(order => `
        <tr class="table-row">
            <td class="px-6 py-4">
                <span class="font-medium text-gray-900">${order.id}</span>
            </td>
            <td class="px-6 py-4 text-gray-600">${order.date}</td>
            <td class="px-6 py-4">
                <p class="font-medium">${order.customer}</p>
            </td>
            <td class="px-6 py-4">
                <p class="text-gray-900">${order.product}</p>
            </td>
            <td class="px-6 py-4 text-gray-600">${order.quantity}</td>
            <td class="px-6 py-4 font-bold text-gray-900">
                ${formatPrice(order.total)}
            </td>
            <td class="px-6 py-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}">
                    ${getStatusText(order.status)}
                </span>
            </td>
            <td class="px-6 py-4">
                <div class="flex space-x-2">
                    <button onclick="viewOrder('${order.id}')" class="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <i data-lucide="eye" class="w-4 h-4"></i>
                    </button>
                    <button onclick="editOrder('${order.id}')" class="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
                        <i data-lucide="edit" class="w-4 h-4"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
    
    lucide.createIcons();
}

// Load products
function loadProducts() {
    const container = document.getElementById('productsTable');
    container.innerHTML = adminProducts.map(product => `
        <tr class="table-row">
            <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                    <img src="${product.image}" class="w-12 h-12 rounded-lg object-cover">
                    <div>
                        <p class="font-medium text-gray-900">${product.name}</p>
                        <p class="text-sm text-gray-500">${product.brand}</p>
                    </div>
                    </div>
            </td>
            <td class="px-6 py-4 font-bold text-gray-900">
                ${formatPrice(product.price)}
            </td>
            <td class="px-6 py-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium ${product.stock > 10 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                    ${product.stock} sản phẩm
                </span>
            </td>
            <td class="px-6 py-4 text-gray-600">
                ${product.sold}
            </td>
            <td class="px-6 py-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium ${getProductStatusClass(product.status)}">
                    ${getProductStatusText(product.status)}
                </span>
            </td>
            <td class="px-6 py-4">
                <div class="flex space-x-2">
                    <button onclick="editProduct(${product.id})" class="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
                        <i data-lucide="edit" class="w-4 h-4"></i>
                    </button>
                    <button onclick="deleteProduct(${product.id})" class="p-2 hover:bg-red-50 rounded-lg text-red-600">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
    
    lucide.createIcons();
}

// Load inventory
function loadInventory() {
    const container = document.getElementById('inventoryTable');
    container.innerHTML = adminProducts.map(product => `
        <tr class="table-row">
            <td class="px-6 py-4">
                <span class="font-medium text-gray-900">SP${String(product.id).padStart(3, '0')}</span>
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                    <img src="${product.image}" class="w-10 h-10 rounded-lg object-cover">
                    <div>
                        <p class="font-medium text-gray-900">${product.name}</p>
                        <p class="text-sm text-gray-500">${product.brand}</p>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4">
                <span class="font-bold ${product.stock > 10 ? 'text-green-600' : 'text-red-600'}">
                    ${product.stock}
                </span>
            </td>
            <td class="px-6 py-4 text-gray-600">
                ${product.sold}
            </td>
            <td class="px-6 py-4 text-gray-600">
                ${Math.floor(product.sold * 0.1)}
            </td>
            <td class="px-6 py-4 font-bold text-gray-900">
                ${product.stock + product.sold}
            </td>
        </tr>
    `).join('');
}

// Helper functions
function getStatusClass(status) {
    switch(status) {
        case 'completed': return 'bg-green-100 text-green-800';
        case 'shipping': return 'bg-blue-100 text-blue-800';
        case 'pending': return 'bg-yellow-100 text-yellow-800';
        case 'cancelled': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

function getStatusText(status) {
    switch(status) {
        case 'completed': return 'Hoàn thành';
        case 'shipping': return 'Đang giao';
        case 'pending': return 'Chờ xác nhận';
        case 'cancelled': return 'Đã hủy';
        default: return status;
    }
}

function getProductStatusClass(status) {
    switch(status) {
        case 'active': return 'bg-green-100 text-green-800';
        case 'low': return 'bg-yellow-100 text-yellow-800';
        case 'out': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

function getProductStatusText(status) {
    switch(status) {
        case 'active': return 'Đang bán';
        case 'low': return 'Sắp hết';
        case 'out': return 'Hết hàng';
        default: return status;
    }
}

// Admin actions
function viewOrder(orderId) {
    alert(`Xem chi tiết đơn hàng: ${orderId}`);
}

function editOrder(orderId) {
    alert(`Chỉnh sửa đơn hàng: ${orderId}`);
}

function editProduct(productId) {
    alert(`Chỉnh sửa sản phẩm ID: ${productId}`);
}

function deleteProduct(productId) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
        alert(`Đã xóa sản phẩm ID: ${productId}`);
    }
}

function addNewProduct() {
    alert('Thêm sản phẩm mới - Mở form nhập sản phẩm');
}

function importInventory() {
    alert('Nhập hàng - Mở form nhập kho');
}

function logout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        window.location.href = 'index.html';
    }
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
    lucide.createIcons();
});