class ValidateForm {
    public static execute(values: {
        login: string,
        password: string,
        recaptcha: string
    }) {
        const errors = {
            login: '',
            password: '',
            recaptcha: '',
        };
        errors.login = ValidateForm.checkLogin(values.login);
        errors.password = ValidateForm.checkPassword(values.password);
        errors.recaptcha = ValidateForm.checkReCaptchaKey(values.recaptcha);
        const successResult = ValidateForm.hasSuccessResult(errors);
        if (!successResult) {
            return {status: 'error', errors: errors};
        }
        return {status: 'success', errors: {}};
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

    private static checkReCaptchaKey(reCaptchaKey: string) {
        if (!reCaptchaKey) {
            return 'Проверка на антиспам не пройдена!';
        }
        return '';
    }

    private static hasSuccessResult(errors: any) {
        if (errors.login.length > 0) {
            return false;
        }
        if (errors.password.length > 0) {
            return false;
        }
        if (errors.recaptcha.length > 0) {
            return false;
        }
        return true;
    }
}

export default ValidateForm;