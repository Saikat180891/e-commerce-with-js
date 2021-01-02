const Header = () => {
  const location = window.location.pathname;
  let div;
  if (location.includes("checkout")) {
    // For checkout page
    div = document.createElement("DIV");
    div.innerHTML = `<div class="brand">
            <a href="/">
                <img src="./assets/images/download.png" class="logo" alt="logo" />
            </a>
            <div class="category">
              <button class="cat-list">Shop by category ></button>
              <ul id="lst"></ul>
            </div>
          </div>
          <div><input type="search" placeholder="Search something" /></div>
          <div>
          </div>`;
  } else {
    div = document.createElement("DIV");
    div.innerHTML = `<div class="brand">
                        <a href="/">
                            <img src="./assets/images/download.png" class="logo" alt="logo" />
                        </a>
                        <div class="category">
                          <button class="cat-list">Shop by category ></button>
                          <ul id="lst"></ul>
                        </div>
                     </div>
                    <div><input type="search" placeholder="Search something" /></div>
                    <div id="cart">
                      <span id="cart-count">Cart: 0</span>
                      <div class="my-cart">
                        <ul id="cart-list"></ul>
                        <span id="total"></span>
                        <button class="checkout-btn btn" onclick = "location.href = '/checkout.html'";>checkout</button>
                      </div>
                    </div>`;
  }
  div.className = "navbar w-full flex justify-between";
  const header = document.getElementById("header");
  header.append(div);
};
Header();
