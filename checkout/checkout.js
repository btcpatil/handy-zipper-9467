let form=document.querySelector("form")


form.addEventListener("submit",storedata)



function Object(email,contry,first_name,last_name,address,Apartment,city,cont, number)
{

    this.email=email
    this.contry=contry
    this.first_name=first_name
    this.last_name=last_name
    this.address=address
    this.Apartment=Apartment
    this.city=city
    this.cont=cont
    // this.half=half
    this.number=number
   

}

function storedata()

{
    event.preventDefault()
   let user=new Object(form.email.value,form.contry.value,form.first_name.value,form.last_name.value,form.address.value,form.Apartment.value,form.city.value,form.cont.value)


   console.log(user)

   localStorage.setItem("user",JSON.stringify(user))

   
  
   form.email.value=null
   form.contry.value=null
   form.first_name.value=null
   form.last_name.value=null
   form.address.value=null
   form.city.value=null
   form.cont.value=null
   form.Apartment.value=null
   


}