import { useState } from "react";
import Output from "./Components/Output";
import Input from "./Components/Input";

function App() {
  const [doc, setDoc] = useState([]);

  const handleFormSubmitData = (data) => {
    setDoc([...doc, data]);
  };
  const handleRemove = (id) => {
    setDoc(() => doc.filter((item, index) => index != id));
  };
  return (
    <>
      <Output info={doc} handleRemove={handleRemove} />
      <Input handleFormSubmitData={handleFormSubmitData} />
    </>
  );
}

export default App;
