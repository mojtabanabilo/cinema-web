const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validationLogin = data => {

    const objErrorLogin = {}

    if(!data.usernameValue.trim()){
        objErrorLogin.usernameError = "Username required";
    } else if(!regex.test(data.usernameValue)){
        objErrorLogin.usernameError = "Invalid usename";
    } else {
        delete objErrorLogin.usernameError;
    }

    if(!data.passwordValue){
        objErrorLogin.passwordError = "Password required";
    } else if(data.passwordValue.length < 6){
        objErrorLogin.passwordError = "Characters > 6";
    } else {
        delete objErrorLogin.passwordError;
    }

    return objErrorLogin;
}

const validationSignup = data => {

    const objErrorSignup = {}

    if(!data.usernameValue.trim()){
        objErrorSignup.usernameError = "Username required";
    } else if(!regex.test(data.usernameValue)){
        objErrorSignup.usernameError = "Invalid usename";
    } else {
        delete objErrorSignup.usernameError;
    }

    if(!data.passwordValue){
        objErrorSignup.passwordError = "Password required";
    } else if(data.passwordValue.length < 6){
        objErrorSignup.passwordError = "Characters > 6";
    } else if(data.passwordValue !== data.confirmValue){
        objErrorSignup.confirmError = "The password does not match";
    }else {
        delete objErrorSignup.passwordError;
    }
    return objErrorSignup;
}

export {validationLogin, validationSignup};