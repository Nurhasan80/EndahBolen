let cart = [];

    function addItem() {
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productQuantity = document.getElementById('product-quantity').value;

        if (productName === '' || productPrice === '' || productQuantity === '') {
            alert('Mohon lengkapi semua data barang.');
            return;
        }

        const total = productPrice * productQuantity;
        cart.push({ name: productName, price: productPrice, quantity: productQuantity, total: total });

        updateTable();
        clearProductForm();
        validateForm();
    }

    function updateTable() {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';

        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>Rp ${parseInt(item.price).toLocaleString()}</td>
                <td>${item.quantity}</td>
                <td>Rp ${parseInt(item.total).toLocaleString()}</td>
                <td><button class="remove-btn" onclick="removeItem(${index})">Hapus</button></td>
            `;
            tableBody.appendChild(row);
        });
    }

    function clearProductForm() {
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-quantity').value = '';
    }

    function removeItem(index) {
        cart.splice(index, 1);
        updateTable();
        validateForm();
    }

    function validateForm() {
        const buyerName = document.getElementById('buyer-name').value;
        const buyerPhone = document.getElementById('buyer-phone').value;
        const buyerAddress = document.getElementById('buyer-address').value;
        const checkoutBtn = document.getElementById('checkout-btn');

        if (buyerName && buyerPhone && buyerAddress && cart.length > 0) {
            checkoutBtn.disabled = false;
        } else {
            checkoutBtn.disabled = true;
        }
    }

    function checkout() {
        const buyerName = document.getElementById('buyer-name').value;
        const buyerPhone = document.getElementById('buyer-phone').value;
        const buyerAddress = document.getElementById('buyer-address').value;

        let message = `Halo, saya ingin memesan barang berikut:\n\n`;
        cart.forEach(item => {
            message += `Nama Barang: ${item.name}\nJumlah: ${item.quantity}\nTotal: Rp ${parseInt(item.total).toLocaleString()}\n\n`;
        });

        const totalPrice = cart.reduce((total, item) => total + item.total, 0);
        message += `Total Keseluruhan: Rp ${parseInt(totalPrice).toLocaleString()}\n\n`;
        message += `Nama Pembeli: ${buyerName}\nNomor Telepon: ${buyerPhone}\nAlamat: ${buyerAddress}`;

        const whatsappUrl = `https://wa.me/6287781935781?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Reset form dan tabel setelah checkout
        cart = [];
        updateTable();
        clearProductForm();
        document.getElementById('buyer-name').value = '';
        document.getElementById('buyer-phone').value = '';
        document.getElementById('buyer-address').value = '';
        validateForm();
    }

    