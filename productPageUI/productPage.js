var mensData = [
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaAshwagandha30ctCarton-Bottle_front_-600x600-950dd6f_edd94945-f1dd-40b5-b41e-81f2d635daa3_1024x.png?v=1655738427",
        name:"Organic Ashwagandha",
      price: "$14.95",
      strikedoffprice: "$14.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Himalaya_LiverCare_42ct_-_Carton_Bottle_1024x.png?v=1654789186",
      name: "LiverCare® ",
      price: "$17.95",
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/StressCare-30_1024x.png?v=1595825645",
      name: "StressCare®",
      price: "$18.95",
      strikedoffprice: 2099,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaGymnema30ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655739688",
      name: "Organic Gymnema",
      price: "$14.95",
      strikedoffprice: 799,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Neem-and-Pom---Box-Tube_1024x.png?v=1597744049",
      name: "Neem & Pomegranate Original Toothpaste",
      price: "$5.99",
      strikedoffprice: 3599,
    },
   
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/MindCare-60---Box-Bottle_1024x.png?v=1595823793",
      name: " MindCare® ",
      price: "$24.49",
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_1024x.png?v=1597743896",
      name: "Simply Mint Whitening Toothpaste ",
      price: "$5.99",
      strikedoffprice: 1099,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBitterMelon30ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655738669",
      name: "Organic Bitter Melon  ",
      price: "$12.95",
      strikedoffprice: 1440,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-33_1024x.png?v=1591027962 ",
      name: "ComfortCleanse®",
      price: "$22.95",
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-30_1024x.png?v=1590836814 ",
      name: "Curcumin Complete™  ",
      price: "$19.99",
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-34_1024x.png?v=1591027900 ",
      name: "DermaCare®",
      price: "$23.95",
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_exoliatingwwa_bottlebox_1024x.png?v=1595909354 ",
      name: "Face Scrub: Exfoliating (Walnut & Wood Apple)",
      price: "$8.99",
      strikedoffprice: 999,
    },
   
  ];

  mensData.forEach(function(elem){
      console.log(elem);
      //creating child box
      let box = document.createElement("div");
      //creating imag element;
      let pic = document.createElement("img");
      pic.setAttribute("src",elem.image_url);
      
      let prodName = document.createElement("p");
      prodName.innerText =elem.name;
      let prodPrice = document.createElement("p");
      prodPrice.innerText =elem.price;
      let buttoncart = document.createElement("button");
      buttoncart.innerText = "Add to Cart";

      box.append(pic,prodName,prodPrice,buttoncart);

      document.querySelector("#container").append(box);
  })