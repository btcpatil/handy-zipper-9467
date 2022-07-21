let productsData = [
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaAshwagandha30ctCarton-Bottle_front_-600x600-950dd6f_edd94945-f1dd-40b5-b41e-81f2d635daa3_1024x.png?v=1655738427",
    name: "Organic Ashwagandha",
    price: 14.95,
    id: 1,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Himalaya_LiverCare_42ct_-_Carton_Bottle_1024x.png?v=1654789186",
    name: "LiverCare® ",
    price: 17.95,
    id: 2,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/StressCare-30_1024x.png?v=1595825645",
    name: "StressCare®",
    price: 18.95,
    id: 3,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaGymnema30ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655739688",
    name: "Organic Gymnema",
    price: 14.95,
    id: 4,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Neem-and-Pom---Box-Tube_1024x.png?v=1597744049",
    name: "Neem & Pomegranate Original Toothpaste",
    price: 5.99,
    id: 5,
  },

  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x1024.png?v=1591028195",
    name: " Back to Balance Cleanse™",
    price: 29.95,
    id: 6,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_1024x.png?v=1597743896",
    name: "Simply Mint Whitening Toothpaste ",
    price: 5.99,
    id: 7,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBitterMelon30ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655738669",
    name: "Organic Bitter Melon  ",
    price: 12.95,
    id: 8,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-33_1024x.png?v=1591027962 ",
    name: "ComfortCleanse®",
    price: 22.95,
    id: 9,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-30_1024x.png?v=1590836814 ",
    name: "Curcumin Complete™  ",
    price: 19.99,
    id: 10,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-34_1024x.png?v=1591027900 ",
    name: "DermaCare®",
    price: 23.95,
    id: 11,

  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_exoliatingwwa_bottlebox_1024x.png?v=1595909354 ",
    name: "Face Scrub: Exfoliating (Walnut & Wood Apple)",
    price: 8.99,
    id: 12,

  },

];


let container = document.querySelector("#container");
let cartFromLS = JSON.parse(localStorage.getItem("cart_page")) || [];

displayData(productsData);

function displayData(productsData) {
  container.innerHTML =null;
  productsData.forEach(function (elem) {
    
    console.log(elem);
    //creating child box
    let box = document.createElement("div");
    //creating image element;
    let pic = document.createElement("img");
    pic.setAttribute("src", elem.image_url);

    let prodName = document.createElement("p");
    prodName.innerText = elem.name;
    let prodPrice = document.createElement("p");
    prodPrice.innerText ="$ " + elem.price;
    let buttoncart = document.createElement("button");
    buttoncart.innerText = "ADD TO CART";
    buttoncart.addEventListener("click", function () {
      if (addToCartFun(elem.id) === true) {
        cartFromLS.push(elem);
        localStorage.setItem("cart_page", JSON.stringify(cartFromLS));
        alert("Product Successfully Added to Cart");
      } else {
        alert("Product Already In The Cart");
      }
    });

    box.append(pic, prodName, prodPrice, buttoncart);

    container.append(box);


  });
}

function addToCartFun(ID) {
  for (let i = 0; i < cartFromLS.length; i++) {
    if (cartFromLS[i].id == ID) {
      return false;
    }
  }
  return true;
}

function sortFunction() {
  let selected = document.querySelector("#sort").value;
  if (selected == "PriceAscending") {
    productsData.sort(function (a, b) {
      return a.price - b.price;
    });
    displayData(productsData);
  }
  if (selected == "PriceDescending") {
    productsData.sort(function (a, b) {
      return b.price - a.price;
    });
    displayData(productsData);
  }
  if (selected == "NameAscending") {
    productsData.sort(function (a, b) {
      if( a.name < b.name) return -1;
      if( a.name > b.name) return 1;
      return 0;
    });
    displayData(productsData);
  }
  if (selected == "NameDescending") {
    productsData.sort(function (a, b) {
      if( a.name < b.name) return 1;
      if(a.name > b.name) return -1;
      return 0;
    });
    displayData(productsData);
  }
  if (selected == "Featured") {
    productsData.sort(function (a, b) {
      if( a.name < b.name) return -1;
      if( a.name > b.name) return 1;
      return 0;
    });
    displayData(productsData);
  }
  if (selected == "BestSelling") {
    
    window.location.href="productPage.html";
  }
}