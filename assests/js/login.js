function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (username && password) {
        alert('Login succesfuld for ' + username);
        window.location.href = "index.html"; // Skift til den ønskede side
    } else {
        alert('Udfyld alle felter');
    }
}
