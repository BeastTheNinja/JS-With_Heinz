document.getElementById('firstname').addEventListener('input', validateFirstName);
document.getElementById('lastname').addEventListener('input', validateLastName);
document.getElementById('gender').addEventListener('input', validateGender);
document.getElementById('address').addEventListener('input', validateAddress);
document.getElementById('zipcode').addEventListener('input', validateZipcode);
document.getElementById('email').addEventListener('input', validateEmail);

function validateFirstName() {
    const input = document.getElementById('firstname');
    const error = document.getElementById('firstnameError');
    if (input.value.trim().length < 2) {
        error.textContent = "Fornavn skal være mindst 2 tegn.";
        input.style.border = "2px solid red";
        return false;
    } else {
        error.textContent = "";
        input.style.border = "2px solid green";
        return true;
    }
}

function validateLastName() {
    const input = document.getElementById('lastname');
    const error = document.getElementById('lastnameError');
    if (input.value.trim().length < 2) {
        error.textContent = "Efternavn skal være mindst 2 tegn.";
        input.style.border = "2px solid red";
        return false;
    } else {
        error.textContent = "";
        input.style.border = "2px solid green";
        return true;
    }
}

function validateGender() {
    const input = document.getElementById('gender');
    const error = document.getElementById('genderError');
    const valid = ['mand', 'kvinde', 'andet'];
    const value = input.value.trim().toLowerCase();
    if (!valid.includes(value)) {
        error.textContent = "Køn skal være 'mand', 'kvinde' eller 'andet'.";
        input.style.border = "2px solid red";
        return false;
    } else {
        error.textContent = "";
        input.style.border = "2px solid green";
        return true;
    }
}

function validateAddress() {
    const input = document.getElementById('address');
    const error = document.getElementById('addressError');
    if (input.value.trim().length < 5) {
        error.textContent = "Adresse skal være mindst 5 tegn.";
        input.style.border = "2px solid red";
        return false;
    } else {
        error.textContent = "";
        input.style.border = "2px solid green";
        return true;
    }
}

function validateZipcode() {
    const input = document.getElementById('zipcode');
    const error = document.getElementById('zipcodeError');
    if (!/^\d{4}$/.test(input.value.trim())) {
        error.textContent = "Postnummer skal være 4 cifre.";
        input.style.border = "2px solid red";
        return false;
    } else {
        error.textContent = "";
        input.style.border = "2px solid green";
        return true;
    }
}

function validateEmail() {
    const input = document.getElementById('email');
    const error = document.getElementById('emailError');
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(input.value.trim())) {
        error.textContent = "Indtast en gyldig emailadresse.";
        input.style.border = "2px solid red";
        return false;
    } else {
        error.textContent = "";
        input.style.border = "2px solid green";
        return true;
    }
}

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Stop formular fra at sende

    const valid =
        validateFirstName() &
        validateLastName() &
        validateGender() &
        validateAddress() &
        validateZipcode() &
        validateEmail();

    if (valid) {
        alert("Formularen er korrekt udfyldt!");
        // Du kan nu indsende formularen eller sende data
    } else {
        alert("Udfyld venligst alle felter korrekt.");
    }
});