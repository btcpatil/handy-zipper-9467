import {common_footer,product_html,products,oral_sidebar} from  "../export_file/export_product.js";

 document.querySelector("#prd_body").innerHTML = product_html();


 document.querySelector("h1").innerText = "Oral Care"
 
 document.getElementById("sidebar").innerHTML =oral_sidebar();
 document.getElementById("footer").innerHTML=common_footer();

 let  mensData = [
    {
      image_url:
        "../himalaya_project_images/oralCare_product/bamboo-sea-salt-whitening-antiplaque-toothpaste.webp",
        name:"Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
      price: "4.95",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/charcoal-black-seed-oil-whitening-antiplaque-toothpaste.webp",
      name: "Charcoal & Black Seed Oil Whitening Antiplaque Toothpaste",
      price: "7.95",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/kids-toothpaste-bubble-gum.webp",
      name: "Kids Toothpaste - Bubble Gum",
      price: "8.95",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/kids-toothpaste-cool-mint.webp",
      name: "Kids Toothpaste - Cool Mint",
      price: "4.95",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/kids-toothpaste-orange.webp",
      name: "Kids Toothpaste - Orange",
      price: "5.99",
    },
   
    {
      image_url:
        "../himalaya_project_images/oralCare_product/neem-pomegranate-original-toothpaste.webp",
      name: "Neem & Pomegranate Original Toothpaste",
      price: "2.49",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/CC-Cinnamon---Box.webp",
      name: "Simply Cinnamon Complete Care Toothpaste",
      price: "5.99",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/simply-mint-complete-care-toothpaste.webp",
      name: "Simply Mint Complete Care Toothpaste",
      price: "7.95",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/simply-mint-whitening-toothpaste.webp",
      name: "Simply Mint Whitening Toothpaste",
      price: "10.95",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/simply-peppermint-complete-care-toothpaste.webp",
      name: "Simply Peppermint Complete Care Toothpaste",
      price: "9.99",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/simply-peppermint-whitening-toothpaste.webp",
      name: "Simply Peppermint Whitening Toothpaste",
      price: "3.95",
    },
    {
      image_url:
        "../himalaya_project_images/oralCare_product/simply-spearmint-complete-care-toothpaste.webp",
      name: "Simply Spearmint Complete Care Toothpaste",
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