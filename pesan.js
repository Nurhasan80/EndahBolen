// Menu menu popUp 
// Fungsi untuk membuka pop-up
function openPopup() {
    document.getElementById("myPopup").style.display = "flex";
  }
  
  // Fungsi untuk menutup pop-up
  function closePopup() {
    document.getElementById("myPopup").style.display = "none";
  }

//   menu popUpCustom 
  function openPopupCustom() {
    document.getElementById("myPopupCustom").style.display = "flex";
  }
  
  // Fungsi untuk menutup pop-up
  function closePopupCustom() {
    document.getElementById("myPopupCustom").style.display = "none";
  }
//   End menu popUpCustom 
// End Menu popUp


    


let cart = [];
        let totalItems = 0;
        let totalPrice = 0;

        function formatNumber(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        function addToCart(name, price, image) {
            let item = cart.find(i => i.name === name);
            if (item) {
                item.quantity += 1;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }

            

             // Menampilkan notifikasi Bolen coklat
            const notification = document.getElementById('cart-notification-coklat');
            

             notification.style.display = 'block';

            // Menghilangkan notifikasi setelah beberapa detik
            setTimeout(function() {
            notification.style.display = 'none';
            }, 3000);

                      
            updateCart();
                        
        }
       

        function updateCart() {
            const cartTableBody = document.querySelector('#cart-table tbody');
            cartTableBody.innerHTML = '';
            totalItems = 0;
            totalPrice = 0;

            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                totalItems += item.quantity;
                totalPrice += itemTotal;

                const row = `
                    <tr>
                        <td><img src="${item.image}" alt="${item.name}"></td>
                        <td>${item.name}</td>
                        <td>Rp ${formatNumber(item.price)}</td>
                        <td>${item.quantity}</td>
                        <td>Rp ${formatNumber(itemTotal)}</td>
                        <td>
                            <button onclick="changeQuantity(${index}, -1)">( - )</button>
                            
                            <button onclick="changeQuantity(${index}, 1)">( + )</button>
                        </td>
                    </tr>
                    
                `;
                
                cartTableBody.innerHTML += row;

                
                
            });
            const cartCount = document.getElementById('total-items');
            cartCount.textContent= totalItems;
            if (totalItems > 0) {
                cartCount.style.display = 'inline-block';

            } else {
                cartCount.style.display = 'none';

            }

            if (cart.length === 0) {
                cartTableBody.innerHTML = '<tr><td colspan="5">Keranjang Kosong</td></tr>';
            }
            

            document.getElementById('total-items').innerText = totalItems;
            document.getElementById('total-price').innerText = formatNumber(totalPrice);

            // Cek apakah form checkout valid
            validateCheckoutForm();
        }

        function changeQuantity(index, amount) {
            if (cart[index].quantity + amount > 0) {
                cart[index].quantity += amount;
            } else {
                cart.splice(index, 1);
                
            }
            
            updateCart();
             
            
        }
        

        function validateCheckoutForm() {
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();
            const checkoutButton = document.getElementById('checkout-button');

            if (name && phone && address && cart.length > 0) {
                checkoutButton.disabled = false;
            } else {
                checkoutButton.disabled = true;
            }
        }

        document.querySelectorAll('.checkout-form input').forEach(input => {
            input.addEventListener('input', validateCheckoutForm);
        });

        function checkout() {
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();
            let message = `Halo, saya ingin memesan barang berikut:\n\n`;

            cart.forEach(item => {
                message += `${item.name} - ${item.quantity} x Rp ${item.price} = Rp ${item.price * item.quantity}\n\n`;
            });

            message += `\nTotal Item: ${totalItems}\nTotal Harga: Rp ${totalPrice}`;
            message += `\n\nNama: ${name}\nNomor Telepon: ${phone}\nAlamat: ${address}`;

            const whatsappUrl = `https://wa.me/6287781935781?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

            // Kosongkan keranjang setelah checkout
            cart = [];
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('address').value = '';
            updateCart();
        }
// keranjang end

// keranjang Custom 

      
        // keranjang custom 


//  menu pop buy now 

    // Mendapatkan elemen modal Bolen Coklat
    var bolenCoklat = document.getElementById("popupBolenCoklat");

    // Mendapatkan tombol yang digunakan untuk membuka modal
    var openBolenCoklat = document.getElementById("openBolenCoklat");

    // Mendapatkan elemen <span> yang digunakan untuk menutup modal
    var closeBolenCoklat = document.getElementsByClassName("closeBolenCoklat")[0];

    // Ketika tombol diklik, buka modal
    openBolenCoklat.onclick = function() {
        bolenCoklat.style.display = "block";
    }

    // Ketika tombol "x" diklik, tutup modal
    closeBolenCoklat.onclick = function() {
        bolenCoklat.style.display = "none";
    }

    // Ketika pengguna mengklik di luar modal, tutup modal
    window.onclick = function(event) {
        if (event.target == modal) {
            bolenCoklat.style.display = "none";
        }
    }
 // End Mendapatkan elemen modal Bolen Coklat
 

  // Mendapatkan elemen modal Bolen Keju
  var bolenKeju = document.getElementById("popupBolenKeju");

  // Mendapatkan tombol yang digunakan untuk membuka modal
  var openBolenKeju = document.getElementById("openBolenKeju");

  // Mendapatkan elemen <span> yang digunakan untuk menutup modal
  var closeBolenKeju = document.getElementsByClassName("closeBolenKeju")[0];

  // Ketika tombol diklik, buka modal
  openBolenKeju.onclick = function() {
    bolenKeju.style.display = "block";
  }

  // Ketika tombol "x" diklik, tutup modal
  closeBolenKeju.onclick = function() {
    bolenKeju.style.display = "none";
  }

  // Ketika pengguna mengklik di luar modal, tutup modal
  window.onclick = function(event) {
      if (event.target == modal) {
        bolenKeju.style.display = "none";
      }
  }
// End Mendapatkan elemen modal Bolen Keju


 // Mendapatkan elemen modal Bolen Tape
 var bolenTape = document.getElementById("popupBolenTape");

 // Mendapatkan tombol yang digunakan untuk membuka modal
 var openBolenTape = document.getElementById("openBolenTape");

 // Mendapatkan elemen <span> yang digunakan untuk menutup modal
 var closeBolenTape = document.getElementsByClassName("closeBolenTape")[0];

 // Ketika tombol diklik, buka modal
 openBolenTape.onclick = function() {
   bolenTape.style.display = "block";
 }

 // Ketika tombol "x" diklik, tutup modal
 closeBolenTape.onclick = function() {
   bolenTape.style.display = "none";
 }

 // Ketika pengguna mengklik di luar modal, tutup modal
 window.onclick = function(event) {
     if (event.target == modal) {
       bolenTape.style.display = "none";
     }
 }
// End Mendapatkan elemen modal Bolen Tape

// Mendapatkan elemen modal Bolen Mix
var bolenMix = document.getElementById("popupBolenMix");

// Mendapatkan tombol yang digunakan untuk membuka modal
var openBolenMix = document.getElementById("openBolenMix");

// Mendapatkan elemen <span> yang digunakan untuk menutup modal
var closeBolenMix = document.getElementsByClassName("closeBolenMix")[0];

// Ketika tombol diklik, buka modal
openBolenMix.onclick = function() {
  bolenMix.style.display = "block";
}

// Ketika tombol "x" diklik, tutup modal
closeBolenMix.onclick = function() {
  bolenMix.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
    if (event.target == modal) {
      bolenMix.style.display = "none";
    }
}
// End Mendapatkan elemen modal Bolen Mix

// Mendapatkan elemen modal Bolen CoklatKeju
var bolenCoklatKeju = document.getElementById("popupBolenCoklatKeju");

// Mendapatkan tombol yang digunakan untuk membuka modal
var openBolenCoklatKeju = document.getElementById("openBolenCoklatKeju");

// Mendapatkan elemen <span> yang digunakan untuk menutup modal
var closeBolenCoklatKeju = document.getElementsByClassName("closeBolenCoklatKeju")[0];

// Ketika tombol diklik, buka modal
openBolenCoklatKeju.onclick = function() {
  bolenCoklatKeju.style.display = "block";
}

// Ketika tombol "x" diklik, tutup modal
closeBolenCoklatKeju.onclick = function() {
  bolenCoklatKeju.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
    if (event.target == modal) {
      bolenCoklatKeju.style.display = "none";
    }
}
// End Mendapatkan elemen modal Bolen CoklatKeju

// Mendapatkan elemen modal Roll Keju
var RollKeju = document.getElementById("popupRollKeju");

// Mendapatkan tombol yang digunakan untuk membuka modal
var openRollKeju = document.getElementById("openRollKeju");

// Mendapatkan elemen <span> yang digunakan untuk menutup modal
var closeRollKeju = document.getElementsByClassName("closeRollKeju")[0];

// Ketika tombol diklik, buka modal
openRollKeju.onclick = function() {
  RollKeju.style.display = "block";
}

// Ketika tombol "x" diklik, tutup modal
closeRollKeju.onclick = function() {
  RollKeju.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
    if (event.target == modal) {
      RollKeju.style.display = "none";
    }
}
// End Mendapatkan elemen modal RollKeju

// Mendapatkan elemen modal Roll Coklat
var RollCoklat = document.getElementById("popupRollCoklat");

// Mendapatkan tombol yang digunakan untuk membuka modal
var openRollCoklat = document.getElementById("openRollCoklat");

// Mendapatkan elemen <span> yang digunakan untuk menutup modal
var closeRollCoklat = document.getElementsByClassName("closeRollCoklat")[0];

// Ketika tombol diklik, buka modal
openRollCoklat.onclick = function() {
    RollCoklat.style.display = "block";
}

// Ketika tombol "x" diklik, tutup modal
closeRollCoklat.onclick = function() {
    RollCoklat.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
    if (event.target == modal) {
        RollCoklat.style.display = "none";
    }
}
// End Mendapatkan elemen modal RollCoklat

// Mendapatkan elemen modal Roll CoklatKeju
var RollCoklatKeju = document.getElementById("popupRollCoklatKeju");

// Mendapatkan tombol yang digunakan untuk membuka modal
var openRollCoklatKeju = document.getElementById("openRollCoklatKeju");

// Mendapatkan elemen <span> yang digunakan untuk menutup modal
var closeRollCoklatKeju = document.getElementsByClassName("closeRollCoklatKeju")[0];

// Ketika tombol diklik, buka modal
openRollCoklatKeju.onclick = function() {
    RollCoklatKeju.style.display = "block";
}

// Ketika tombol "x" diklik, tutup modal
closeRollCoklatKeju.onclick = function() {
    RollCoklatKeju.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
    if (event.target == modal) {
        RollCoklatKeju.style.display = "none";
    }
}
// End Mendapatkan elemen modal RollCoklatKeju






// Buy Now Coklat
 // Harga per unit
 const hargaPerItem = 40000;

 // Fungsi untuk menghitung total harga
 function hitungTotal() {
     let jumlahBeli = document.getElementById("jumlah").value;
     let total = jumlahBeli * hargaPerItem;
     document.getElementById("totalHarga").value = "Rp " + total.toLocaleString();
 }

 // Fungsi untuk checkout via WhatsApp
 function checkoutWhatsApp() {
     let nama = document.getElementById("nama").value;
     let telepon = document.getElementById("telepon").value;
     let namaBarang = document.getElementById("namaBarang").value;
     let jumlahBeli = document.getElementById("jumlah").value;
     let totalHarga = document.getElementById("totalHarga").value;
     let alamat = document.getElementById("alamat").value;

     if (nama && telepon && namaBarang && jumlahBeli && alamat) {
         let pesan = `Halo, saya ${nama}  ingin memesan:
        \n ${namaBarang}
         \nNo Telepon: ${telepon}\nJumlah Beli: ${jumlahBeli}\nTotal Harga: ${totalHarga}\nAlamat: ${alamat}`;
         
         let whatsappURL = `https://wa.me/6287781935781?text=${encodeURIComponent(pesan)}`;

         // Buka WhatsApp dengan pesan otomatis
         window.open(whatsappURL, '_blank');
         // Kosongkan keranjang setelah checkout
         
         document.getElementById('nama').value = '';
         document.getElementById('telepon').value = '';
         document.getElementById('namaBarang').value = '';
         document.getElementById('alamat').value = '';
         document.getElementById('jumlah').value = '1';
         document.getElementById('totalHarga').value = 'Rp 40.000';
     } else {
         alert("Harap lengkapi semua data.");
     }
 }
//  End bu now 

// Buy Now keju
 // Harga per unit
 const hargaPerItem2 = 40000;

 // Fungsi untuk menghitung total harga
 function hitungTotal2() {
     let jumlahBeli2 = document.getElementById("jumlah2").value;
     let totalKeju2 = jumlahBeli2 * hargaPerItem2;
     document.getElementById("totalHarga2").value = "Rp " + totalKeju2.toLocaleString();
 }

 // Fungsi untuk checkout via WhatsApp
 function checkoutWhatsApp2() {
     let nama2 = document.getElementById("nama2").value;
     let telepon2 = document.getElementById("telepon2").value;
     let namaBarang2 = document.getElementById("namaBarang2").value;
     let jumlahBeli2 = document.getElementById("jumlah2").value;
     let totalHarga2 = document.getElementById("totalHarga2").value;
     let alamat2 = document.getElementById("alamat2").value;

     if (nama2 && telepon2 && namaBarang2 && jumlahBeli2 && alamat2) {
         let pesan = `Halo, saya ${nama2}  ingin memesan:
        \n ${namaBarang2}
         \nNo Telepon: ${telepon2}\nJumlah Beli: ${jumlahBeli2}\nTotal Harga: ${totalHarga2}\nAlamat: ${alamat2}`;
         let whatsappURL = `https://wa.me/6287781935781?text=${encodeURIComponent(pesan)}`;

         // Buka WhatsApp dengan pesan otomatis
         window.open(whatsappURL, '_blank');
         // Kosongkan keranjang setelah checkout
         
         document.getElementById('nama2').value = '';
         document.getElementById('telepon2').value = '';
         document.getElementById('namaBarang2').value = '';
         document.getElementById('alamat2').value = '';
         document.getElementById('jumlah2').value = '1';
         document.getElementById('totalHarga2').value = 'Rp 40.000';
     } else {
         alert("Harap lengkapi semua data.");
     }
 }
//  End bu now Keju

// Buy Now tape
 // Harga per unit
 const hargaPerItem3 = 40000;

 // Fungsi untuk menghitung total harga
 function hitungTotal3() {
     let jumlahBeli3 = document.getElementById("jumlah3").value;
     let totalTape3 = jumlahBeli3 * hargaPerItem3;
     document.getElementById("totalHarga3").value = "Rp " + totalTape3.toLocaleString();
 }

 // Fungsi untuk checkout via WhatsApp
 function checkoutWhatsApp3() {
     let nama3 = document.getElementById("nama3").value;
     let telepon3 = document.getElementById("telepon3").value;
     let namaBarang3 = document.getElementById("namaBarang3").value;
     let jumlahBeli3 = document.getElementById("jumlah3").value;
     let totalHarga3 = document.getElementById("totalHarga3").value;
     let alamat3 = document.getElementById("alamat3").value;

     if (nama3 && telepon3 && namaBarang3 && jumlahBeli3 && alamat3) {
         let pesan = `Halo, saya ${nama3}  ingin memesan:
        \n ${namaBarang3}
         \nNo Telepon: ${telepon3}\nJumlah Beli: ${jumlahBeli3}\nTotal Harga: ${totalHarga3}\nAlamat: ${alamat3}`;
         let whatsappURL = `https://wa.me/6287781935781?text=${encodeURIComponent(pesan)}`;

         
         // Buka WhatsApp dengan pesan otomatis
         window.open(whatsappURL, '_blank');

         // Kosongkan keranjang setelah checkout
         
         document.getElementById('nama3').value = '';
         document.getElementById('telepon3').value = '';
         document.getElementById('namaBarang3').value = '';
         document.getElementById('alamat3').value = '';
         document.getElementById('jumlah3').value = '1';
         document.getElementById('totalHarga3').value = 'Rp 40.000';
                 
     } else {
         alert("Harap lengkapi semua data.");
     }
     
 }
//  End bu now Tape

// Buy Now Mix
 // Harga per unit
 const hargaPerItem4 = 40000;

 // Fungsi untuk menghitung total harga
 function hitungTotal4() {
     let jumlahBeli4 = document.getElementById("jumlah4").value;
     let totalMix4 = jumlahBeli4 * hargaPerItem4;
     document.getElementById("totalHarga4").value = "Rp " + totalMix4.toLocaleString();
 }

 // Fungsi untuk checkout via WhatsApp
 function checkoutWhatsApp4() {
     let nama4 = document.getElementById("nama4").value;
     let telepon4 = document.getElementById("telepon4").value;
     let namaBarang4 = document.getElementById("namaBarang4").value;
     let jumlahBeli4 = document.getElementById("jumlah4").value;
     let totalHarga4 = document.getElementById("totalHarga4").value;
     let alamat4 = document.getElementById("alamat4").value;

     if (nama4 && telepon4 && namaBarang4 && jumlahBeli4 && alamat4) {
         let pesan = `Halo, saya ${nama4}  ingin memesan:
        \n ${namaBarang4}
         \nNo Telepon: ${telepon4}\nJumlah Beli: ${jumlahBeli4}\nTotal Harga: ${totalHarga4}\nAlamat: ${alamat4}`;
         let whatsappURL = `https://wa.me/6287781935781?text=${encodeURIComponent(pesan)}`;

         
         // Buka WhatsApp dengan pesan otomatis
         window.open(whatsappURL, '_blank');

         // Kosongkan keranjang setelah checkout
         
         document.getElementById('nama4').value = '';
         document.getElementById('telepon4').value = '';
         document.getElementById('namaBarang4').value = '';
         document.getElementById('alamat4').value = '';
         document.getElementById('jumlah4').value = '1';
         document.getElementById('totalHarga4').value = 'Rp 40.000';
                 
     } else {
         alert("Harap lengkapi semua data.");
     }
     
 }
//  End bu now Mix

// Buy Now Coklat Keju
 // Harga per unit
 const hargaPerItem5 = 40000;

 // Fungsi untuk menghitung total harga
 function hitungTotal5() {
     let jumlahBeli5 = document.getElementById("jumlah5").value;
     let totalCoklatKeju5 = jumlahBeli5 * hargaPerItem5;
     document.getElementById("totalHarga5").value = "Rp " + totalCoklatKeju5.toLocaleString();
 }

 // Fungsi untuk checkout via WhatsApp
 function checkoutWhatsApp5() {
     let nama5 = document.getElementById("nama5").value;
     let telepon5 = document.getElementById("telepon5").value;
     let namaBarang5 = document.getElementById("namaBarang5").value;
     let jumlahBeli5 = document.getElementById("jumlah5").value;
     let totalHarga5 = document.getElementById("totalHarga5").value;
     let alamat5 = document.getElementById("alamat5").value;

     if (nama5 && telepon5 && namaBarang5 && jumlahBeli5 && alamat5) {
         let pesan = `Halo, saya ${nama5}  ingin memesan:
        \n ${namaBarang5}
         \nNo Telepon: ${telepon5}\nJumlah Beli: ${jumlahBeli5}\nTotal Harga: ${totalHarga5}\nAlamat: ${alamat5}`;
         let whatsappURL = `https://wa.me/6287781935781?text=${encodeURIComponent(pesan)}`;

         
         // Buka WhatsApp dengan pesan otomatis
         window.open(whatsappURL, '_blank');

         // Kosongkan keranjang setelah checkout
         
         document.getElementById('nama5').value = '';
         document.getElementById('telepon5').value = '';
         document.getElementById('namaBarang5').value = '';
         document.getElementById('alamat5').value = '';
         document.getElementById('jumlah5').value = '1';
         document.getElementById('totalHarga5').value = 'Rp 40.000';
                 
     } else {
         alert("Harap lengkapi semua data.");
     }
     
 }
//  End bu now Coklat Keju

// Buy Now Roll Keju
 // Harga per unit
 const hargaPerItem6 = 40000;

 // Fungsi untuk menghitung total harga
 function hitungTotal6() {
     let jumlahBeli6 = document.getElementById("jumlah6").value;
     let totalRollKeju6 = jumlahBeli6 * hargaPerItem6;
     document.getElementById("totalHarga6").value = "Rp " + totalRollKeju6.toLocaleString();
 }

// Fungsi untuk checkout via WhatsApp
function checkoutWhatsApp6() {
    let nama6 = document.getElementById("nama6").value;
    let telepon6 = document.getElementById("telepon6").value;
    let namaBarang6 = document.getElementById("namaBarang6").value;
    let jumlahBeli6 = document.getElementById("jumlah6").value;
    let totalHarga6 = document.getElementById("totalHarga6").value;
    let alamat6 = document.getElementById("alamat6").value;

    if (nama6 && telepon6 && namaBarang6 && jumlahBeli6 && alamat6) {
        let pesan = `Halo, saya ${nama6}  ingin memesan:
       \n ${namaBarang6}
        \nNo Telepon: ${telepon6}\nJumlah Beli: ${jumlahBeli6}\nTotal Harga: ${totalHarga6}\nAlamat: ${alamat6}`;
        let whatsappURL = `https://wa.me/6287781935781?text=${encodeURIComponent(pesan)}`;

        
        // Buka WhatsApp dengan pesan otomatis
        window.open(whatsappURL, '_blank');

        // Kosongkan keranjang setelah checkout
        
        document.getElementById('nama6').value = '';
        document.getElementById('telepon6').value = '';
        document.getElementById('namaBarang6').value = '';
        document.getElementById('alamat6').value = '';
        document.getElementById('jumlah6').value = '1';
        document.getElementById('totalHarga6').value = 'Rp 40.000';
                
    } else {
        alert("Harap lengkapi semua data.");
    }
    
}
//  End bu now Roll Keju

// Buy Now Roll coklat
 // Harga per unit
 const hargaPerItem7 = 40000;

 // Fungsi untuk menghitung total harga
 function hitungTotal7() {
     let jumlahBeli7 = document.getElementById("jumlah7").value;
     let totalRollCoklat7 = jumlahBeli7 * hargaPerItem7;
     document.getElementById("totalHarga7").value = "Rp " + totalRollCoklat7.toLocaleString();
 }

// Fungsi untuk checkout via WhatsApp
function checkoutWhatsApp7() {
    let nama7 = document.getElementById("nama7").value;
    let telepon7 = document.getElementById("telepon7").value;
    let namaBarang7 = document.getElementById("namaBarang7").value;
    let jumlahBeli7 = document.getElementById("jumlah7").value;
    let totalHarga7 = document.getElementById("totalHarga7").value;
    let alamat7 = document.getElementById("alamat7").value;

    if (nama7 && telepon7 && namaBarang7 && jumlahBeli7 && alamat7) {
        let pesan = `Halo, saya ${nama7}  ingin memesan:
       \n ${namaBarang7}
        \nNo Telepon: ${telepon7}\nJumlah Beli: ${jumlahBeli7}\nTotal Harga: ${totalHarga7}\nAlamat: ${alamat7}`;
        let whatsappURL = `https://wa.me/6287781935781?text=${encodeURIComponent(pesan)}`;

        
        // Buka WhatsApp dengan pesan otomatis
        window.open(whatsappURL, '_blank');

        // Kosongkan keranjang setelah checkout
        
        document.getElementById('nama7').value = '';
        document.getElementById('telepon7').value = '';
        document.getElementById('namaBarang7').value = '';
        document.getElementById('alamat7').value = '';
        document.getElementById('jumlah7').value = '1';
        document.getElementById('totalHarga7').value = 'Rp 40.000';
                
    } else {
        alert("Harap lengkapi semua data.");
    }
    
}
//  End bu now Roll Coklat

// Buy Now Roll Coklat Keju
 // Harga per unit
 const hargaPerItem8 = 40000;

 // Fungsi untuk menghitung total harga
 function hitungTotal8() {
     let jumlahBeli8 = document.getElementById("jumlah8").value;
     let totalRollCoklatKeju8 = jumlahBeli8 * hargaPerItem8;
     document.getElementById("totalHarga8").value = "Rp " + totalRollCoklatKeju8.toLocaleString();
 }

// Fungsi untuk checkout via WhatsApp
function checkoutWhatsApp8() {
    let nama8 = document.getElementById("nama8").value;
    let telepon8 = document.getElementById("telepon8").value;
    let namaBarang8 = document.getElementById("namaBarang8").value;
    let jumlahBeli8 = document.getElementById("jumlah8").value;
    let totalHarga8 = document.getElementById("totalHarga8").value;
    let alamat8 = document.getElementById("alamat8").value;

    if (nama8 && telepon8 && namaBarang8 && jumlahBeli8 && alamat8) {
        let pesan = `Halo, saya ${nama8}  ingin memesan:
       \n ${namaBarang8}
        \nNo Telepon: ${telepon8}\nJumlah Beli: ${jumlahBeli8}\nTotal Harga: ${totalHarga8}\nAlamat: ${alamat8}`;
        let whatsappURL = `https://wa.me/6287781935781?text=${encodeURIComponent(pesan)}`;

        
        // Buka WhatsApp dengan pesan otomatis
        window.open(whatsappURL, '_blank');

        // Kosongkan keranjang setelah checkout
        
        document.getElementById('nama8').value = '';
        document.getElementById('telepon8').value = '';
        document.getElementById('namaBarang8').value = '';
        document.getElementById('alamat8').value = '';
        document.getElementById('jumlah8').value = '1';
        document.getElementById('totalHarga8').value = 'Rp 40.000';
                
    } else {
        alert("Harap lengkapi semua data.");
    }
    
}
//  End bu now Roll CoklatKeju

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", function() {
    var scrollButtons = document.getElementById("scrollButtons");
  
    // Jika pengguna menggulir halaman lebih dari 100px, tombol akan muncul
    if (window.scrollY > 100) {
        scrollButtons.classList.add("visible");
    } else {
        scrollButtons.classList.remove("visible");
    }
  });
  
  // Scroll ke atas
  document.getElementById("scrollTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Scroll naik bertahap (100px)
  document.getElementById("scrollUp").addEventListener("click", function() {
    window.scrollBy({ top: -100, behavior: 'smooth' });
  });
  
  // Scroll turun bertahap (100px)
  document.getElementById("scrollDown").addEventListener("click", function() {
    window.scrollBy({ top: 100, behavior: 'smooth' });
  });
  
  // Scroll ke bawah
  document.getElementById("scrollBottom").addEventListener("click", function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });



  document.addEventListener('DOMContentLoaded', () => {
    const toggleNightMode = document.getElementById('toggleNightMode');
    const body = document.body;  toggleNightMode.addEventListener('change', () => {       body.classList.toggle('night-mode');

    
    });
});

function removeNotif() {
    document.getElementById('notif').classList.add('hidden')
    
}

 // Fungsi untuk menampilkan popup setelah beberapa detik
 // Fungsi untuk menampilkan popup setelah beberapa detik
 window.onload = function() {
    setTimeout(function() {
        document.getElementById("popupIklan").style.display = "flex";
    }, 1000); // 1000ms = 1 detik
};

// Fungsi untuk menutup popup
function closePopupIklan() {
    document.getElementById("popupIklan").style.display = "none";
}