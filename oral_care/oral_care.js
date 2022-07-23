import {common_footer,product_html,products,oral_sidebar} from  "../export_file/export_product.js";

 document.querySelector("#prd_body").innerHTML = product_html();


 document.querySelector("h1").innerText = "Oral Care"
 
 document.getElementById("sidebar").innerHTML =oral_sidebar();
 document.getElementById("footer").innerHTML=common_footer();

 let  mensData = [
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_1024x.png?v=1613065864",
        name:"Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
      price: "4.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaCharcoalToothpaste-Tube_Front_1024x.png?v=1613059882",
      name: "Charcoal & Black Seed Oil Whitening Antiplaque Toothpaste",
      price: "7.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-1_1024x.jpg?v=1591028200",
      name: "Kids Toothpaste - Bubble Gum",
      price: "8.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-2_1024x.jpg?v=1591028203",
      name: "Kids Toothpaste - Cool Mint",
      price: "4.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/KIDSORANGEVERTICALTUBE_1024x.jpg?v=1608240530",
      name: "Kids Toothpaste - Orange",
      price: "5.99",
    },
   
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Neem-and-Pom---Box-Tube_1024x.png?v=1597744049",
      name: "Neem & Pomegranate Original Toothpaste",
      price: "2.49",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/CC-Cinnamon---Box-Tube_1024x.png?v=1597743708",
      name: "Simply Cinnamon Complete Care Toothpaste",
      price: "5.99",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/CC-Mint---Box-Tube_1024x.png?v=1597744156",
      name: "Simply Mint Complete Care Toothpaste",
      price: "7.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_1024x.png?v=1597743896",
      name: "Simply Mint Whitening Toothpaste",
      price: "10.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/CC-Peppermint---Box-Tube_1024x.png?v=1597744464",
      name: "Simply Peppermint Complete Care Toothpaste",
      price: "9.99",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Peppermint---Box-Tube_1024x.png?v=1605047704",
      name: "Simply Peppermint Whitening Toothpaste",
      price: "3.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/CC-Spearmint---Box-Tube_1024x.png?v=1597744520",
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