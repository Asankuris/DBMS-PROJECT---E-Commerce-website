document.addEventListener('DOMContentLoaded', function() {
    // Function to change the color of all h2 headings on click
    const headings = document.querySelectorAll('h2');
    headings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            // Toggle color between blue and black
            if (this.style.color === 'blue') {
                this.style.color = 'black';
            } else {
                this.style.color = 'blue';
            }
        });
    });

    // Search function for products
    document.getElementById('product-search').addEventListener('input', function() {
        const searchQuery = this.value.toLowerCase();
        const products = document.querySelectorAll('.product-item');
        products.forEach(function(product) {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchQuery)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Add to Cart functionality (Mock)
    const buttons = document.querySelectorAll('.product-item button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Added to cart!');
        });
    });
});
