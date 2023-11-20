import React from "react";
import connect from "../assets/connect.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

const Contact = () => {
  return (
    <div className="w-screen bg-gradient-to-r from-[#09324F] to-[#82D3F5] h-[200px] m-auto">
      <div className="w-screen flex justify-center gap-6 pt-[80px] ">
        <img className="h-[15px]  md:h-[40px]" src={connect} alt="" />
        <img className="h-[15px]  md:h-[40px]" src={youtube} alt="" />
        <img className="h-[15px] md:h-[40px]" src={linkedin} alt="" />
      </div>
    </div>
  );
};

export default Contact;
