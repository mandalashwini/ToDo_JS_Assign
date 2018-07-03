
var validations=(function(){
    
    function name_validate(name){
        
        var regex = /^[a-zA-Z ]{2,20}$/; 
        if (regex.test(name)) {
            return true;
        }
        else {
            return false;
        }
    }
    return{
        name_validate: name_validate
    }
    
}());
