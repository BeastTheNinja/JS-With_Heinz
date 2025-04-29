    const modal = document.getElementById("loginModal");
    const openBtn = document.getElementById("openLoginModal");
    const closeBtn = document.querySelector(".close");
    const loginBtn = document.getElementById("loginBtn");

    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("login-password");

    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    // Åbn modal automatisk ved sideindlæsning
    setTimeout(() => {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
    }, 500); // 500ms forsinkelse for en bedre effekt

    // Luk modal med slide-out effekt
    function closeModal() {
        modal.classList.add("hide");
        setTimeout(() => {
            modal.classList.remove("show", "hide");
            modal.style.display = "none";
        }, 400);
    }

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Validering
    function validateUsername() {
        if (usernameInput.value.length < 3) {
            usernameError.textContent = "Brugernavn skal være mindst 3 tegn.";
            return false;
        } else {
            usernameError.textContent = "";
            return true;
        }
    }

    function validatePassword() {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            passwordError.textContent = "Adgangskoden skal være mindst 6 tegn og indeholde både bogstaver og tal.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    }

    usernameInput.addEventListener("input", validateUsername);
    passwordInput.addEventListener("input", validatePassword);

    loginBtn.addEventListener("click", function () {
        if (validateUsername() && validatePassword()) {
            closeModal();
        }
    });
