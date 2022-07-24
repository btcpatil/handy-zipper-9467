
 async function getCity() {
    let city = document.getElementById("city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec0d9f8279e9b6346e85fbc55a8a0700`;
    let x = await fetch(url);
    let data = await x.json();
    if (city != "") {
        appendRight(data);
    }
}

function defaultMap(){
    console.log("defaultMap");
    let defaultMap ="https://maps.google.com/maps?q=2880%20Broadway,%20chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
    let iframe = document.getElementById("gmap_canvas");
    iframe.src = defaultMap;

}

function appendRight(mapData) {
    let mapUrl = `https://maps.google.com/maps?q=${mapData.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    let iframe = document.getElementById("gmap_canvas");
    iframe.src = mapUrl;
}


let check_Cartprd=()=>{
    let data = JSON.parse(localStorage.getItem("cart"));
    if(data){
        window.location.href = "../shopping_cart/cart.html";
    }else{
        window.location.href = "../shopping_cart/empty_cart.html";
    }
}

