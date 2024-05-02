import React, { useRef, useState } from "react";
import Doc from "./Doc";

const Foreground = ({ info , handleRemove }) => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="absolute bottom-0 w-full h-[85%] p-2 flex flex-wrap gap-5 overflow-y-scroll "
    >
      {info.map((item, index) => {
        return <Doc info={item} key={index} id={index} reference={ref} handleRemove={handleRemove}/>;
      })}
    </div>
  );
};

export default Foreground;

