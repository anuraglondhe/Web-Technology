const btn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");

btn.addEventListener("click", function (event){
    event.preventDefault();

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const email = emailInput.value.trim();

    if (name === ""){
        alert("Name cannot be empty");
        return;
    }

    if (age === "" || age < 18){
        alert("Age must be 18 or above");
        return;
    }

    const emailPattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)){
        alert("Enter a valid email address");
        return;
    }

    alert("Yes, Registration successful..!");

})