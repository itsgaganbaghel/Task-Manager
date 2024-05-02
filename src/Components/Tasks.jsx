import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Task from "./Task";

const Tasks = () => {
  const [task, setTask] = useState([]);
  // const [completeTask, setCompleteTask] = useState([]);

  const { register, handleSubmit, reset } = useForm();
  const handleTaskSubmit = (newTask) => {
    setTask([...task, newTask]);
    reset();
  };
  const RemoveTask = (id) => {
    setTask(task.filter((task, index) => index !== id));
  };
  // const CompleteTask = (id) => {
  //   setCompleteTask(Task.filter((t, index) => index === id));
  // };
  
  return (
    <div>
      <form className="flex   gap-4 py-4">
        <input
          {...register("newTaskInfo")}
          className="rounded-md px-1 w-40 py-1 text-[.7rem]"
          type="text"
          placeholder="Enter your Tasks here.."
        />
        <input
          onClick={handleSubmit(handleTaskSubmit)}
          type="submit"
          className="px-2 py-1 rounded-lg bg-zinc-300 font-bold"
        />
      </form>
      <div className="w-full max-h-40 rounded-md bg-zinc-400 flex justify-between ap overflow-y-scroll p-2">
        <div>
          <span>Your Tasks</span>
          {task.map((newTaskCreate, index) => {
            return (
              <Task
                info={newTaskCreate}
                id={index}
                key={index}
                RemoveTask={RemoveTask}
              />
            );
          })}
        </div>
        {/* <div>
          <span>Completed Tasks</span>
          {task.map((newTaskCreate, index) => {
            return (
              <Task
                info={newTaskCreate}
                id={index}
                key={index}
                RemoveTask={CompleteTask}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Tasks;
