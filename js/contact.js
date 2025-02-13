document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const contact = document.getElementById("contact").value.trim();
    const companyUrl = document.getElementById("companyUrl").value.trim();
    const formMessage = document.getElementById("formMessage");

    // Validation patterns
    const contactPattern = /^\d{10,15}$/;
    const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}.*$/;

    // Validate Contact Number
    if (!contactPattern.test(contact)) {
        formMessage.innerHTML = "❌ Invalid contact number! It must be 10-15 digits.";
        return;
    }

    // Validate Company URL (if provided)
    if (companyUrl && !urlPattern.test(companyUrl)) {
        formMessage.innerHTML = "❌ Invalid URL! Example: www.example.com or https://example.com";
        return;
    }

    // Proceed with form submission
    const formData = new FormData(this);
    formData.append("access_key", "49a25beb-6675-41b0-9109-04f1b76186eb"); 

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (result.success) {
            formMessage.innerHTML = "<br>✅ Form submitted successfully!";
            this.reset(); // Clear form fields
        } else {
            formMessage.innerHTML = "❌ Error submitting form.";
        }
    } catch (error) {
        formMessage.innerHTML = "❌ Network error. Please try again.";
    }
});
