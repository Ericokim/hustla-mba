import React from "react";
import PropTypes from "prop-types";
import { SlideItem } from "./SlideItem";
import "./SlideList.css";

export const SlideList = ({ imagelist }) => (
  <ul className="slider">
    {imagelist
      .filter(image => image)
      .map(image => (
        <li>
          <SlideItem key={image} {...image} />
        </li>
      ))}
  </ul>
);

SlideList.propTypes = {
  imagelist: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired
    })
  ).isRequired
};
