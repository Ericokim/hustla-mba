import React from "react";

import CardItem from "./CardItem";

import "./CardList.css";

export const CardList = ({List}) => {
  return (
    <ul className="item-list">
      {/* {List.map(card => (
      <li key={card.id}>
        <CardItem card={card} />
      </li> */}
   
    </ul>
  );
};

export default CardList;
