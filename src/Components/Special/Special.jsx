import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h1>Special</h1>
      <p>has : {gift}</p>
    </div>
  );
};

export default Special;
