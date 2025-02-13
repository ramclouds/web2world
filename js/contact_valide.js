document.getElementById("contactForm").addEventListener("submit", function(event) {
    let contact = document.getElementById("contact").value;
    let url = document.getElementById("companyUrl").value;
  
    let contactPattern = /^\d{10,15}$/;
    let urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}.*$/;
  
    if (!contactPattern.test(contact)) {
      alert("Invalid contact number! It must be 10-15 digits.");
      event.preventDefault();
    }
    
    if (url && !urlPattern.test(url)) {
      alert("Invalid URL! Example: www.example.com or https://example.com");
      event.preventDefault();
    }
  });
  