import { useState } from "react";
import Output from "./Components/Output";
import Input from "./Components/Input";
import "./App.css";

function App() {
  const [isDisabled, setIsDisabled] = useState(true);

  let ToggleDisabled = () => {
    console.log("gg");
    setIsDisabled(!isDisabled);
    console.log(isDisabled.toString());
  };
  let Display = (e)=>{
    // e.style.display = " none"
    let main = document.querySelector("#main")
    main.style.display = "none"
  }
  const [doc, setDoc] = useState([]);

  const handleFormSubmitData = (data) => {
    setDoc([...doc, data]);
  };
  const handleRemove = (id) => {
    setDoc(() => doc.filter((item, index) => index != id));
  };
  return (
    <>
      <div id="main" className="absolute  rounded-3xl z-50 left-[30%] top-[15%] w-[50%] h-[60%] text-white border flex flex-col justify-center  gap-5 p-10 ">
        <h1 className="text-center text-[2.3rem] font-bold">Instructions</h1>
        <p>
          Step - 01 : Submit th details in the Input Field that are give below.
        </p>
        <p>Step - 02 : Click on Submit Button</p>
        <p>A Card is Created.</p>
        <p>
          Step - 03 : Now add the task by clicking the add button after writing
          the task in the input Field{" "}
        </p>
        <h2> Extra Functionalities are</h2>
        <p> You can Drag the Cards </p>
        <p> You delete, add, mark as done, or edit the Task </p>

        <div className="flex justify-between">
          <div>
            <input type="checkbox" id="TC" onClick={ToggleDisabled} />
            <label className="ml-3 font-semibold opacity-[0.8]">
              I Read all the Instructions.
            </label>
          </div>
          <input
            type="button"
            value="ok"
            id="btn"
            disabled={isDisabled}
            onClick={Display}
            className=" text-right py-1 px-3 font-bold text-[1.2rem] mb-5 bg-white text-zinc-700 rounded-lg"
          />
        </div>
      </div>
      <Output info={doc} handleRemove={handleRemove} />
      <Input handleFormSubmitData={handleFormSubmitData} />
    </>
  );
}

export default App;
