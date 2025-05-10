document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector('.search-bar');
    const categoryFilter = document.querySelector('.filter-category');
    const priceFilter = document.querySelector('.filter-price');
    const products = Array.from(document.querySelectorAll('.product-card'));
  
    function filterProducts() {
      const searchQuery = searchBar.value.toLowerCase();
      const selectedCategory = categoryFilter.value;
      const selectedPrice = priceFilter.value;
  
      let filtered = products.filter(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
        const matchesSearch = name.includes(searchQuery) || description.includes(searchQuery);
        const matchesCategory = selectedCategory === 'all' || name.includes(selectedCategory);
        return matchesSearch && matchesCategory;
      });
  
      if (selectedPrice === 'low') {
        filtered.sort((a, b) => {
          return extractPrice(a) - extractPrice(b);
        });
      } else if (selectedPrice === 'high') {
        filtered.sort((a, b) => {
          return extractPrice(b) - extractPrice(a);
        });
      }
  
      document.querySelector('.product-grid').innerHTML = '';
      filtered.forEach(p => document.querySelector('.product-grid').appendChild(p));
    }
  
    function extractPrice(card) {
      const priceText = card.querySelector('p').textContent.replace(/[^\d]/g, '');
      return parseInt(priceText, 10);
    }
  
    searchBar.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
  });
  document.querySelectorAll('.rent-now').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = button.dataset.price;
      const img = button.dataset.img;
  
      let cart = JSON.parse(localStorage.getItem('rentalCart')) || [];
  
      // Check for duplicates
      const exists = cart.some(item => item.name === name);
  
      if (exists) {
        alert(`${name} is already in your cart.`);
      } else {
        cart.push({ name, price, img });
        localStorage.setItem('rentalCart', JSON.stringify(cart));
        alert(`${name} has been added to your cart!`);
      }
    });
  });
  