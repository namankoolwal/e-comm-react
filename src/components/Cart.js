import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [cart, setcart]= useState([]);
   
    var t=0;
    var n=[];
    var f="";
   

    var n=JSON.parse(localStorage.getItem("cart"));
     async function fetchcartdetails(){
    for(let i=0;i<=n.length;i++){
       
      await  fetch("http://fakestoreapi.com/products/" + n[i])
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      const prd = JSON.parse(data);
        setcart(prd);
      console.log(prd);
      f=prd.id;
    // console.log(f);
    // document.getElementById("demo").innerHTML +=
    // "<div class='dt1'><table id='tbl1'><th>" +
    // cart.category +
    // "<br><br><tr><td><img width=200px height=200px src=" +
    // cart.image +
    // ">" +
    // "<table id='tbl2'><td>PRICE: " +
    // cart.price +
    // "<tr><td>IN STOCK: " +
    // cart.price + " pcs"+
    // "<button id='btn1' onclick='rmv(f);'> Remove</button>" 
});
}
 
}
useEffect(()=>{
    fetchcartdetails();
},[]);
  
  return (
    <div>
    { <table id='tbl1'><th>{cart.category}</th><tr><td><img width={"200px"} height={"200px"}  src={cart.image} alt={cart.title} /></td></tr><table id='tbl2'><td>PRICE: ${cart.price}</td><tr><td>RATING: {cart.rate}</td></tr></table></table>}
     {/* {cart.category} */}

    </div>
  )
}

export default Cart