export const formValidation = (value, validationRules=[]) => {
    const errorMessages = [];

    validationRules.forEach((validationRule) => {
        if ( validationRule?.required && !value ) {
            errorMessages.push(validationRule?.message);
        }

        if(validationRule?.max && value && value.length > validationRule?.max) {
            errorMessages.push(validationRule?.message);
        }

        if(validationRule?.min && value && value.length < validationRule?.min) {
            errorMessages.push(validationRule?.message);
        }

        if ( validationRule?.pattern && value && !value.match(validationRule?.pattern) ) {
            errorMessages.push(validationRule.message);
        }
    })

    return errorMessages;
}