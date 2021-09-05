class ValidateForm {
    public static execute(values: {
        name: string
        apiKey: string
    }) {
        const errors = {
            name: '',
            apiKey: ''
        };
        errors.name = ValidateForm.checkName(values.name);
        errors.apiKey = ValidateForm.checkApiKey(values.apiKey);
        const successResult = ValidateForm.hasSuccessResult(errors);
        if (!successResult) {
            return {status: 'error', errors: errors};
        }
        return {status: 'success', errors: {}};
    }

    private static checkName(name: string) {
        if (!name) {
            return 'Название обязателено к заполнению!';
        }
        return '';
    }
    private static checkApiKey(apiKey: string) {
        if (!apiKey) {
            return 'Api ключ обязателен к заполнению!';
        }
        return '';
    }

    private static hasSuccessResult(errors: any) {
        if (errors.name.length > 0) {
            return false;
        }
        if (errors.apiKey.length > 0) {
            return false;
        }
        return true;
    }
}

export default ValidateForm;