import React from "react";

const Resume = () => {
  return (
    <div className="md:mb-[88px] w-screen m-auto">
      <div className="md:h-[710] flex flex-col md:flex-row">
        <div className="md:w-2/3 flex flex-col">
          <div className=" flex flex-col-reverse md:flex-col">
            <h2 className="text-5xl font-bold md:ms-[49px] mt-[16px]">
              Unlock Interviews with a Standout Resume
            </h2>
            <div className="divider w-[147px] mx-auto mt-[35px] font-bold"></div>
          </div>
          <div className="ms-[60px] md:mt-[60px]">
            <h2 className="text-3xl font-bold mb-[36px]">
              Why a <span className="text-[#0FA958]">Great Resume Matters</span>
              :
            </h2>
            <ul className="text-2xl list-disc">
              <li className="mb-[24px]">
                <span className="font-bold">
                  Makes a Strong First Impression:
                </span>{" "}
                Captures attention and showcases your potential.
              </li>
              <li className="mb-[24px]">
                <span className="font-bold">ATS-Friendly:</span> Designed to get
                past automated filters and into human hands.
              </li>
              <li className="mb-[24px]">
                <span className="font-bold">Highlights Your Skills:</span>{" "}
                Clearly presents your experiences and abilities.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[460px] h-[702px] bg-[#213360] md:me-[60px] flex flex-col text-white font-bold rounded-b-lg m-auto">
          <h3 className="text-2xl text-center mt-[15px]">
            Fill In Your Details
          </h3>
          <div className="mx-auto mt-[30px] mb-[55px]">
            <p className="text-xl">NAME</p>
            <input
              type="text"
              className=" rounded-sm h-[47px] w-[368px] p-1 mt-[10px]"
            />
          </div>
          <div className="mx-auto mt-[30px] mb-[55px]">
            <p className="text-xl">EMAIL</p>
            <input
              type="text"
              className=" rounded-sm h-[47px] w-[368px] p-1 mt-[10px]"
            />
          </div>
          <div className="mx-auto mt-[30px] mb-[40px]">
            <p className="text-xl">WHATSAPP NUMBER</p>
            <input
              type="text"
              className=" rounded-sm h-[47px] w-[368px] p-1 mt-[10px]"
            />
          </div>
          <button className="mt-[40px] mb-[15px] w-[222px] h-[45px] rounded-md bg-[#0FA958] text-white font-bold m-auto">
            CLAIM NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
