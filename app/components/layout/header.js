import React from "react";
import Nav1 from "./navbars/nav1";
import Nav2 from "./navbars/nav2";
import MobileMenu from "./navbars/mobilenav";

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <Nav1 />
        <Nav2 />
      </div>
      <div className="block md:hidden">
        <MobileMenu/>
      </div>
    </>
  );
};

export default Header;