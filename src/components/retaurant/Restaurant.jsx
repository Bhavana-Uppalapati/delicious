import React from "react";
import "./Restaurant.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Restaurant() {
  
  let [filtereddata, setfiltereddata] = useState(null);
  let [data, setData] = useState([]);
  let result1;
  const result = async () => {
    let response = await fetch("https://food-1-rcun.onrender.com/vijayawada", {
      method: "GET",
    });
    result1 = await response.json();
    setData(result1);
    setfiltereddata(result1)
  };
   useEffect(() => {
    result();
  }, []);
  function All(){
    filtereddata = data.filter((data)=>{
         return true;
         
    })
    setfiltereddata(filtereddata);
  }

  function rating() {
     filtereddata = data.filter((data) => {
      return data.rating > 4;
    });
    setfiltereddata(filtereddata);
  }
  function veg() {
     filtereddata = data.filter((data) => {
      return data.veg == true;
    });
    setfiltereddata(filtereddata);
  }

  // if(filtereddata===null){
  //   setfiltereddata(data)
  // }
  

  return (
    <>
      <div className="d-flex justify-content-center mt-5 pt-5">
        <button
          style={{
            background: "transparent",
            borderRadius: "10px",
            width: "130px",
          }}
          onClick={All}
        >
          All
        </button>
        <button
          onClick={rating}
          className=""
          style={{
            background: "transparent",
            borderRadius: "10px",
            width: "130px",
          }}
        >
          Top rated
        </button>
        <button
          onClick={veg}
          className=" ms-3"
          style={{
            background: "transparent",
            borderRadius: "10px",
            width: "130px",
          }}
        >
          veg
        </button>
      </div>
      <div className="res container col-lg-12 justify-content-between mt-5">
        {filtereddata? (
          filtereddata.map((userdata) => {
            return (
              <Link to={"/restaurant/" + userdata.id}>
                <div class="card mt-4" style={{ width: "18rem" }}>
                  <img
                    src={userdata.image}
                    style={{ width: "100%", height: "150px" }}
                    className="card-img-top resto"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{userdata.name}</h5>
                 <p className="fs-5"><i class="fa-solid fa-star" style={{fontSize:"22px",color:"green"}}></i>{userdata.rating}</p>
                 <p class="card-text fs-5">{userdata.cuisine}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p> loading</p>
        )}

      </div>
    </>
  );
}
