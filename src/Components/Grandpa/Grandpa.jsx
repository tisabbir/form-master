import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("silver");
const Grandpa = () => {
  return (
    <div className=" text-center grandpa">
      <h1>Grandpa</h1>
      <AssetContext.Provider value={"gold"}>
        <section className=" grid grid-cols-3">
          <Dad></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;
