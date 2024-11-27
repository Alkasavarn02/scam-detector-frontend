export const validateInput = (data) => {
    
    let err = ''

    if (data?.type === "Phone") {
        const phoneRegex = /^[0-9]{10}$/; 
        if (!phoneRegex.test(data?.value)) {
            err = "Please enter a valid phone number (10 digits)";
        }
    } else if (data?.type === "Email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data?.value)) {
            err = "Please enter an email.";
        }
    } else {
        err = "Please select a type first.";
        return false;
    }

    const isValid = !err;

    return {isValid,err};
};
