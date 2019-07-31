import React, { Component } from "react";

export class SearchBar extends Component {
  constructor() {
    super();
    this.autoSearchDelay = 400;
    this.state = {
      value: ""
    };
  }

  updateSearchValue(e) {
    clearTimeout(this.autoSearchTimer);

    let value = e.target.value;
    this.setState({ value });

    if (value.length === 0) {
      return;
    }

    this.autoSearchTimer = setTimeout(
      this.filter.bind(this),
      this.autoSearchDelay
    );
  }

  filter(e) {
    if (e) {
      e.preventDefault();
    }

    clearTimeout(this.autoSearchTimer);
    this.props.handleSearchRequest(this.state.value);
  }

  renderSpinner() {
    if (this.props.isRequestingPhotos) {
      return <i className="loading-icon fa fa-spinner fa-spin fa-fw" />;
    }
  }

  render() {
    let isSearchDisabled = this.state.value.length === 0;

    return (
      <form className="search-bar" onSubmit={this.filter.bind(this)}>
        {this.renderSpinner()}
        <input
          className="search-bar__input"
          placeholder="Insert your keywords here!"
          value={this.state.value}
          onChange={this.updateSearchValue.bind(this)}
        />
        <button className="search-bar__button" disabled={isSearchDisabled}>
          <i className="fa fa-search" />
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
