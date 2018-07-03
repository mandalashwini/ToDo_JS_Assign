
var validations=(function(){
    
    function name_validate(name){
        
        var regex = /^[a-zA-Z ]{1,20}$/; 
        if (regex.test(name)) {
            return true;
        }
        else {
            return false;
        }
    }
    function email_validate(email){
        console.log("55555");
        var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }
    function password_validate(password){
        var regex=/^.{6,}$/;
        if (regex.test(password)) {
            return true;
        }
        else {
            return false;
        }
    }
    function confirm_password_validate(cpass){
        
        if(password == cpass) {
            return true;
        }
        else {
            return false;
        }
    }
    

    return{
        name_validate: name_validate,
        email_validate: email_validate,
        password_validate: password_validate,
        confirm_password_validate: confirm_password_validate
        

    }
    
}());
