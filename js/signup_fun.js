
function signup_fun(){
   fname=$("#fname").val();
    lname=$("#lname").val();
    email=$("#email").val();
    password=$("#password").val();
    confirm_password=$("#confirm_password").val();
    $('#fname_error').html("First name can't be blank");
    
}

var Fname=function(fname){
 return new Promise(function(resolve,reject){
    cnt=true;
    if (validations.name_validate(fname))
     resolve()    
     else
     reject()
 
})
}

var Lname=function(fname){
    return new Promise(function(resolve,reject){
       cnt=true;
       if (validations.name_validate(fname))
        resolve()    
        else
        reject()
    
   })
   }


