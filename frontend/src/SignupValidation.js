
function validation(values){
    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email="email should not be empty"
    }

    else if(!email_pattern.test(values.email)){
        error.email="Email Didn't match"
    }

    else{
        error.email=""
    }

    if(values.name === ""){
        error.name="name should not be empty"
    }

    else if(!password_pattern.test(values.password)){
        error.name="name Didn't match"
    }

    else{
        error.name=""
    }


    if(values.password === ""){
        error.password="password should not be empty"
    }

    else if(!password_pattern.test(values.password)){
        error.password="Password Didn't match"
    }

    else{
        error.password=""
    }

    return error;



}
export default validation;