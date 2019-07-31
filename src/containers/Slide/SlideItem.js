import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SlideItem.css";

// export const SlideItem = ({  name, image_url, id,tagline }) => (
//   <Link className="link image-card" to={`/${id}`}>
//   <div> <img className="images" src={image_url} alt={`${name}`} /></div>

//     {/* <div className="image-details">

//       <h1 className="image-heading">{name}</h1>
//       <h3 className="image-tagline">{tagline}</h3>
//     </div> */}
//   </Link>
// );

// SlideItem.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     image_url: PropTypes.string.isRequired
//   }).isRequired
// };

export const SlideItem = ({ image_url, id, name }) => {
  const styles = {
    width: "100%",
    height: 500,
    objectFit: "scale-down",
    objectPosition: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
    
  };
  return (
    <Link className="slide" to={`/${id}`}>
      <img className="slide2" style={styles} src={image_url} alt={`${name}`} />
    </Link>
  );
};

export default SlideItem;
