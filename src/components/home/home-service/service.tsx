import React from "react";
import { BorderBeam } from "@/components/animations/magicui/border-beam";

const HomeService = () => {
  return (
      <div className="text-white px-4 md:px-[9rem] text-start pt-20 lg:pt-32 mb-56 flex-col" id="service">
        <p className="text-2xl md:text-3xl lg:text-[46px] md:leading-tight font-[500] mb-24">
            With our services, we ensure good <br className="hidden md:block"/> management, easy communication, and <br className="hidden md:block"/>your satisfaction.
        </p>

        <div className="flex flex-col lg:flex-row space-y-6 sm:space-y-8 lg:space-y-0 md:space-x-8 items-center justify-center">

          <div className="flex flex-1 relative flex-col px-6 py-4 sm:px-12 sm:py-8 bg-[#101D1F] flex-shrink-1 w-[302.5px] h-[143px] lg:w-[450px] lg:h-[238px] xl:w-[440px] xl:h-[208px]">
            <div className="flex items-center mb-3">
              <div className="bg-[#53C2D1] px-1 py-2 rounded-lg mr-4"></div>
              <h2 className="text-[16px] lg:text-[20px] font-[600]">VarLabs</h2>
            </div>
            <p className="text-[14px] lg:text-[18px] font-medium ml-5 pb-3">
              We focus on helping you bring your design to life according to your demands.
            </p>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>


          <div className="flex flex-1 relative flex-col px-6 py-4 sm:px-12 sm:py-8 bg-[#101D1F] flex-shrink-0 w-[302.5px] h-[143px] lg:w-[450px] lg:h-[238px] xl:w-[440px] xl:h-[208px]">
            <div className="flex items-center mb-3 ">
              <div className="bg-[#53C2D1] px-1 py-2 rounded-lg mr-4"></div>
              <h2 className="text-[16px] lg:text-[20px] font-[600]">VarCretife</h2>
            </div>
            <p className="text-[14px] lg:text-[18px] font-medium ml-5 pb-3">
              We focus on helping you create an interface design that meets your needs and preferences.
            </p> 
              <BorderBeam size={250} duration={12} delay={9} />
          </div>

        </div>

      </div>  
  );
};

export default HomeService;
