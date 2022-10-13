import {common_footer,product_html,products,herbal_sidebar} from  "../export_file/export_product.js";

document.querySelector("#prd_body").innerHTML = product_html();


document.querySelector("h1").innerText = "Health Interests"

document.getElementById("sidebar").innerHTML = herbal_sidebar();

document.getElementById("footer").innerHTML=common_footer();

let  mensData = [
   {
     image_url:
       "../himalaya_project_images/healthInterest_product/back-to-balance-cleanse-297598_1024x.webp",
       name:"Back to Balance Cleanse™",
     price: "14.95",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/boswellia-829056_1024x.webp",
     name: "Boswellia",
     price: "17.95",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/chyavanprash-105275_1024x.webp",
     name: "Chyavanprash",
     price: "18.95",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/comfortcleanse-636861_1024x.webp",
     name: "ComfortCleanse®",
     price: "14.95",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/curcumin-complete-187497_1024x.webp",
     name: "Curcumin Complete™",
     price: "5.99",
   },
  
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/dermacare-422043_1024x.webp",
     name: "DermaCare® ",
     price: "24.49",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/floravani-718088_1024x.webp",
     name: "FlorAvani®",
     price: "5.99",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/glucocare-445898_1024x.webp",
     name: "GlucoCare® ",
     price: "12.95",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/guggul-989338_1024x.webp",
     name: "Guggul",
     price: "22.95",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/heartcare-353117_1024x.webp",
     name: "HeartCare®",
     price: "19.99",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/hello-calm-mind-673401_1024x.webp",
     name: "Hello Energy®",
     price: "23.95",
   },
   {
     image_url:
       "../himalaya_project_images/healthSuppliment_product/ashwagandharelax-787355_1024x (1).webp",
     name: "Ashwagandharelax",
     price: "8.99",
   },
  
 ];

 products(mensData)

 let bestSeller = mensData;

function handleSort(){
  let selected=document.querySelector("#sort").value;

  if(selected == "Best Selling"){
   window.location.reload();
  }

  if(selected == "Name Ascending"){
    
    bestSeller.sort(function(a,b){
      if (a.name>b.name) return 1;
      if(a.name<b.name) return -1;
      return 0;
   })
   
   products(bestSeller);
  }

  if(selected == "Name Descending"){
    bestSeller.sort(function(a,b){
      if (a.name>b.name) return -1;
      if(a.name<b.name) return 1;
      return 0;
   })
   products(bestSeller);
  }

  if(selected=="Price Ascending"){
    bestSeller.sort(function(a,b){
       return (+a.price)-(+b.price);
    })
    products(bestSeller);
  }

  if(selected=="Price Descending"){
    bestSeller.sort(function(a,b){
       return (+b.price)-(+a.price);
    })
    products(bestSeller);
  }
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
 window.handleSort = handleSort;