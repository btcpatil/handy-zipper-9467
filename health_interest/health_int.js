import {common_footer,product_html,products,herbal_sidebar} from  "../export_file/export_product.js";

document.querySelector("#prd_body").innerHTML = product_html();


document.querySelector("h1").innerText = "Health Interests"

document.getElementById("sidebar").innerHTML = herbal_sidebar();

document.getElementById("footer").innerHTML=common_footer();

let  mensData = [
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
       name:"Back to Balance Cleanse™",
     price: "14.95",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBoswellia60ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655738928",
     name: "Boswellia",
     price: "17.95",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaChyavanprash60ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655739033",
     name: "Chyavanprash",
     price: "18.95",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-33_1024x.png?v=1591027962",
     name: "ComfortCleanse®",
     price: "14.95",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-30_1024x.png?v=1590836814",
     name: "Curcumin Complete™",
     price: "5.99",
   },
  
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-34_1024x.png?v=1591027900",
     name: "DermaCare® ",
     price: "24.49",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-69_1024x.png?v=1590836866",
     name: "FlorAvani®",
     price: "5.99",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-126_1024x.png?v=1591028001",
     name: "GlucoCare® ",
     price: "12.95",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaGuggul60ctCarton-Bottle_front_-600x600-950dd6f_1024x.png?v=1655739599 ",
     name: "Guggul",
     price: "22.95",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_fbc92680-5171-436b-acc1-6a5a6a2ac59c_1024x.png?v=1591028013",
     name: "HeartCare®",
     price: "19.99",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOENERGYBOX_BOTTLE_1024x.jpg?v=1608243299 ",
     name: "Hello Energy®",
     price: "23.95",
   },
   {
     image_url:
       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOJOYBOX_BOTTLE_1024x.jpg?v=1608241956",
     name: "Face Scrub: Exfoliating ",
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