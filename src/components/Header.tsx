import React, { FC } from "react";
import HeaderImage1 from "./../images/Header_1.png";
import HeaderImage2 from "./../images/Header_2.png";





const Header: FC = () => {
  return (
    <div className="flex items-center">
      <img src={HeaderImage1} />
    </div>
  );
};

export default Header;
