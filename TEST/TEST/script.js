document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
  
    // Update cursor position based on mouse movement
    document.addEventListener('mousemove', function(e) {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  
    // Add hover effect to elements
    const hoverElements = document.querySelectorAll('.hover-effect');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', function() {
        cursor.classList.add('hover');
      });
      element.addEventListener('mouseleave', function() {
        cursor.classList.remove('hover');
      });
    });
  });
  