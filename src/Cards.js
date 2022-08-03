import React from "react";
import "./Cards.css";

export default function Card(props) {
  return (
    <>
      <div className="main-container">
        <center>
          <img className="img" src={props.value.image}></img>
        </center>
        <p>
          <span>{props.value.id}</span>
        </p>
        <p>
          <span>{props.value.title}</span>
        </p>
        <p>
          <span>{props.value.price}</span>
        </p>
        <p>
          <span>{props.value.description}</span>
        </p>
        <p>
          <span>{props.value.category}</span>
        </p>
        <div>
          <button
            className="btn-cart"
            onClick={(e) => {
              console.log("Button working");
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
