import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Box = () => {
  return (
    <div className="relative w-[180px] shrink-0">
      <img src="air.jpeg" className="w-[180px] h-[180px] rounded-2xl"></img>
      <p className="text-sm absolute top-3 bg-gray-100 left-3 px-2 py-1 rounded-full">소제목</p>
      <div className=" cursor-pointer w-[30px] h-[30px] text-sm absolute top-3 right-3 bg-gray-100 flex items-center justify-center rounded-full">
        <FontAwesomeIcon icon={faUpload} className=" px-2 py-1 rounded-full"/>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-[16px]">바뀔제목</h3>
        <p className="text-[12px] text-gray-600">바뀔지역이름</p>
        <p className="text-[14px] text-gray-800">1인당 가격</p>
      </div>
    </div>
  );
};

export default Box;
