import React from "react";
import BoxRevealOri from "@/components/animations/magicui/box-reveal-original";
import { BorderBeam } from "@/components/animations/magicui/border-beam";

const Service = () => {
  return (
    <>
      <div className="text-white px-4 md:px-[9rem] text-start pt-32 mb-56 flex-col md:flex-row" id="service">
        <p className="text-2xl md:text-[46px] md:leading-tight font-[500] mb-24">
            With our services, we ensure good <br className="hidden md:block"/> management, easy communication, and <br className="hidden md:block"/>your satisfaction.
        </p>

        <div className="flex space-x-8 items-center justify-center">
          <div className="flex relative flex-col px-12 py-8 bg-[#101D1F] w-1/3">
          
            <div className="flex items-center mb-4 px-">
              <div className="bg-[#53C2D1] px-1 py-3 rounded-lg mr-4"></div>
              <h2 className="text-[20px] font-[600]">VarLabs</h2>
            </div>
            <p className="text-[18px] font-medium ml-7 pb-4">
              We focus on helping you bring your design to life according to your demands.
            </p>
            
            <BorderBeam size={250} duration={12} delay={9} />
          </div>


          <div className="flex relative flex-col px-12 py-8 bg-[#101D1F] w-1/3">
      
            <div className="flex items-center mb-4">
              <div className="bg-[#53C2D1] px-1 py-3 rounded-lg mr-4"></div>
              <h2 className="text-[20px] font-[600]">VarCretife</h2>
            </div>
            <p className="text-[18px] font-medium ml-7 pb-4">
              We focus on helping you create an interface design that meets your needs and preferences.
            </p>
            
            
              <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Service;
