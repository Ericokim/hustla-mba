import React from "react";
//import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import logo from "../../../assets/Logo/logo-place.png";
import { Divider } from "semantic-ui-react";

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return (
    <Aux>
      {/* Backdrop hides the background */}
      <Backdrop show={props.open} clicked={props.closed} />

      {/* Showing logo at the sideDrawer */}

      <div className={attachedClasses.join(" ")}>
        <div className="toolbar-logo">
          <a href="/home">
            <img src={logo} className="logoImage" alt="shujaaz" />
          </a>
        </div>
        {/* <Divider className="divider" /> */}
        {/* <nav>
          <NavigationItems className="navitems"/>
        </nav> */}
      </div>
    </Aux>
  );
};

export default sideDrawer;
