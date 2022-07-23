var items = [
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_bodybar_purifying-2_1024x.png?v=1595909766",
    ProdName: "Body Bar: Purifying(Neem & Turmeric)",
    price: "$4.99",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_bodybar_refreshing-1_1024x.png?v=1595909931",
    ProdName: "Body Bar: Refreshing(lavender & rosemary)",
    price: "$4.99",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaChestBalmPMwithHerbCartonJar_1024x.png?v=1624548043",
    ProdName: "Chest Balm P.M",
    price: "$7.99",
  },

  
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_exoliatingwwa_bottlebox_1024x.png?v=1595909354",
    ProdName: "FAce Scrub:Exfoliating(Wallnut & Wood Apple)",
    price: "$8.99",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_balancing_neem_turmeric_bottlebox_1024x.png?v=1595909161",
    ProdName: "Face Wash Balancing(Neem & Turmeric)",
    price: "$4.99",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_hydrating_bottlebox_1024x.png?v=1595909481",
    ProdName: "Face Wash: Hydrating",
    price: "$4.99",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/InvigoratingFaceWash_1024x.png?v=1595909620",
    ProdName: "Face Wash: Invigorating",
    price: "$4.99",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaWarmingBodyBalmCartonJarwithherb_1024x.png?v=1624547923",
    ProdName: "Warming Body Palm ",
    price: "$4.99",
  },
];

items.forEach(function (elem) {
  console.log(elem);

  let box = document.createElement("div");

  let img = document.createElement("img");
  img.setAttribute("src", elem.img_url);

  let prodName1 = document.createElement("p");
  let prodName2 = document.createElement("p");

  let nameArr = elem.ProdName.split(":");
  let name1 = nameArr[0];
  //   let name2 = nameArr[1] && nameArr[1];
  prodName1.innerText = name1;
  //   prodName1.innerText = name2;
  console.log(nameArr);
  let Price = document.createElement("p");
  Price.innerText = elem.price;

  let buttoncart = document.createElement("button");
  buttoncart.innerText = "Add to Cart";

  box.append(img, prodName1, Price, buttoncart);

  document.querySelector("#container").append(box);
});
