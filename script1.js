const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});2
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
function validateInputValues(){
    let inputValidationStatus = [];
    if(validateName(firstName.value)){
        inputStatus(true, firstName);
        inputValidationStatus[0] = true;
    } else {
        inputStatus(false, firstName);
        inputValidationStatus[0] = false;
    }

    if(validateName(lastName.value)){
        inputStatus(true, lastName);
        inputValidationStatus[1] = true;
    } else {
        inputStatus(false, lastName);
        inputValidationStatus[1] = false;
    }

    if(validateEmail(emailAddr.value)){
        inputStatus(true, emailAddr);
        inputValidationStatus[2] = true;
    } else {
        inputStatus(false, emailAddr);
        inputValidationStatus[2] = false;
    }

    if(validatePhoneNo(phoneNumber.value)){
        inputStatus(true, phoneNumber);
        inputValidationStatus[3] = true;
    } else {
        inputStatus(false, phoneNumber);
        inputValidationStatus[3] = false;
    }

    if(validatePassword(password.value)){
        inputStatus(true, password);
        inputValidationStatus[4] = true;
    } else {
        inputStatus(false, password);
        inputValidationStatus[4] = false;
    }


    return (inputValidationStatus.includes(false) ? false : true);
}

// validate first and lastname 
function validateName(nameTxt){
    const nameRegex = /^[A-Za-z]+$/; // firstname or lastname containing only letters
    return nameRegex.test(nameTxt);
}

// validate email address
function validateEmail(emailTxt){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(emailTxt);
}

// validate phonenumber
function validatePhoneNo(phoneTxt){
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    /* supports following number formats
        (123) 456-7890
        (123)456-7890
        123-456-7890
        123.456.7890
        1234567890
        +31636363634
        075-63546725
    */
   return phoneRegex.test(phoneTxt);
}


