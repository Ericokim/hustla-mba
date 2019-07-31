import React from "react";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import logo from "../../../assets/Logo/logo-place.png";

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="toolbar-logo">
      <a href="/home">
        <img src={logo} className="logoImage" alt="shujaaz" />
      </a>
    </div>
    {/* <Input icon="search" iconPosition="right" placeholder='Unataka Ku-learn nini leo?' className="search" /> */}
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
