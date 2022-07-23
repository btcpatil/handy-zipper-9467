
let  product_html=()=>{

    return `<div id="path"></div>
    <h1>Products</h1>
    <div id="FrontUI">
        <div id="sidebar">
          
        </div>
        <div id="parent">
            <div id="mininav">
                <select onchange="handleSort()" name="sort" id="sort">
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
    let i = 1;
    let c = 1;
    document.querySelector("#container").innerHTML = "";
    mensData.forEach(function(elem){
        
        //creating child box
        let box = document.createElement("div");
        
        //creating imag element;
        let pic = document.createElement("img");
        pic.setAttribute("id", `image_${i++}`);
        pic.setAttribute("src",elem.image_url);
        
        let prodName = document.createElement("p");
        prodName.innerText =elem.name;
        let prodPrice = document.createElement("p");
        prodPrice.innerText =`$ ${elem.price}`;
  
  
        let iTag = document.createElement("i");
        iTag.setAttribute("class","fa-solid fa-cart-shopping")
        
        let iconDiv = document.createElement("div");
        iconDiv.append(iTag);
  
        let cartText = document.createElement("span");
        cartText.innerText = "Add To Cart";
        cartText.setAttribute("class","slide_cart");
  
        let cart_div = document.createElement("div");
        cart_div.setAttribute("class", "cart_div");
        cart_div.setAttribute("id", `cart_div_${c++}`);
  
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

let products_sidebar = ()=>{
    return `  <h3>Health Category</h3>
    <p class = "main_product" onclick="herbal_sup()">Herbal Supplements</p>
    <p class = "main_product" onclick="health_int()">Health Interests</p>
    <p class = "main_product" onclick="oral_care()">Oral Care</p>
    <p class = "main_product" onclick="person_care()">Personal Care</p>`
}



let personal_sidebar= ()=>{
    return `<h3>Product Type</h3>`
}


let common_footer=()=>{
    return `<div id="flex-footer">
    <div id="one-flex">
        <h4>Info</h4>
        <p>Contact us</p>
        <p>FAQ</p>
        <p>Blog</p>
        <p>Store Locator</p>
        <p>Careers</p>
    </div>
    <div id="two-flex">
        <h4>Polices</h4>
        <p>Shipping & Returns</p>
        <p>Terms & Conditions</p>
        <p>Privacy</p>
        <p>CCPA</p>
        <P>Accessibility</P>
    </div>
    <div id="three-flex">
        <h4>Contact Us</h4>
        <div id="footer-mailId">
            <p><strong>Email:</strong></p>
            <p>writetous@himalayausa.com</p>
        </div>
        <div id="footer-phoneNumber">
            <p><strong>Phone:</strong></p>
            <p>1-800-869-4640</p>
            <p>Mon-Fri, 8am-5pm CT</p>
        </div>
        <div id="footer-address">
            <p><strong>Mail:</strong></p>
            <p>Himalaya Wellness</p>
            <p>1101 Gillingham Lane
                Sugar Land, TX 77478​</p>
        </div>
    </div>
    <div id="four-flex">
        <h4>Subscribe to Our Newsletter!</h4>
        <div id="flex-four-mail">
            <input placeholder="Enter your e-mail">
            <i class="fa-solid fa-envelope"></i>
        </div>
        <p>By entering your email, you agree to our Terms & Conditions and Privacy Policy.</p>
        <div id="socialMedia">
            <span>Follow Us:</span>
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-instagram-square"></i></div>
            <div><i class="fa-brands fa-youtube"></i></div>
        </div>
    </div>

</div>
<div id="footer-bottom">
    <p>© 2022 Himalaya Wellness. All rights reserved.</p>
    <div>*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.</div>
</div>`
}

let common_header =()=>{
    return `<div id="head">
    FREE SHIPPING ON ALL ORDERS ABOVE $35!
  </div>
  <div id="navbar">
      <div>
          <button><a href=""><img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?3734" alt=""></a></button>
          <button class="anim"><a href="">Shop</a></button>
          <button class="anim"><a href="">About</a></button>
          <button class="anim"><a href="">Store Locator</a></button>
      </div>
      
      <div>
          <button><a href="">Account</a></button>
          <button><a href="">LogIn</a></button>
          <button><a href="">Cart</a></button>
      </div>
  </div>`
}

export {product_html,products,herbal_sidebar,oral_sidebar,
     products_sidebar,personal_sidebar,common_footer,common_header};