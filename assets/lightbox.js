// Lightbox functionality for image posts
document.addEventListener('DOMContentLoaded', function() {
  // Create lightbox overlay
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.className = 'lightbox-overlay';
  lightboxOverlay.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close">&times;</button>
      <img src="" alt="">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightboxOverlay);
  
  const lightboxImg = lightboxOverlay.querySelector('img');
  const lightboxCaption = lightboxOverlay.querySelector('.lightbox-caption');
  const closeBtn = lightboxOverlay.querySelector('.lightbox-close');
  
  // Add click handlers to all photo images on post pages
  const postImages = document.querySelectorAll('.post-image-display .journal-photo');
  
  postImages.forEach(img => {
    img.addEventListener('click', function() {
      const src = this.src;
      const alt = this.alt;
      const caption = this.parentElement.querySelector('.photo-caption');
      
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightboxCaption.textContent = caption ? caption.textContent : '';
      
      lightboxOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close lightbox functionality
  function closeLightbox() {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  
  closeBtn.addEventListener('click', closeLightbox);
  
  lightboxOverlay.addEventListener('click', function(e) {
    if (e.target === lightboxOverlay) {
      closeLightbox();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
      closeLightbox();
    }
  });
});
