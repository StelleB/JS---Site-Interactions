function validateForm() {
    var name = document.forms["Form"]["name"].value;
    if (name == "" || name.length < 2) {
        alert("Nom requis avec au moins 2 caractères");
        return false;
    }
    var email = document.forms["Form"]["email"].value;
    if (email.indexOf('@') == -1) {
        alert("Email invalide");
        return false;
    }
    var postalCode = document.forms["Form"]["postalCode"].value;
    if (postalCode.length != 5) {
        alert("Code Postal doit être de 5 chiffres");
        return false;
    }
    var password = document.forms["Form"]["password"].value;
    if (password.length < 6 || !password.match(/[a-z]/i) || !password.match(/\d/)) {
        alert("Mot de passe invalide");
        return false;
    }
    var confirmPassword = document.forms["Form"]["confirmPassword"].value;
    if (password != confirmPassword) {
        alert("Les mots de passe ne correspondent pas");
        return false;
    }
    var country = document.forms["Form"]["country"].value;
    if (country == "") {
        alert("Pays requis");
        return false;
    }
    document.forms["Form"].style.display = 'none';
    alert("Inscription réussie");
    return false;
}
