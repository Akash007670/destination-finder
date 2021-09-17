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
              src={process.env.PUBLIC_URL + "/images/img-9.jpg"}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-7.jpg"}
              text="Explore the Hill station and amazing skiing view"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-1.jpg"}
              text="Explore the amazing sunrise at himalayas"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-2.jpg"}
              text="Explore the Explore the amazing view of bali"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-8.jpg"}
              text="Explore the amazing sahara desert in india"
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
