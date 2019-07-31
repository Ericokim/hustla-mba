import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";

export const Card = ({ card }) => (
  <Link className="link item-card" to={`/${card.id}`}>
    <img className="img-item" src={card.image_url} alt={`${card.name}'s bottle`} />
    <div className="item-details">
      <h1 className="item-heading">{card.name}</h1>
      <p className="item-tagline">{card.tagline}</p>
    </div>
  </Link>
);

export default Card;
