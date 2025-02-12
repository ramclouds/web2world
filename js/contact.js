document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    formData.append("access_key", "49a25beb-6675-41b0-9109-04f1b76186eb"); 

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const result = await response.json();
    if (result.success) {
        document.getElementById("formMessage").innerHTML = "<br>✅ Form submitted successfully!";
        this.reset(); // Clear form fields
    } else {
        document.getElementById("formMessage").innerHTML = "❌ Error submitting form.";
    }
});