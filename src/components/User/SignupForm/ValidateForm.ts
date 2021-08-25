class ValidateForm {
    public static execute(values: {
        email: string,
        login: string,
        password: string,
        fullname: string
        recaptcha: string
    }) {
        const errors = {
            email: '',
            login: '',
            password: '',
            fullname: '',
            recaptcha: '',
        };
        errors.email = ValidateForm.checkEmail(values.email);
        errors.login = ValidateForm.checkLogin(values.login);
        errors.password = ValidateForm.checkPassword(values.password);
        errors.fullname = ValidateForm.checkFullName(values.fullname);
        errors.recaptcha = ValidateForm.checkReCaptchaKey(values.recaptcha);
        const successResult = ValidateForm.hasSuccessResult(errors);
        if (!successResult) {
            return {status: 'error', errors: errors};
        }
        return {status: 'success', errors: {}};
    }


    private static checkEmail(email: string) {
        if (!email) {
            return 'E-mail обязателен к заполнению!';
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            return 'E-mail заполнен не верно!';
        }
        return '';
    }

    private static checkLogin(login: string) {
        if (!login) {
            return 'Логин обязателен к заполнению!';
        }
        return '';
    }

    private static checkPassword(password: string) {
        if (!password) {
            return 'Пароль обязателен к заполнению!';
        }
        return '';
    }

    private static checkFullName(fullName: string) {
        if (!fullName) {
            return 'Имя обязателено к заполнению!';
        }
        return '';
    }
    private static checkReCaptchaKey(reCaptchaKey: string) {
        if (!reCaptchaKey) {
            return 'Проверка на антиспам не пройдена!';
        }
        return '';
    }

    private static hasSuccessResult(errors: any) {
        if (errors.email.length > 0) {
            return false;
        }
        if (errors.login.length > 0) {
            return false;
        }
        if (errors.password.length > 0) {
            return false;
        }
        if (errors.fullname.length > 0) {
            return false;
        }
        if (errors.recaptcha.length > 0) {
            return false;
        }
        return true;
    }
}

export default ValidateForm;