import React from "react";
import Nav1 from "./navbars/nav1";
import Nav2 from "./navbars/nav2";
import Nav3 from "./navbars/nav3";
import MobileMenu from "./navbars/mobilenav";

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <Nav1 />
        <Nav2 />
        <Nav3 />
      </div>
      <div className="block md:hidden">
        <MobileMenu/>
      </div>
    </>
  );
};

export default Header;