import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { getSliderImages } from "../../actions/Imagebuilder";
// import { Loader } from "../../ui-kit";

// import { Portal } from "../../utils/portal";
import { CardList } from "../../containers/Cardlist/CardList";
// import { BeerDetails } from "../BeerDetails";

import Slider from "../../containers/Slider/Slider";

import "./Home.css";

class HomeSite extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     page: 1
  //   };
  // }
  componentDidMount() {
    this.props.getSliderImages();
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.onScroll, false);
  // }

  render() {
    const {
      card,
      isErrorBeers,
      isLoadingBeers,
      beer,
      beerSimilars,
      isErrorBeer,
      isLoadingBeer,
      match,
      history
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>{"HUSTLAMBA"}</title>
        </Helmet>
        {/* {match.params.id && (
          <Portal history={history}>
            <BeerDetails
              getBeerById={this.props.getBeerById}
              beerIdParam={match.params.id}
              history={history}
              beerData={{
                beer,
                beerSimilars,
                isError: isErrorBeer,
                isLoading: isLoadingBeer
              }}
            />
          </Portal>
        )} */}
        <Slider />
        <CardList card={card} />
        {/* {isLoadingBeers && <Loader />}
        {isErrorBeers && (
          <button className="btn-more" onClick={this.loadMore}>
            Ooops! Try again
          </button>
        )} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  List: state.items.items,
  
});

export default connect(
  mapStateToProps,
  { getSliderImages }
)(HomeSite);
