import { useState } from "react";
import "./App.css";
import SimpleForm from "./Components/SimpleForm/SimpleForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SimpleForm></SimpleForm>
    </>
  );
}

export default App;
