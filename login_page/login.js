
function login(){

    function input_value(id){
        return document.getElementById(id).value;
     }

     let email = input_value("email_input");
     let password = input_value("password_input");
    
     let data = JSON.parse(localStorage.getItem("userData"));
    if(email && password){
        if(data){
            data.forEach(function(ele){
                if(ele.Email===email && ele.password === password){
                    localStorage.setItem("loginData", JSON.stringify(ele));
                    alert("login successful!");
                    window.location.href = "../Homepage/index.html"
                }else{
                    alert("Your email address or password is wrong! ")
                }
            })
         }else{
            alert("please create a accout");
         }
    }else{
        alert("Required fields should not be empty")
    }
     
    }
