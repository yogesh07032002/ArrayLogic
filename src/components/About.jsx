import About1 from "../../public/About1.png";
import React from "react";

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-0 md:mt-36">
          <div className="space-y-6">
            <h1 className="text-xl md:text-4xl font-bold">About Us</h1>
          </div>
          <div className="mt-8">
            <p>
              At LiftLogic Softwares Pvt. Ltd. our expert engineers are
              dedicated to guiding customers through their digital
              transformation journey. We are not just a software company; we
              offer profound technology expertise, excellent delivery
              capabilities, and in-depth domain knowledge across various
              sectors. This enables us to efficiently and successfully deliver
              solutions that drive customer success. We specialize in building
              custom applications tailored to your specific business needs in a
              cost-effective manner. Our commitment is to help you achieve
              growth and success with innovative technology solutions.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 ml-0 mt-0 md:mt-36 md:ml-24">
          <img
            src={About1}
            className="w-92 h-92"
            alt="Hey We Are LiftLogic"
          />
        </div>
      </div>
    </>
  );
}

export default About;