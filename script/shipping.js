// prodcuts



var prodArr = JSON.parse(localStorage.getItem("HimalayaUsStorage")) || [];
var parent = document.querySelector(".Imagenameprice");
function showProducts() {
  prodArr.forEach((element) => {
    var maindiv = document.createElement("div");
    maindiv.setAttribute("class", "maindiv");
    var pdiv = document.createElement("div");
    pdiv.setAttribute("class", "pdiv");
    var price = document.createElement("p");
    price.setAttribute("class", "pPrice");
    var name = document.createElement("p");
    var pQt = document.createElement("p");
    pQt.setAttribute("class", "pqt");
    var Pimg = document.createElement("img");
    Pimg.setAttribute("class", "Pimg");

    Pimg.src = element.Image;
    price.innerHTML = "$" + element.Price + " x " + element.quant;
    name.innerHTML = element.Name;
    // pQt.innerHTML=element.quant
    pdiv.append(Pimg, name);
    maindiv.append(pdiv, price);
    parent.append(maindiv);
  });
}
// showProducts();
// var sum = 0;
// var subtotal = document.querySelector(".subTotalSum");
// var totalSum = document.querySelector(".totalSum");
// for (var i = 0; i < prodArr.length; i++) {
//   sum += Number(prodArr[i].Price) * Number(prodArr[i].quant);
// }
// subtotal.innerHTML = " $" + sum.toFixed(2);
// totalSum.innerHTML = " $" + sum.toFixed(2);

// var coupn = document.getElementById("coupn");
// var coupnBt = document.querySelector(".coupnBt");
// coupnBt.onclick = function () {
//   if (coupn.value === "FIRSTUSER50") {
//     totalSum.innerHTML = "$" + ((sum * 50) / 100).toFixed(2);
//   } else {
//     alert("Invalid Coupon Code .Try FIRSTUSER50");
//   }
// };

var info = JSON.parse(localStorage.getItem("UserAddress"));
var addressInfo = document.querySelector(".addressInfo");
var contactInfo = document.querySelector(".contactInfo");
contactInfo.innerHTML = info[info.length - 1].uPhon;
addressInfo.innerHTML =
  info[info.length - 1].uAddress +
  "," +
  info[info.length - 1].uapparment +
  "," +
  info[info.length - 1].uCity +
  "," +
  info[info.length - 1].uCity +
  "-" +
  info[info.length - 1].uZip +
  "," +
  info[info.length - 1].uState +
  "," +
  info[info.length - 1].uCountry;

var clickToChange = document.getElementsByClassName("clickToChange");
var arr = Array.from(clickToChange);
arr.forEach((el) => {
  el.onclick = function () {
    window.location.href = "shivaji.html";
  };
});



var goToInfo = document.querySelectorAll(".goToInfo");
goToInfo.forEach((el) => {
  el.onclick = function () {
    window.location.href = "shivaji.html";
  };
});

var shippingMethodDiv = document.querySelector(".shippingMethodDiv");
var continueToShip = document.querySelector(".continueToShip");
var bottomdivInfo = document.querySelector(".bottomdivInfo");
var paymentDiv = document.querySelector(".paymentDiv");
var bottomline = document.querySelector(".bottomline");
var paymentSpanNav = document.querySelector(".paymentSpanNav");
var shippingSpanNav = document.querySelector(".shippingSpanNav");
var divup = document.querySelector(".divup");
continueToShip.onclick = function () {
  shippingMethodDiv.style.display = "none";
  bottomdivInfo.style.display = "none";
  paymentDiv.style.display = "block";
  bottomline.style.marginTop = "104%";
  paymentSpanNav.style.fontWeight = "bold";
  shippingSpanNav.style.fontWeight = "normal";
  divup.style.borderTopRightRadius = "5px";
  divup.style.borderTopLeftRadius = "5px";
};

let prd_data = JSON.parse(localStorage.getItem("cart"));

  document.getElementById("prd_qunt").innerText= `x ${prd_data.count}`;

  document.getElementById("total_price").innerText= `$ ${prd_data.count*29.95}`;
  

  document.querySelector(".subTotalSum").innerText = `$ ${prd_data.count*29.95+5}`;

  document.querySelector("#usd").innerText = `$ ${prd_data.count*29.95+5}`;




// payment--------------------------------------------------------------------------------------------------------

var retToinfo = document.querySelector(".retToinfo");
retToinfo.onclick = function () {
  window.location.href = "shivaji.html";
};

var payNow = document.getElementById("payNow");
payNow.onclick = function () {
  // alert("Thankyou for shopping with us")
};

function pay(event) {
  event.preventDefault();

  var creditCardNumber = document.querySelector(".creditCardNumber").value;
  var nameOnCard = document.querySelector(".nameOnCard").value;
  var expdate = document.querySelector(".expdate").value;
  var cvv = document.querySelector(".cvv").value;

  if (
    creditCardNumber == "" ||
    nameOnCard == "" ||
    expdate == "" ||
    cvv == ""
  ) {
    alert("All fields are compulsory");
  } else if (creditCardNumber.length != 16) {
    alert("Invalid Card Number");
  } else if (expdate.length != 5) {
    alert("Invalid Expiry Date");
  } else if (cvv.length != 3) {
    alert("Invalid CVV");
  } else if (
    creditCardNumber.length === 16 &&
    nameOnCard.length > 3 &&
    expdate.length == 5 &&
    cvv.length == 3
  ) {
    window.location.href = "thx.html";
  }
}

var clickOnAmazonPAy = document.querySelector(".clickOnAmazonPAy");
clickOnAmazonPAy.onclick = function () {
  clickOnAmazonPAy.checked = false;
  alert(
    "Sorry ! This payment method is currently not Available.Try payment using Credit card Option"
  );
};