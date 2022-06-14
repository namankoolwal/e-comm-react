import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Product.css';

const Product = () => {
  const [products, setProducts]=useState([]);
  async function fetchproducts() {
    await fetch("http://fakestoreapi.com/products/")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        const prd = JSON.parse(data);
        setProducts(prd);
       
        for (let i in prd) {
          console.log(prd[i].title);
        }
      });
  }
  useEffect(()=>{
      fetchproducts();
  },[]);
  return (
    
   
     <div>
     <div>
     <img id='photos' src='shopping.jpg' height={"60px"} width={"60px"} alt="shop" />
     </div>
  <div id="demo" >
      { products.map(task=>(<Link to={`/about/${task.id}`} key={task.id}> <table id='tbl1'><th>{task.category}</th><tr><td><img width={"200px"} height={"200px"}  src={task.image} alt="hii" /></td></tr><table id='tbl2'><td>PRICE: ${task.price}</td><tr><td>RATING: {task.rating.rate}</td></tr></table></table></Link>))}
  </div>
   {/* <div id="demo" >
      { products.map(task=>(<Link to={`/about/${task.id}`} key={task.id}> <div className='table1'><div className="th1">{task.category}</div><div><div><img width={"200px"} height={"200px"}  src={task.image} alt="hii" /></div></div><div className="table1" id="table2" ><div>PRICE: ${task.price}</div><div>RATING: {task.rating.rate}</div></div></div></Link>))}
  </div> */}
   </div>
  
  )
}
export default Product;
