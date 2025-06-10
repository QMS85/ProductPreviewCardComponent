// Product Preview Card JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  
  // Add to cart functionality
  addToCartBtn.addEventListener('click', function() {
    console.log('Added Gabrielle Essence Eau De Parfum to cart!');
    
    // Visual feedback - change button text and icon temporarily
    const originalContent = this.innerHTML;
    
    // Show success state
    this.innerHTML = `
      <svg class="cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Added!
    `;
    
    // Disable button temporarily
    this.disabled = true;
    this.style.opacity = '0.8';
    
    // Reset button after 2 seconds
    setTimeout(() => {
      this.innerHTML = originalContent;
      this.disabled = false;
      this.style.opacity = '1';
    }, 2000);
  });
  
  // Enhanced keyboard accessibility
  addToCartBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
  
  // Responsive image loading optimization
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'lazy';
    });
  }
  
  // Handle image errors gracefully
  const productImages = document.querySelectorAll('.product-image img');
  productImages.forEach(img => {
    img.addEventListener('error', function() {
      console.warn('Image failed to load:', this.src);
      // Could add fallback image here if needed
    });
  });
});
