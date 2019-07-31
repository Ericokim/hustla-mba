import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { SlideItem } from "../../containers/Slide/SlideItem";
import { getSliderImages } from "../../actions/Imagebuilder";
import CardList from "../Cardlist/CardList";
import "./Slider.css";

export class SimpleSlider extends Component {
  componentDidMount() {
    this.props.getSliderImages();
  }

  renderSlides = () => {
    const { imagelist } = this.props;
    return imagelist
      .filter(image => image)
      .map(image => <SlideItem key={image} {...image} />);
  };

  render() {
    const settings = {
      dots: true,
      arrows: false,
      className: "center",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #000000; color: #bada55`
        );
      }
    };
    return (
      <div className="img-slides">
        <Slider {...settings}>{this.renderSlides()}</Slider>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  imagelist: state.items.items,
  
});

export default connect(
  mapStateToProps,
  { getSliderImages }
)(SimpleSlider);
