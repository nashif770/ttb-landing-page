import React from "react";
import logo from "./../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-[#02243F] md:w-[1440px] h-[112px] w-screen m-auto">
      <div className="flex justify-start">
        <img
          src={logo}
          alt=""
          className="mt-6 ms-10"
        />
      </div>
    </div>
  );
};

export default Header;
