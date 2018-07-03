
function signup_fun(){
   fname=$("#fname").val();
    lname=$("#lname").val();
    email=$("#email").val();
    password=$("#password").val();
    confirm_password=$("#confirm_password").val();
    //Fname validate
    var cnt = 0;
    Fname(fname).then(function(){
        c++;
    }).catch(function(){
        $('#fname_error').html("First name can't be blank");
    })
    //lname validate
    Lname(lname).then(function(){
        c++;
    }).catch(function(){
        $('#lname_error').html("second name can't be blank");
    })

    //Email
    Email(email).then(function(){
        c++;
    }).catch(function(){
        $('#email_error').html("email can't be blank");
    })
    //password
    Pass(password).then(function(){
        c++;
    }).catch(function(){
        $('#email_error').html("");
    })

    Cpass(confirm_password).then(function(){
        c++;
    }).catch(function(){
        $('#email_error').html("email can't be blank");
    })

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

var Email=function(email){
    return new Promise(function(resolve,reject){
        if(validations.email_validate(email))
            resolve()
            else
            reject()
         
    })
}

var Pass=function(password){
    return new Promise(function(resolve,reject){
        if(validations.password_validate(password))
            resolve()
            else
            reject()
         
    })
}


var Cpass=function(confirm_password){
    return new Promise(function(resolve,reject){
        if(validations.confirm_password_validate(confirm_password))
            resolve()
            else
            reject()
         
    })
}

