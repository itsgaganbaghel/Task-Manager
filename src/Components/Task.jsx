import React from "react";
// import Li from "./Li.module.css";

const Task = ({ info, id, RemoveTask }) => {
  return (
    // console.log(info.newTaskInfo)
    <div className="flex gap-5 items-center  w-full mb-4  relative">
      {/* <li className=" hover:bg-red-300 rounded-2xl px-2 cursor-pointer">
        {info.newTaskInfo}
      </li>
      <div>
        <button
          className=" px-2 py-1 bg-red-400 ml-2 text-[.6rem] font-semibold cursor-pointer  rounded-xl"
          onClick={() => RemoveTask(id)}
        >
          Delete
        </button>
        <button
          className=" px-2 py-1 bg-red-400 ml-2 text-[.6rem] font-semibold cursor-pointer  rounded-xl"
          onClick={() => RemoveTask(id)}
        >
          Completed
        </button> */}

      <button
        className=" px-2 py-1 bg-red-400 ml-2 text-[.6rem] font-semibold cursor-pointer  rounded-xl"
        onClick={() => RemoveTask(id)}
      >
        Delete
      </button>
      <li className=" hover:bg-red-300 rounded-2xl text-wrap px-2 cursor-pointer w-full bg-red-400">
        {info.newTaskInfo}
      </li>
    </div>

    // </div>
  );
};

export default Task;
