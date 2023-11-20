import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-screen m-auto">
      <h2 className="text-5xl text-center mb-[35px]">Here's How It Works</h2>
      <div className="md:h-[496px] bg-[#3F759A] md:bg-[#02243F] w-full">
        <div className="m-auto w-full md:pt-[45px] p-10">
          <ol className="text-white m-auto list-decimal">
            <li className="text-2xl mb-[24px]">
              <span className="font-bold">Submit Your Details:</span> Provide
              your Name, WhatsApp Number, and upload your Current Resume in the
              fields below.
            </li>
            <li className="text-2xl mb-[24px]">
              <span className="font-bold"> Group Addition:</span> Within 24
              hours of submission, you will be added to a WhatsApp group with
              our Resume Writer.
            </li>

            <li className="text-2xl mb-[24px]">
              <span className="font-bold">Information Collection:</span> Our
              Resume Writer team will share a Google Doc for you to input
              additional details.
            </li>

            <li className="text-2xl mb-[24px]">
              <span className="font-bold">Receive Your New Resume:</span> After
              updating the provided Doc, our team will share your revamped
              resume within 48 hours.
            </li>

            <li className="text-2xl mb-[24px]">
              <span className="font-bold">Video Testimonial:</span> If you're
              pleased with the result, we kindly request a video testimonial.
              Once shared, you'll get your revamped resume, no strings attached!
            </li>
          </ol>
        </div>
      </div>
      <div className="divider w-[147px] mx-auto mt-[32px] font-bold"></div>
    </div>
  );
};

export default HowItWorks;
