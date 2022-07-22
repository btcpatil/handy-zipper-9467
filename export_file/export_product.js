
let  product_html=()=>{

    return `<div id="path"></div>
    <h1>Products</h1>
    <div id="FrontUI">
        <div id="sidebar">
          
        </div>
        <div id="parent">
            <div id="mininav">
                <select name="sort" id="sort">
                    <option value="Best Selling">Best Selling</option>
                    <option value="Featured">Featured</option>
                    <option value="Name Ascending">Name Ascending</option>
                    <option value="Name Descending">Name Descending</option>
                    <option value="Price Ascending">Price Ascending</option>
                    <option value="Price Descending">Price Descending</option>

                </select>
                <select name="sortbynum" id="sortbynum">
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="32">32</option>
                    <option value="ALL">ALL</option>

                </select>

            </div>
        
            <div id="container"></div>
            <div id = "showmore_btn">
            <button id="showmore">Show more</button>
            </div>
            </div>
    </div>`
}

let products=(pro_data)=>{
    let mensData = pro_data;
    mensData.forEach(function(elem){
        
        //creating child box
        let box = document.createElement("div");
        //creating imag element;
        let pic = document.createElement("img");
        pic.setAttribute("src",elem.image_url);
        
        let prodName = document.createElement("p");
        prodName.innerText =elem.name;
        let prodPrice = document.createElement("p");
        prodPrice.innerText =elem.price;
  
  
        let iTag = document.createElement("i");
        iTag.setAttribute("class","fa-solid fa-cart-shopping")
        
        let iconDiv = document.createElement("div");
        iconDiv.append(iTag);
  
        let cartText = document.createElement("span");
        cartText.innerText = "Add To Cart";
        cartText.setAttribute("class","slide_cart");
  
        let cart_div = document.createElement("div");
        cart_div.setAttribute("class", "cart_div");
  
        cart_div.append(iconDiv,cartText)
        
  
        box.append(pic,prodName,cart_div,prodPrice);
  
        document.querySelector("#container").append(box);
    })
}


let herbal_sidebar=()=>{
return ` <h3>Health Interests</h3>
<p>Blood Sugar</p>
<p>Brain & Cognitive</p>
<p>Digestion</p>
<p>Energy & Vitality</p>
<p>Hair, Skin & Nails</p>
<p>Heart & Cardio</p>
<p>Immune Support</p>
<p>Joint & Mobility</p>
<p>Liver & Cleanse</p>
<p>Men's Wellness</p>
<p>Respiratory</p>
<p>Sleep</p>
<p>Stress & Mood</p>
<p>Urinary</p>
<p>Weight Management</p>
<p>Women's Wellness</p>
<hr>
<h3>Herbal Supplements</h3>
<hr>
<h3>Product Form</h3>
<hr>
<h3>Herbs</h3>
<hr>
<h3>Attributes</h3>`
}

let oral_sidebar = ()=>{
    return ` <h3>Product Type</h3>
    <hr>
    <h3>Flavor</h3>`
}

export {product_html,products,herbal_sidebar,oral_sidebar};