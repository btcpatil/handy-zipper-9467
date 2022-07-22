

 import {product_html,products,herbal_sidebar} from  "../export_file/export_product.js";

 document.querySelector("body").innerHTML = product_html();


 document.querySelector("h1").innerText = "Herbal Supplements"
 
 document.getElementById("sidebar").innerHTML = herbal_sidebar();

 let  mensData = [
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
        name:"Back to Balance Cleanse™",
      price: "$14.95",
      strikedoffprice: "$14.95",
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBoswellia60ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655738928",
      name: "Boswellia",
      price: "$17.95",
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaChyavanprash60ct-CartonBottle-600x600-950dd6f_1024x.png?v=1655739033",
      name: "Chyavanprash",
      price: "$18.95",
      strikedoffprice: 2099,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-33_1024x.png?v=1591027962",
      name: "ComfortCleanse®",
      price: "$14.95",
      strikedoffprice: 799,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-30_1024x.png?v=1590836814",
      name: "Curcumin Complete™",
      price: "$5.99",
      strikedoffprice: 3599,
    },
   
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-34_1024x.png?v=1591027900",
      name: "DermaCare® ",
      price: "$24.49",
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-69_1024x.png?v=1590836866",
      name: "FlorAvani®",
      price: "$5.99",
      strikedoffprice: 1099,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-126_1024x.png?v=1591028001",
      name: "GlucoCare® ",
      price: "$12.95",
      strikedoffprice: 1440,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaGuggul60ctCarton-Bottle_front_-600x600-950dd6f_1024x.png?v=1655739599 ",
      name: "Guggul",
      price: "$22.95",
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_fbc92680-5171-436b-acc1-6a5a6a2ac59c_1024x.png?v=1591028013",
      name: "HeartCare®",
      price: "$19.99",
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOENERGYBOX_BOTTLE_1024x.jpg?v=1608243299 ",
      name: "Hello Energy®",
      price: "$23.95",
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOJOYBOX_BOTTLE_1024x.jpg?v=1608241956",
      name: "Face Scrub: Exfoliating ",
      price: "$8.99",
      strikedoffprice: 999,
    },
   
  ];

  products(mensData)


  