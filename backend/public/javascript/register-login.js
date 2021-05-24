window.addEventListener('load', () => {
    const registerForm = document.getElementById('register-form')
    const errors = document.getElementById('errors');
    errors.style.display = 'none';


    const userFullName = document.getElementById('user_fullname');
    const errorUserNameLength = document.getElementById('user_name_length');

    const userEmail = document.getElementById('email02');
    const errorEmail = document.getElementById('user_email_valid');

    const userProfileImage = document.getElementById('user_profileimage');
    const errorProfileImage = document.getElementById('user_profileimage_valid');

    const userBirthDate = document.getElementById('user_birthdate');
    const errorBirthDate = document.getElementById('user_birthdate_valid');

    const userAdress = document.getElementById('user_adress');
    const errorAdress = document.getElementById('user_adress_valid');

    const userGender = document.getElementById('user_gender_id');
    const errorGender = document.getElementById('user_gender_id_valid');

    const userPassword = document.getElementById('user_password');
    const errorPassword0 = document.getElementById('user_password_valid0');
    const errorPassword1 = document.getElementById('user_password_valid1');

    const userPasswordCheck = document.getElementById('password_check');
    const errorPasswordCheck = document.getElementById('user_password_check_valid');

    userFullName.addEventListener('change', () => {
        if (userFullName.value.length < 2) {
            errors.style.display = 'block';
            errorUserNameLength.style.display = 'block';
        } else {
            errorUserNameLength.style.display = 'none';
        }
    });

    userEmail.addEventListener('change', () => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userEmail.value)) {
            errorEmail.style.display = 'none';
        } else {
            errors.style.display = 'block';
            errorEmail.style.display = 'block';
        }

    });

    let allowSubmit = false;
    registerForm.addEventListener('submit', (e) => {
        console.log(allowSubmit)
        if (!allowSubmit) {
            e.preventDefault()
            if (!userFullName.value) {
                errors.style.display = 'block';
                errorUserNameLength.style.display = 'block';
            } else if (userPasswordCheck.value != userPassword.value) {
                errors.style.display = 'block';
                errorPasswordCheck.style.display = 'block';
            } else if (!userEmail.value) {
                errors.style.display = 'block';
                errorEmail.style.display = 'block';
            } else if (!userProfileImage.value) {
                errors.style.display = 'block';
                errorProfileImage.style.display = 'block';
            } else if (!userBirthDate.value) {
                errors.style.display = 'block';
                errorBirthDate.style.display = 'block';
            } else if (!userAdress.value) {
                errors.style.display = 'block';
                errorAdress.style.display = 'block';
            } else if (!userGender.value) {
                errors.style.display = 'block';
                errorGender.style.display = 'block';
            } else if (!userPassword.value) {
                errors.style.display = 'block';
                errorPassword0.style.display = 'block';
            } else if (!userPassword.value) {
                errors.style.display = 'block';
                errorPassword1.style.display = 'block';
            } else {
                allowSubmit = true
            }
        }

    })

    userProfileImage.addEventListener('change', () => {
        if (userProfileImage.value) {
            errorProfileImage.style.display = 'none';
        }
    })

    userBirthDate.addEventListener('change', (e) => {
        if (!userBirthDate.value) {
            errors.style.display = 'block';
            errorBirthDate.style.display = 'block';
        } else {
            errorBirthDate.style.display = 'none';
        }
    })

    userAdress.addEventListener('change', () => {
        if (/^[a-zA-Z0-9]+$/.test(userAdress.value)) {
            errors.style.display = 'block';
            errorAdress.style.display = 'block';
        } else {
            errorAdress.style.display = 'none';
        }
    })


    userGender.addEventListener('change', () => {
        if (!userGender.value) {
            errors.style.display = 'block';
            errorGender.style.display = 'block';
        } else {
            errorGender.style.display = 'none';
        }
    })

    userPassword.addEventListener('input', () => {
        if (userPassword.value.length < 8) {
            errors.style.display = 'block';
            errorPassword0.style.display = 'block';
        } else {
            errorPassword0.style.display = 'none';
        }
    })

    userPassword.addEventListener('input', () => {
        if (/^[a-zA-Z0-9]$/.test(userPassword.value)) {
            errors.style.display = 'block';
            errorPassword1.style.display = 'block';
        } else {
            errorPassword1.style.display = 'none';
        }
    })


    userPassword.addEventListener('change', () => {
        if (userPasswordCheck.value != userPassword.value) {
            errors.style.display = 'block';
            errorPasswordCheck.style.display = 'block';
        } else {
            errorPasswordCheck.style.display = 'none';
        }
    })

    userPasswordCheck.addEventListener('input', () => {
        if (userPasswordCheck.value != userPassword.value) {
            errors.style.display = 'block';
            errorPasswordCheck.style.display = 'block';
        } else {
            errorPasswordCheck.style.display = 'none';
        }
    })


})