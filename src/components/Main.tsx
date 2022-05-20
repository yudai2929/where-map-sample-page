import React, { useState } from "react";
import { Map } from "./Map";
import { MapImg } from "./MapImg";
import { TextArea } from "./TextArea";
import mapObject from '../types/mapObject'


const testData:mapObject = {
  path:'xxx',
  name:'A',
  text:'hoge hoge',
  imgPlace:[1,1,1,1],
}
export const mapContext = React.createContext({} as {
  mapDatas:mapObject[],
  setMapDatas: React.Dispatch<React.SetStateAction<mapObject[]>>
  targetMap:mapObject
  setTargetMap: React.Dispatch<React.SetStateAction<mapObject>>
});


export const Main = (): JSX.Element => {
  const [mapDatas, setMapDatas] = useState<mapObject[]>([testData]);
  const [targetMap, setTargetMap] = useState<mapObject>(testData);
  return (
    <mapContext.Provider value={{mapDatas,setMapDatas,targetMap,setTargetMap}}>
      <div className="lg:container  bg-gray-50 mx-auto min-h-screen p-0 md:p-16">
        <div className="flex justify-between">
          <Map />
          <MapImg />
        </div>
        <TextArea />
      </div>
    </mapContext.Provider>
  );
};
