import React from "react";

const Success = () => {
  return (
    <div className="h-[830px] w-screen md:w-[1444px] flex justify-center flex-col m-auto">
      <h1 className=" text-5xl text-[#253255] mb-[52px] text-center">
        SUCCESS STORIES
      </h1>
      <div className="carousel carousel-end rounded-box flex flex-row justify-center gap-20">
        <div className="carousel-item flex flex-col">
          <img
            className="h-[510px] w-[365px] bg-slate-200"
            src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="review 1"
          />
          <h2 className="text-5xl text-center mb-3 mt-[25px] font-bold">College Name</h2>
        </div>
        <div className="carousel-item flex flex-col">
          <img
            className="h-[510px] w-[365px] bg-slate-200"
            src="/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="review 2"
          />
          <h2 className="text-5xl text-center mb-3 mt-[25px] font-bold">College Name</h2>
        </div>
        <div className="carousel-item flex flex-col">
          <img
            className="h-[510px] w-[365px] bg-slate-200"
            src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="review 3"
          />
          <h2 className="text-5xl text-center mb-3 mt-[25px] font-bold">College Name</h2>
        </div>
      </div>
    </div>
  );
};

export default Success;
