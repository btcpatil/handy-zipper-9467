//var InfoStore=JSON.parse(localStorage.getItem("userHimalaya")||[])
//console.log(InfoStore);
// let userLoginData={
//     uname:uname,
//     ulastName:ulastName,
//     uMail:uMail,
//     uPass:uPass,
//     uAddress:uAddress,
//     uCity:uCity,
//     uCountry: uCountry,
//     uState:uState,
//     uZip:uZip,
//     uPhon:uPhon,
//  }
// window.onload=function(){
//     var form=document.getElementById("form")

// var emailInp=document.querySelector(".emailInp")
// emailInp.value=InfoStore[InfoStore.length-1].uMail

// var nameInp=document.querySelector(".nameInp")
// nameInp.value=InfoStore[InfoStore.length-1].uname

// var lastInp=document.querySelector(".lastInp")
// lastInp.value=InfoStore[InfoStore.length-1].ulastName

// }

function verify(e) {
    e.preventDefault();
    var form = document.getElementById("form");
    var address = document.getElementById("addressInp").value;
    var appartment = document.querySelector(".appartment").value;
    var city = document.querySelector(".city").value;
    var Country = document.querySelector(".Country").value;
    var State = document.querySelector(".State").value;
    var Zip = document.querySelector(".Zip").value;
    var phon = document.querySelector(".phon").value;
    var continueToShip = document.querySelector(".continueToShip");
  
    var addressArr = JSON.parse(localStorage.getItem("UserAddress"));
    let userAddress = {
      uAddress: address,
      uapparment: appartment,
      uCity: city,
      uCountry: Country,
      uState: State,
      uZip: Zip,
      uPhon: phon,
    };
    if (
      address == "" ||
      appartment == "" ||
      city == "" ||
      State == "" ||
      Zip == "" ||
      phon == ""
    ) {
      alert("Field can not empty");
      // console.log(address);
      // console.log(appartment);
      // console.log(city);
      // console.log(State);
      // console.log(Zip);
      // console.log(phon);
    } else if (phon.length != 10) {
      alert("Phone no. should be 10 digit only");
    } else {
      addressArr.push(userAddress);
      localStorage.setItem("UserAddress", JSON.stringify(addressArr));
      window.location.href = "Shipping.html";
    }
  }
  
  if (localStorage.getItem("UserAddress") === null) {
    localStorage.setItem("UserAddress", JSON.stringify([]));
  }
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
  // subtotal.innerHTML = "$" + sum.toFixed(2);
  // totalSum.innerHTML = "$" + sum.toFixed(2);
  
  // var coupn = document.getElementById("coupn");
  // var coupnBt = document.querySelector(".coupnBt");
  // coupnBt.onclick = function () {
  //   if (coupn.value === "FIRSTUSER50") {
  //     totalSum.innerHTML = "$" + ((sum * 50) / 100).toFixed(2);
  //   } else {
  //     alert("Invalid Coupon Code .Try FIRSTUSER50");
  //   }
  // };


  let prd_data = JSON.parse(localStorage.getItem("cart"));

  document.getElementById("prd_qunt").innerText= `x ${prd_data.count}`;

  document.getElementById("total_price").innerText= `$ ${prd_data.count*29.95}`;
  

  document.querySelector(".subTotalSum").innerText = `$ ${prd_data.count*29.95+5}`;

  document.querySelector("#usd").innerText = `$ ${prd_data.count*29.95+5}`;
  
  
  