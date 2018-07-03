var signup_module=(function(){
        flag =""
        function fname_validate(){
            fname=$("#fname").val();
            if(fname == "")
            $('#fname_error').html("First name can't be blank");
            else if (validations.name_validate(fname))
            {
                $("#lname").prop('readonly', false);
            }
            else
            $('#fname_error').html("First name must contains only letters");
        }

        function lname_validate(){
            $('#fname_error').html("");
            lname=$("#lname").val();
            if(lname == "")
            $('#lname_error').html("Last name can't be blank");
            else if (validations.name_validate(lname))
            {
                $("#email").prop('readonly', false);
                console.log("dsfkjsdhfs");
            }
            else
            $('#lname_error').html("Last name must contains only letters");
        }

        function email_validate(){
            $('#lname_error').html("");
            email=$("#email").val();
            console.log("5452"+email);
            if(email == "")
            $('#email_error').html("email can't be blank");
            else if (validations.email_validate(email))
            {
                $("#password").prop('readonly', false);
                console.log("1111111111");
            }
            else
            $('#email_error').html("enter proper email address");
        }
        //Password validations
        function password_validate(){
            $('#email_error').html("");
            password=$("#password").val();
            console.log("5452"+password);
            if(password == "")
            $('#pass_error').html("password can't be blank");
            else if (validations.password_validate(password))
            {
                $("#confirm_password").prop('readonly', false);
                console.log("77777");
            }
            else
            $('#pass_error').html("password must contains at least 6 characters");
        }

        function confirm_password_validate(){
            $('#pass_error').html("");
            confirm_password=$("#confirm_password").val();
            console.log("5452"+confirm_password);
            if(confirm_password == "")
            $('#cpass_error').html("confirm_password can't be blank");
            else if (validations.confirm_password_validate(confirm_password))
            {
               flag="success"
            }
            else
            $('#cpass_error').html("confirm password not match");
        }
        function signup_fun(){
            if(flag == "success")
                alert("success");
                else
                fname_validate();

        }

        return{
            fname_validate: fname_validate,
            lname_validate: lname_validate,
            email_validate: email_validate,
            password_validate: password_validate,
            confirm_password_validate: confirm_password_validate,
            signup_fun: signup_fun
        }
}())