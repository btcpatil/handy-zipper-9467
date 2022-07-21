function signup(){
    function input_value(id){
       return document.getElementById(id).value;
    }
    let firstName = input_value("fst_input");
    let lastName = input_value("last_input");
    let email = input_value("email_input");
    let password = input_value("password_input");

    if(firstName && lastName && email && password){
        let data = JSON.parse(localStorage.getItem("userData"))||[];

       let user_obj={
            fst_name : firstName,
            lst_name : lastName,
            Email : email,
            password : password
       }

       data.push(user_obj);

       localStorage.setItem("userData", JSON.stringify(data));
       alert("Successfully created account");
       setTimeout(() => {
        window.location.href = "../login_page/login.html";
       }, 2000);

    }else{
        alert("Please fill the requiered fields");
    }
}