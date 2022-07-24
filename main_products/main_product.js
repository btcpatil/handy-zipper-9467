
  import {common_footer,product_html,products, products_sidebar} from  "../export_file/export_product.js";

  document.querySelector("#prd_body").innerHTML = product_html();
  
  document.querySelector("h1").innerText = "Product"
  
  document.getElementById("sidebar").innerHTML =  products_sidebar();

  document.getElementById("footer").innerHTML=common_footer();

const mensData = [
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
        name:"Back to Balance Cleanse™",
      price: "14.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_1024x.png?v=1613065864",
      name: "Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
      price: "17.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_bodybar_purifying-2_1024x.png?v=1595909766",
      name: "Body Bar: Purifying (Neem & Turmeric)",
      price: "18.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_bodybar_refreshing-1_1024x.png?v=1595909931",
      name: "Body Bar: Refreshing (Lavender & Rosemary)",
      price: "14.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBoswellia60ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655738928",
      name: "Boswellia",
      price: "5.99",
    },
   
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaCharcoalToothpaste-Tube_Front_1024x.png?v=1613059882",
      name: "Charcoal & Black Seed Oil Whitening Antiplaque Toothpaste",
      price: "24.49",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaChestBalmPMwithHerbCartonJar_1024x.png?v=1624548043",
      name: "Chest Balm P.M.",
      price: "5.99",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaChyavanprash60ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655739033",
      name: "Chyavanprash",
      price: "12.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-33_1024x.png?v=1591027962",
      name: "ComfortCleanse®",
      price: "22.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-30_1024x.png?v=1590836814",
      name: "Curcumin Complete™  ",
      price: "19.99",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-34_1024x.png?v=1591027900 ",
      name: "DermaCare®",
      price: "23.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_exoliatingwwa_bottlebox_1024x.png?v=1595909354 ",
      name: "Face Scrub: Exfoliating (Walnut & Wood Apple)",
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

window.handleSort = handleSort;

  let prd_description = document.getElementById("image_1").addEventListener("click", function(){
    window.location.href = "../productPageUI/eachproductPage.html";
  });


  let prd_add_to_cart = document.getElementById("cart_div_1").addEventListener("click", function(){
    store_product();
  });

  let store_product = ()=>{
    alert("Product is added to cart");
  }
  
  let herbal_sup =()=>{
    window.location.href ="../herbal_supplement/herbal_sup.html";
  }
  let health_int =()=>{
    window.location.href ="../health_interest/health_int.html";
  }
  let oral_care =()=>{
    window.location.href ="../oral_care/oral_care.html";
  }
  let person_care =()=>{
    window.location.href ="../personal_care/personal_care.html";
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
  window.herbal_sup = herbal_sup;
  window.health_int = health_int;
  window.oral_care = oral_care;
  window.person_care = person_care;

  
  
 

  



