import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards">
      <h1>Check out these amazing destinations.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./assets/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
