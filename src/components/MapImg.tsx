import React from "react";
import { MapMainImg } from "./MapMainImg";
import { MapImgList } from "./MapImgList";
import { SwipeIcon } from "./SwipeIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export const MapImg = () => {
  return (
    <div className="bg-gray-200 w-5/12 h-96 items-center md:flex justify-between flex-col hidden">
      <div className='flex flex-row justify-evenly w-full'>
        <SwipeIcon><FontAwesomeIcon icon={faAnglesLeft} /></SwipeIcon>
        <MapMainImg />
        <SwipeIcon><FontAwesomeIcon icon={faAnglesRight} /></SwipeIcon>
      </div>

      <MapImgList />
    </div>
  );
};
