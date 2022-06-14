import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  var gk = [];
  var c = "";
  const [about, setabout] = useState([]);
  const { Pid } = useParams();
  async function fetchproductsdetails(id) {
    await fetch(`http://fakestoreapi.com/products/${id}`)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        const prd = JSON.parse(data);
        setabout(prd);
        console.log(prd);
        localStorage.setItem("id", prd.id);
        c = localStorage.getItem("id");
        gk = JSON.parse(localStorage.getItem("cart"));
        var v = localStorage.getItem("cart");
        for(let i in v)
        {
          if(v[i]==c)
          {document.getElementById("ATC").value="ADDED"}
        }  
      });
  }

  function BuyProduct() {
    navigate("/details");
  }
  function AddCart(){
    if(localStorage.getItem("cart")==null){
      localStorage.setItem("cart","[]")
    }
    
    if(document.getElementById("ATC").value!="ADDED"){
      c=localStorage.getItem("id");
       gk=JSON.parse(localStorage.getItem("cart"))
      gk.push(c)
    console.log(c)
    localStorage.setItem("cart",JSON.stringify(gk))
    document.getElementById("ATC").value="ADDED";
    // this.value='ADDED';
    }
  }
  useEffect(() => {
    fetchproductsdetails(Pid);
  }, []);
  return (
    <div>
      <br />
      <div className="ui grid container">
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={about.image} />
              </div>
              <div className="column rp">
                <h1>{about.title}</h1>
                <h2>
                  <a className="ui teal tag label">${about.price}</a>
                </h2>
                <h3 className="ui brown block header">{about.category}</h3>
                <p>{about.description}</p>
                {/* <div className="ui vertical animated button" tabIndex="0"> */}
                <div className="hidden content"></div>
                <br />
                <input type="submit" className="visible content" id="ATC" value="Add To Cart" onClick={AddCart}>
                   
                </input>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  type="submit"
                  className="visible content"
                  id="BN"
                  onClick={BuyProduct}
                >
                  Buy Now <i className="angle right icon"></i>
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
