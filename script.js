const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", () => {
  navbarToggler.getAttribute("aria-expanded") === "false" ? navbarToggler.setAttribute("aria-expanded", true) : navbarToggler.setAttribute("aria-expanded", false);
  navbarCollapse.classList.toggle("show");
});
 
// Filter photos by category
const buttons = document.querySelectorAll('.button-section button');
const photos = document.querySelectorAll('.photo-grid img');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const category = button.classList[0];
    photos.forEach(photo => {
      photo.style.display = 'none';
      if (photo.classList.contains(category) || category === 'all') {
        photo.style.display = 'block';
      }
    });
  });
});

 // Add Font Awesome icons
const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/your-kit-id.js';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);

// Add event listener to the form submit button
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // Add your form submission code here
});