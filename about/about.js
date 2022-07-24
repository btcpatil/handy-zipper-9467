import {common_footer} from "../export_file/export_product.js"

document.getElementById("footer").innerHTML=common_footer();




function tab(pageName, element) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "rgb(0,102,102)";
    tablinks[i].style.borderTop = "";
    tablinks[i].style.borderLeft = "";
    tablinks[i].style.borderRight = "";
  }
  document.getElementById(pageName).style.display = "block";
  element.style.backgroundColor = "rgb(0,102,102)";
  element.style.color = "white";
  element.style.borderTop = "1px solid rgb(202, 12, 12)";
  element.style.borderLeft = "1px solid rgb(202, 12, 12)";
  element.style.borderRight = "1px solid rgb(202, 12, 12)";
}


let loginData = JSON.parse(localStorage.getItem("loginData"));
if(loginData){
 let login = document.getElementById("index_login");
 login.innerText = loginData.fst_name;

 let signup = document.getElementById("index_signup");
 signup.style.visibility = "hidden";
 }


 let check_Cartprd=()=>{
  let data = JSON.parse(localStorage.getItem("cart"));
  if(data){
      window.location.href = "../shopping_cart/cart.html";
  }else{
      window.location.href = "../shopping_cart/empty_cart.html";
  }
 }
 
window.check_Cartprd = check_Cartprd;

window.tab =tab;
document.getElementById("defaultOpen").click();
