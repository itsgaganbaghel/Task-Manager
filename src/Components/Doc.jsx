import React from "react";
import { motion } from "framer-motion";
import Tasks from "./Tasks";

const Doc = ({ info, id, reference, handleRemove }) => {
  console.log(info);
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.05 }}
      className=" relative px-3 pt-2 w-[35%]  max-h-[400px] bg-zinc-600 rounded-3xl overflow-hidden "
    >
      <h1 className="font-extrabold text-white p-1  text-[1.3rem]">
        {info.heading}
      </h1>
      <hr className="mb-2" />
      <h3 className=" text-[0.9rem] font-semibold text-zinc-200">
        {info.desc}
      </h3>
      <p className="text-[0.8rem] font-bold text-zinc-900">
        Completion Date : {info.date}
      </p>
      <Tasks />
      <button
        onClick={() => handleRemove(id)}
        className=" border mt-4 ml-28   bg-zinc-800 text-white font-extrabold px-3 py-[4px] font-serif rounded-lg "
      >
        Delete The Card
      </button>
    </motion.div>
  );
};

export default Doc;
