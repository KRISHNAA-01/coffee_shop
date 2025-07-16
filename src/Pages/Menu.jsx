import React, { useEffect, useState } from "react";
import "./Menu.css";
import Header from "../Components/Header";
export const Menu = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("https://api.sampleapis.com/coffee/hot");
      const json = await res.json();

      // console.log(JSON.stringify(json,null,5));
      setData(json);
      // setData(JSON.stringify(json,null,5));
      // {JSON.stringify(data,null,2)}
    } catch (error) {
      console.log(error);
      setData(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <Header/>
    <div className="ccontainer">
        <br /><br /><br /><br /><br />
      <center><h2 style={{color:'white', fontSize:'40px'}}>Menu</h2></center>
      <br />
      <br />

      <div className="main_div">

      {data.map((item) => (
          <div className="card1" key={item.id}>
          <center><h4>{item.title}</h4></center>
          <div className="card2">
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
                <div id='ing'>

              <h5>Ingredients:</h5>
              <ul>
                {item.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                ))}
              </ul>
                </div>
            </div>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
      </div>
    </div>
            </>
  );
};
