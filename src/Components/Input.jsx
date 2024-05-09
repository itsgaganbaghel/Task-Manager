import React from "react";
import { useForm } from "react-hook-form";


const Input = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    // console.log("working");
    handleFormSubmitData(data);
    reset();
  };
  
  return (
    <>
      <form
        className=" flex px-10 justify-center  items-center bg-zinc-600 w-full h-[20vh] gap-16  border border-zinc-500 "
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          className="px-2 py-1 border rounded-md font-semibold h-8 text-[1.1rem]  w-[25%]"
          {...register("heading")}
          type="text"
          placeholder="Enter your Task Heading..."
        />
        <input
          className="px-2 py-1 border rounded-md font-semibold h-8 text-[0.9rem] w-[25%]"
          {...register("desc")}
          type="text"
          placeholder="Enter your Task  Small Description"
        />
        <div className=" relative border p-4  rounded-lg ">
          <label className="absolute -top-2 rounded-md font-extrabold text-[.7rem] bg-zinc-100 px-2  ">
            Completion Date
          </label>
          <input
            className="px-2 py-1 mt-1 border rounded-md font-normal h-8"
            {...register("date")}
            type="date"
          />
        </div>
        <button className="px-3 py-1 text-zinc-900 cursor-pointer bg-white  rounded-md font-extrabold font-serif">submit</button>
      </form>
    </>
  );
};

export default Input;
