import {product_html,products, personal_sidebar} from  "../export_file/export_product.js";

  document.querySelector("body").innerHTML = product_html();
 
 
  document.querySelector("h1").innerText = "Personal Care"
  
  document.getElementById("sidebar").innerHTML =  personal_sidebar();


const mensData = [
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_bodybar_purifying-2_1024x.png?v=1595909766",
        name:"Organic Ashwagandha",
      price: "14.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_bodybar_refreshing-1_1024x.png?v=1595909931",
      name: "LiverCare® ",
      price: "17.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaChestBalmPMwithHerbCartonJar_1024x.png?v=1624548043",
      name: "StressCare®",
      price: "18.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_exoliatingwwa_bottlebox_1024x.png?v=1595909354",
      name: "Organic Gymnema",
      price: "14.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_balancing_neem_turmeric_bottlebox_1024x.png?v=1595909161",
      name: "Neem & Pomegranate Original Toothpaste",
      price: "5.99",
    },
   
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_hydrating_bottlebox_1024x.png?v=1595909481",
      name: "MindCare® ",
      price: "24.49",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaWarmingBodyBalmCartonJarwithherb_1024x.png?v=1624547923",
      name: "Simply Mint Whitening Toothpaste ",
      price: "5.99",
    },
    
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaWarmingBodyBalmCartonJarwithherb_1024x.png?v=1624547923",
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