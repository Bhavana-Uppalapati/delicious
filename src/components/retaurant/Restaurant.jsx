import React, { useContext } from "react";
import "./Restaurant.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/Context";

export default function Restaurant() {
  let {data, setData,filtereddata, setfiltereddata}=useContext(context)
  // let [filtereddata, setfiltereddata] = useState(null);
  // let [data, setData] = useState([]);
  let [searchdata, setSearch] = useState("");
  let result1;
  const result = async () => {
    let response = await fetch("https://food-1-rcun.onrender.com/vijayawada", {
      method: "GET",
    });
    result1 = await response.json();
    setData(result1);
    setfiltereddata(result1);
  };
  useEffect(() => {
    result();
  }, []);

  function ressearch(){
    let search = data.filter((obj)=>{
     return  obj.name.toLowerCase().includes(searchdata.toLowerCase())
   });
   setfiltereddata(search)
  }
 


  // useEffect(() => {
  //   // Apply search filter whenever searchdata changes
  //   const searchResults = data.filter((obj) =>
  //     obj.name.toLowerCase().includes(searchdata.toLowerCase())
  //   );
  //   setfiltereddata(searchResults);
  // }, [searchdata, data]);

  function All() {
    filtereddata = data.filter((data) => {
      return true;
    });
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
  
  return (
    <>
      <div className="d-flex justify-content-evenly mt-5 pt-5">
      
        <button
        className="mb-2"
          style={{
            background: "transparent",
            borderRadius: "10px",
            // width: "130px",
          }}
          onClick={All}
        >
          All
        </button>
        <button
        className="mb-2"
          onClick={rating}
         
          style={{
            background: "transparent",
            borderRadius: "10px",
            // width: "130px",
          }}
        >
          Top rated
        </button>
        <button
        className="mb-2"
          onClick={veg}
          style={{
            background: "transparent",
            borderRadius: "10px",
            // width: "130px",
          }}
        >
          veg
        </button>
        <input
          type="text"
          value={searchdata}
          onChange={(e) => {
            setSearch(e.target.value);
            ressearch();
          }}
          placeholder="search"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div className="res container col-lg-12  mt-5">
        {filtereddata ? (
          filtereddata.map((userdata) => {
            return (
              <Link to={"/restaurant/" + userdata.id }> 
                <div className="card mt-4" style={{ width: "18rem" }} key={userdata.id}>
                  <img
                    src={userdata.image}
                    style={{ width: "100%", height: "150px" }}
                    className="card-img-top resto"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{userdata.name}</h5>
                    <p className="fs-5">
                      <i
                        className="fa-solid fa-star"
                        style={{ fontSize: "22px", color: "green" }}
                      ></i>
                      {userdata.rating}
                    </p>
                    <p className="card-text fs-5">{userdata.cuisine}</p>
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
