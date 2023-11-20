import React from "react";
import team from "../assets/team.png";

const Team = () => {
  return (
    <div className="bg-[#02243F] pt-[56px] w-screen m-auto">
      <div className="divider">
        <h2 className="text-white text-5xl font-bold text-center">
          Meet The Team
        </h2>
      </div>
      <img src={team} alt="" className="m-auto" />
    </div>
  );
};

export default Team;
