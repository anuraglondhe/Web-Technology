// Get elements
const btn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");

// Add click event
btn.addEventListener("click", function (event) {

    event.preventDefault(); // Prevent page reload

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const email = emailInput.value.trim();

    // Name validation
    if (name === "") {
        alert("Name cannot be empty");
        return;
    }

    // Age validation
    if (age === "" || age < 18) {
        alert("Age must be 18 or above");
        return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Enter a valid email address");
        return;
    }

    // Success
    alert("Registration Successful!");
});