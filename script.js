function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} をカートに追加しました`);
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const container = document.getElementById("cart-container");
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = "<p>カートは空です。</p>";
    return;
  }

  const ul = document.createElement("ul");
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ¥${item.price}`;
    total += item.price;
    ul.appendChild(li);
  });
  container.appendChild(ul);
  container.innerHTML += `<p>合計: ¥${total}</p>`;
}

window.onload = loadCart;
