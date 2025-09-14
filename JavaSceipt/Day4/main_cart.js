let products = [
  { id: 1, name: "Laptop", price: 1000, stock: 3, category: "Computers" },
  { id: 2, name: "Mouse", price: 50, stock: 10, category: "Accessories" },
  { id: 3, name: "Keyboard", price: 80, stock: 5, category: "Accessories" },
  { id: 4, name: "Monitor", price: 350, stock: 4, category: "Computers" },
];

let cart = [];
// ------LocalStorage----------
function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}
function loadFromLocalStorage() {
  let data = localStorage.getItem("products");
  if (data) {
    products = JSON.parse(data);
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("appliedCoupon", appliedCoupon ? appliedCoupon : "");
}

function loadCartFromLocalStorage() {
  let data = localStorage.getItem("cart");
  if (data) {
    cart = JSON.parse(data);
  }
  const c = localStorage.getItem("appliedCoupon");
  appliedCoupon = c ? c : null;
}

// ------------Display------------
function displayProducts() {
  let productsTable = document.getElementById("products");
  productsTable.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let p = products[i];
    productsTable.innerHTML += `
        <tr>
          <td>${p.id}</td>
          <td>${p.name}</td>
          <td>$${p.price.toFixed(2)}</td>
          <td>${p.stock}</td>
          <td>${p.category}</td>
        </tr>
      `;
  }
}

let appliedCoupon = null; // ["SAVE10"] or null

function displayCart() {
  const container = document.getElementById("cart");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<tr><td colspan="4">No items yet</td></tr>`;
    const totalsRow = `
      <tr><td><strong>Subtotal:</strong></td><td>$0.00</td></tr>
      <tr><td><strong>Discount:</strong></td><td>$0.00</td></tr>
      <tr><td><strong>Tax (14%):</strong></td><td>$0.00</td></tr>
      <tr><td><strong>Shipping:</strong></td><td>$0.00</td></tr>
      <tr><td><strong>Total:</strong></td><td>$0.00</td></tr>
    `;
    container.insertAdjacentHTML("beforeend", totalsRow);
    return;
  }

  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    const it = cart[i];
    const lineTotal = it.price * it.qty;
    subtotal += lineTotal;
    container.innerHTML += `
      <tr>
        <td>${it.name}</td>
        <td>$${it.price.toFixed(2)}</td>
        <td>${it.qty}</td>
        <td>$${lineTotal.toFixed(2)}</td>
      </tr>
    `;
  }

  // ---- Apply Tiered Discounts ----
  let discount = 0;
  if (subtotal >= 2000) {
    discount = subtotal * 0.15;
  } else if (subtotal >= 1000) {
    discount = subtotal * 0.1;
  } else if (subtotal >= 500) {
    discount = subtotal * 0.05;
  }
  if (appliedCoupon === "SAVE10" && subtotal >= 500) {
    discount += subtotal * 0.1;
  }

  const taxable = subtotal - discount;
  const tax = taxable * 0.14;

  const shipping = taxable >= 1000 ? 0 : 50;

  const total = taxable + tax + shipping;

  const totalsHtml = `
    <tr><td colspan="3" class="text-end"><strong>Subtotal:</strong></td><td>$${subtotal.toFixed(
      2
    )}</td></tr>
    <tr><td colspan="3" class="text-end"><strong>Discount:</strong></td><td>$${discount.toFixed(
      2
    )}</td></tr>
    <tr><td colspan="3" class="text-end"><strong>Tax (14%):</strong></td><td>$${tax.toFixed(
      2
    )}</td></tr>
    <tr><td colspan="3" class="text-end"><strong>Shipping:</strong></td><td>$${shipping.toFixed(
      2
    )}</td></tr>
    <tr><td colspan="3" class="text-end"><strong>Total:</strong></td><td>$${total.toFixed(
      2
    )}</td></tr>
  `;
  container.insertAdjacentHTML("beforeend", totalsHtml);

  document
    .getElementById("applyCouponBtn")
    .addEventListener("click", function () {
      const code = (document.getElementById("couponInput").value || "")
        .trim()
        .toUpperCase();
      if (!code) {
        alert("Enter coupon code");
        return;
      }

      if (code === "SAVE10") {
        let subtotal = 0;
        for (let i = 0; i < cart.length; i++)
          subtotal += cart[i].price * cart[i].qty;
        if (subtotal >= 500) {
          appliedCoupon = "SAVE10";
          saveCartToLocalStorage();
          displayCart();
          alert("Coupon applied: SAVE10 (10% off)");
        } else {
          alert("SAVE10 requires subtotal >= 500");
        }
      } else {
        alert("Coupon not recognized");
      }
    });
}

// -------Add To Cart--------
function addToCart() {
  let id = parseInt(document.getElementById("productIdInput").value);
  let qty = parseInt(document.getElementById("productQuqntity").value);
  if (!qty || qty <= 0) {
    alert("Quantity must be greater than 0");
    return;
  }


  let product = products.find((p) => p.id === id);
  if (product) {
    if (product.stock <= 0) {
      alert("Out of stock!");
      return;
    }

    let qtyToAdd = Math.min(qty, product.stock);
    if (qtyToAdd < qty) {
      alert(`Requested quantity adjusted to available stock: ${qtyToAdd}`);
    }

    let quant = cart.find((p) => p.id === id);
    if (quant) {
      quant.qty += qtyToAdd;
    } else {
      cart.push({ ...product, qty: qtyToAdd });
    }
    product.stock -= qtyToAdd;

    if (product.stock === 0) {
      products = products.filter((p) => p.id !== product.id);
    }

    displayProducts();
    displayCart();
    saveCartToLocalStorage();
    saveToLocalStorage();
  } else {
    alert("Product not found");
  }
}

// ---------Add Products---------
let idP = document.getElementById("id");
let nameP = document.getElementById("name");
let priceP = document.getElementById("price");
let stockP = document.getElementById("stock");
let categoryP = document.getElementById("category");
let btnAdd = document.getElementById("btnf");

btnAdd.addEventListener("click", function () {
  if (
    !idP.value ||
    !nameP.value ||
    !priceP.value ||
    !stockP.value ||
    !categoryP.value
  ) {
    alert("Please fill all fields");
    return;
  }

  let newProduct = {
    id: parseInt(idP.value),
    name: nameP.value,
    price: parseFloat(priceP.value),
    stock: parseInt(stockP.value),
    category: categoryP.value,
  };

  // Prevent duplicate IDs
  if (products.some((p) => p.id === newProduct.id)) {
    alert("Product with this ID already exists!");
    return;
  }

  products.push(newProduct);
  displayProducts();
  saveToLocalStorage();

  idP.value = "";
  nameP.value = "";
  priceP.value = "";
  stockP.value = "";
  categoryP.value = "";
});

window.onload = function () {
  loadFromLocalStorage();
  loadCartFromLocalStorage();
  displayProducts();
  displayCart();
};
