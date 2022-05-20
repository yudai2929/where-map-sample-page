import React from "react";

export const Map = () => {
  const mapImg:string = `${process.env.PUBLIC_URL}/images/map.jpeg`
  return (
    <div className="bg-gray-200 md:w-6/12 w-full h-96 p-5 flex justify-center" >
      <img className='block h-full' src={mapImg} alt="間取り図"/>
    </div>
  );
};
