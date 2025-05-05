// Custom JavaScript for SARA 2025 clone

document.addEventListener("DOMContentLoaded", function() {
  // Initialize Bootstrap tooltips if any
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function(tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Newsletter form submission handler
  var newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var emailInput = document.getElementById("newsletterEmail");
      var emailValue = emailInput.value.trim();
      if (!validateEmail(emailValue)) {
        emailInput.classList.add("is-invalid");
        emailInput.focus();
        return false;
      } else {
        emailInput.classList.remove("is-invalid");
        // Here you can add AJAX submission or other logic
        alert("Merci pour votre inscription à la newsletter !");
        newsletterForm.reset();
      }
    });
  }
});

// Simple email validation function
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
