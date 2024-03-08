// TOGGLE FUNCTION SCRIPT

function toggleFun() {
    var toggleButton = document.getElementById("sldebar");
    var expandDiv = document.getElementById("main-panel");
    toggleButton.classList.toggle("hide");
    expandDiv.classList.toggle("expand");
}


// LOGIN FORM VALIDATION

function validateform() {
    var email = document.loginform.email.value;
    var password = document.loginform.password.value;

    if (email == null || email == "") {
        alert("Email can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}

// REGISTER FORM VALIDATION

function registerFormVal() {
    var firstName = document.registerform.firstname.value;
    var lastName = document.registerform.lastname.value;
    var registerEmail = document.registerform.email.value;
    var number = document.registerform.number.value;
    var registerpassword = document.registerform.password.value;

    if (firstName == null || firstName == "") {
        alert("First Name can't be blank");
        return false;
    }

    if (lastName == null || lastName == "") {
        alert("Last Name can't be blank");
        return false;
    }

    if (registerEmail == null || registerEmail == "") {
        alert("Email can't be blank");
        return false;
    }

    if (number == null || number == "") {
        alert("Phone Number can't be blank");
        return false;
    } else if (registerpassword.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    return true;
}