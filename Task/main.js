let isRegister;

let showLogin = () => {
    authPopup.hidden = false;
    authType.innerHTML = 'Login';
    logInRegBtn.innerHTML = 'Login';
    isRegister = false;
}

logInReg.addEventListener('click', showLogin);

let showReg = () => {
    authPopup.hidden = false;
    authType.innerHTML = 'Register';
    logInRegBtn.innerHTML = 'Register';
    isRegister = true;
}

reg.addEventListener('click', showReg);

let checkLogin = () => {
    if (localStorage.isLogedin == 'true') {
        logInReg.innerHTML = 'Logout';
        salute.innerHTML = `Hello ${localStorage.userName}`;
        content.hidden = false;
        authPopup.hidden = true;
    }else {
        logInReg.innerHTML = 'Login';
        salute.innerHTML = 'Hello, please login or register';
        content.hidden = true;
        authPopup.hidden = false;
    }
}

checkLogin();