import React from "react";

const Service = () => {
  return (
    <>
      <div className="text-white px-[9rem] text-start mb-56" id="service">
        <p className="text-[46px] font-[500] mb-24">
            With our services, we ensure good <br /> management, easy communication, and <br />your satisfaction.
        </p>

        <div className="flex space-x-8 items-center justify-center">
          <div className="flex flex-col px-12 py-8 bg-[#101D1F] w-1/3">
            <div className="flex items-center mb-4 px-">
              <div className="bg-[#53C2D1] px-1 py-3 rounded-lg mr-4"></div>
              <h2 className="text-[20px] font-[600]">VarTech</h2>
            </div>
            <p className="text-[18px] font-medium ml-7 pb-4">
              We focus on helping you bring your design to life according to your demands.
            </p>
          </div>

          <div className="flex flex-col px-12 py-8 bg-[#101D1F] w-1/3">
            <div className="flex items-center mb-4">
              <div className="bg-[#53C2D1] px-1 py-3 rounded-lg mr-4"></div>
              <h2 className="text-[20px] font-[600]">VarCretife</h2>
            </div>
            <p className="text-[18px] font-medium ml-7 pb-4">
              We focus on helping you create an interface design that meets your needs and preferences.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Service;
