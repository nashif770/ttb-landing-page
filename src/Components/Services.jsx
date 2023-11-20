import React from "react";
import vector from "../assets/serviceLine.png";
import service1 from "./../assets/services/srv1.png";
import service2 from "./../assets/services/srv2.png";
import service3 from "./../assets/services/srv3.png";
import service4 from "./../assets/services/srv4.png";
import service5 from "./../assets/services/srv5.png";
import service6 from "./../assets/services/srv6.png";
import service7 from "./../assets/services/srv7.png";

const Services = () => {
  return (
    <div>
      <h2 className="text-3xl text-center md:text-left mb-[20px] font-bold md:ms-[36px]">
        Our <span className="text-[#0FA958]">Canada-Specific</span> Resume
        Writing <span className="text-[#0FA958]">Service</span>
      </h2>
      <div className="flex flex-col md:flex-row w-[1301px] m-auto gap-12">
        <div className="md:w-[540px] m-auto">
          <div className="m-auto">
            <h4 className="text-3xl font-bold">1. ATS-Optimized:</h4>
            <p className="text-3xl w-[590px] h-[133px]">
              Our resumes are designed to pass through ATS filters, increasing
              your chances of landing an interview.
            </p>
            <img src={service1} alt="" className="h-[284px] m-auto" />
          </div>
          <div className="m-auto">
            <h4 className="text-3xl font-bold">2. ATS-Optimized:</h4>
            <p className="text-3xl w-[590px] h-[133px]">
              Our resumes are designed to pass through ATS filters, increasing
              your chances of landing an interview.
            </p>
            <img src={service2} alt="" className="h-[284px] m-auto" />
          </div>
          <div className="m-auto">
            <h4 className="text-3xl font-bold">3. ATS-Optimized:</h4>
            <p className="text-3xl w-[590px] h-[133px]">
              Our resumes are designed to pass through ATS filters, increasing
              your chances of landing an interview.
            </p>
            <img src={service3} className="h-[284px] m-auto" />
          </div>
        </div>
        <div>
          <img
            src={vector}
            alt=""
            className="h-[1380px] hidden md:inline-flex"
          />
        </div>
        <div className="md:w-[540px] m-auto">
          <div className="m-auto">
            <h4 className="text-3xl font-bold">4. ATS-Optimized:</h4>
            <p className="text-3xl w-[590px] h-[133px]">
              Our resumes are designed to pass through ATS filters, increasing
              your chances of landing an interview.
            </p>
            <img src={service4} className="h-[284px] m-auto" />
          </div>
          <div className="m-auto">
            <h4 className="text-3xl font-bold">5. ATS-Optimized:</h4>
            <p className="text-3xl w-[590px] h-[133px]">
              Our resumes are designed to pass through ATS filters, increasing
              your chances of landing an interview.
            </p>
            <img src={service5} className="h-[284px] m-auto" />
          </div>
          <div className="m-auto">
            <h4 className="text-3xl font-bold">6. ATS-Optimized:</h4>
            <p className="text-3xl w-[590px] h-[133px]">
              Our resumes are designed to pass through ATS filters, increasing
              your chances of landing an interview.
            </p>
            <img src={service6} className="h-[284px] m-auto" />
          </div>
          <div className="m-auto">
            <h4 className="text-3xl font-bold">7. ATS-Optimized:</h4>
            <p className="text-3xl w-[590px] h-[133px]">
              Our resumes are designed to pass through ATS filters, increasing
              your chances of landing an interview.
            </p>
            <img src={service7} className="h-[284px] m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
