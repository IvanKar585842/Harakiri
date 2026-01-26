document.addEventListener("DOMContentLoaded", () => {
  // ===== ЭЛЕМЕНТЫ =====
  const searchBtn = document.getElementById("searchBtn");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const closeSearch = document.getElementById("closeSearch");
  const template = document.getElementById("productTemplate");


    const products = [
  {
    id: "shirt-01",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-02",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-03",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-04",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-05",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-06",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-07",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-08",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-09",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-10",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-11",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
  {
    id: "Shirt-12",
    title: "Shirts",
    image: "../assets/img/pullover-front-1x.jpg",
    link: "./item.html",
  },
];

  function normalize(text) {
    return text.toLowerCase().replace(/\s+/g, "");
  }

  function createProductCard(product) {
    const clone = template.content.cloneNode(true);

    const img = clone.querySelector(".small-shop-sectionitemimg");
    const title = clone.querySelector(".small-shop-sectionitemtitle");
    const link = clone.querySelector(".shop__overlay1 a");

    img.src = product.image;
    img.alt = product.title;
    title.textContent = product.title;
    link.href = product.link;

    return clone;
  }


  searchBtn.addEventListener("click", () => {
    searchOverlay.style.display = "block";
    searchInput.focus();
  });


  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchOverlay.style.display = "none";
      searchInput.value = "";
      searchResults.innerHTML = "";
    }
  });


  closeSearch.addEventListener("click", () => {
    searchOverlay.style.display = "none";
    searchInput.value = "";
    searchResults.innerHTML = "";
  });


  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      searchOverlay.style.display = "none";
      searchInput.value = "";
      searchResults.innerHTML = "";
    }
  });


  searchInput.addEventListener("input", () => {
    const query = normalize(searchInput.value);
    searchResults.innerHTML = "";

    if (!query) return;

    const filtered = products.filter(product =>
      normalize(product.title + product.id).includes(query)
    );

    filtered.forEach(product => {
      searchResults.appendChild(
        createProductCard(product)
      );
    });
  });
});
