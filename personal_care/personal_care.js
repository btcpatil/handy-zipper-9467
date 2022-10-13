import {common_footer,product_html,products, personal_sidebar} from  "../export_file/export_product.js";

  document.querySelector("#prd_body").innerHTML = product_html();
 
 
  document.querySelector("h1").innerText = "Personal Care"
  
  document.getElementById("sidebar").innerHTML =  personal_sidebar();

  document.getElementById("footer").innerHTML=common_footer();


const mensData = [
    {
      image_url:
        "../himalaya_project_images/personalCare_product/body-bar-purifying-neem-turmeric-342355_1024x.webp",
        name:"Body-bar-purifying-neem-turmeric",
      price: "14.95",
    },
    {
      image_url:
        "../himalaya_project_images/personalCare_product/body-bar-refreshing-lavender-rosemary-879892_1024x.webp",
      name: "Body-bar-refreshing-lavender-rosemary ",
      price: "17.95",
    },
    {
      image_url:
        "../himalaya_project_images/personalCare_product/chest-balm-pm-819164_1024x.webp",
      name: "Chest-balm-pm",
      price: "18.95",
    },
    {
      image_url:
        "../himalaya_project_images/personalCare_product/face-scrub-exfoliating-walnut-wood-apple-119171_1024x.webp",
      name: "Face-scrub-exfoliating-walnut-wood-apple",
      price: "14.95",
    },
    {
      image_url:
        "../himalaya_project_images/personalCare_product/face-wash-balancing-neem-turmeric-914790_1024x.webp",
      name: "Face-wash-balancing-neem-turmeric",
      price: "5.99",
    },
   
    {
      image_url:
        "../himalaya_project_images/personalCare_product/face-wash-hydrating-797207_1024x.webp",
      name: "Face-wash-hydrating",
      price: "24.49",
    },
    {
      image_url:
        "../himalaya_project_images/personalCare_product/face-wash-invigorating-397240_1024x.webp",
      name: "Face-wash-invigorating",
      price: "5.99",
    },
    
    {
      image_url:
        "../himalaya_project_images/personalCare_product/warming-body-balm-370691_1024x.webp",
      name: "Warming-body-balm",
      price: "8.99",
    },
   
  ];

  products(mensData);

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