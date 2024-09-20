const form = document.getElementById("contactForm");
const confirmationMessage = document.getElementById("confirmationMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Create FormData object to hold the form data
    const formData = new FormData(form);

    // Send form data using fetch
    fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfUMnMzitML6CkuGJBA9V6x1Zbh8s2h_mtjxfBo_wtJMYckrg/formResponse",
        {
            method: "POST",
            body: formData,
            mode: "no-cors", // This prevents CORS errors with Google Forms
        }
    )
        .then(() => {
            // Show custom confirmation message
            confirmationMessage.style.display = "block";

            // Optionally clear the form
            form.reset();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});
