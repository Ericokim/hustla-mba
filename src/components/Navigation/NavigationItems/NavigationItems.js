import React, { Component } from "react";
import { IoIosContact, IoMdNotifications, IoIosBook } from "react-icons/io";

import { TiArrowSortedDown } from "react-icons/ti";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";


class navigationItems extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }
  render() {
    return (
      <ul className="NavigationItems">
        <NavigationItem link="/">
          <IoIosBook className="book" alt="library" />
        </NavigationItem>
        <NavigationItem link="/">
          <IoMdNotifications className="notify" alt="notifications" />
        </NavigationItem>
        <NavigationItem>
          <div className="iconwrapper" onClick={this.showMenu}>
            <IoIosContact className="contact" />
            <TiArrowSortedDown className="arrow" />
          </div>

          {this.state.showMenu ? (
            <div
              className="menu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <ul className="menuitem">
                <li className="item">
                  <i class="user icon" /> Account
                </li>
                <li className="item">
                  <i class="settings icon" link="/" /> Settings
                </li>
                <li className="item">
                  <i class="sign out icon" link="/" /> Sign Out
                </li>
              </ul>
            </div>
          ) : null}
        </NavigationItem>
      </ul>
    );
  }
}

export default navigationItems;
