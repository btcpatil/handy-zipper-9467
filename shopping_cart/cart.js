// let obj={
//     image_url:
//       "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_1024x.png?v=1613065864",
//       name:"Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
//     price: "4.95",
//     count:2,
//   }

//   localStorage.setItem("cart", JSON.stringify(obj));
  let price = 29.95;
  let data = JSON.parse(localStorage.getItem("cart"));

  let img_div = document.getElementById("cart_image");
  let image = document.createElement("img");
  image.src = "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195";
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