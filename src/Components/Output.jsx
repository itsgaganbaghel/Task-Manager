import React from "react";
import Foreground from "./Foreground";
import Header from "./Header";

const Output = ({ info , handleRemove }) => {
  return (
    <div className="w-full h-[80vh] bg-zinc-700 relative ">
      <Header />
      <Foreground info={info} handleRemove={handleRemove}/>
    </div>
  );
};

export default Output;