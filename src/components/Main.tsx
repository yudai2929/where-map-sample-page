import React from "react";
import { Map } from "./Map";
import { MapImg } from "./MapImg";
import { TextArea } from "./TextArea";
export const Main = ():JSX.Element => {
  return (
    <div className="lg:container bg-gray-50 mx-auto min-h-screen p-16">
      <div className="flex justify-between">
        <Map />
        <MapImg />
      </div>
      <TextArea/>
    </div>
  );
};
