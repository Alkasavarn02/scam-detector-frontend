const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const minLength = 8;
const passwordvalidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function validationForm(userData){

    const err = {};        

    if(!userData?.email){
        err.email = "Email is required*"
    } else if(!emailValidation.test(userData?.email)){
        err.email = "Please enter a valid email address*"
    }
    
    if(!userData?.password){
        err.password = "Password is required*"
    } else if(userData?.password.length < minLength){
        err.password = `Password must be greater than ${minLength}*`
    } else if(!passwordvalidation.test(userData?.password)){
        err.password = "Password must be at least one uppercase letter, one lowercase letter, one number, and one special character*"
    }

    const isValid = Object.keys(err).length === 0;
    return {err,isValid}
}

export default validationForm;