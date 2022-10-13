// let obj={
//     image_url:
//       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_1024x.png?v=1613065864",
//       name:"Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
//     price: "4.95",
//     count:2,
//   }

//   localStorage.setItem("cart", JSON.stringify(obj));

import {common_footer} from  "../export_file/export_product.js";

document.getElementById("footer").innerHTML=common_footer();


  let price = 29.95;
  let data = JSON.parse(localStorage.getItem("cart"));

  let img_div = document.getElementById("cart_image");
  let image = document.createElement("img");
  image.src = "../himalaya_project_images/healthCatogary_product/back-to-balance-cleanse-297598_1024x.webp";
  img_div.append(image);

  let prd_name = document.getElementById("prd_name");
  prd_name.innerText = "Back to Balance Cleanse™";

  let prd_price = document.getElementById("base_price");
  prd_price.innerText = `$ ${price}`;

  let count = document.getElementById("count");
  count.innerText = data.count;

  let sub_total = document.getElementById("sub_total");
  sub_total.innerText = `$ ${+data.count*(price)}`

  let grd_total = document.getElementById("grand_total");
  grd_total.innerText = `$ ${+data.count*(price)}`

  let total_price = document.getElementById("total_price");
  total_price.innerText =`$ ${+data.count*(price)}`;


  let reduce_qunt=()=>{
    
    if(data.count>1){ 
      data.count=--data.count;
      localStorage.setItem("cart", JSON.stringify(data));
      let count = document.getElementById("count");
      count.innerText = data.count;
    }
  }

  let increase_qunt=()=>{
    
   
      data.count=++data.count;
      localStorage.setItem("cart", JSON.stringify(data));
      let count = document.getElementById("count");
      count.innerText = data.count;
    
  }

  let update_price=()=>{

    let grandTotal = data.count*(+price);
    document.getElementById("total_price").innerText = `$ ${grandTotal}`;
    document.getElementById("sub_total").innerText = `$ ${grandTotal}`;
    document.getElementById("grand_total").innerText = `$ ${grandTotal}`;
  }

  let delete_prd=()=>{
    window.location.href = "./empty_cart.html";
  }

  let payment_page = ()=>{
    window.location.href = "../shivaji.html";
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



  window.reduce_qunt = reduce_qunt;
  window.increase_qunt = increase_qunt;
  window.update_price = update_price;
  window.delete_prd = delete_prd;
  window.payment_page = payment_page;