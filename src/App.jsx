import { useState } from "react";
import "./App.css";
import BillInput from "./BillInput";
import Percentage from "./Percentage";
import Reset from "./Reset";
import Total from "./Total";

function App() {
  // functions

  const [bill, setBill] = useState("");

  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  //

  return (
    <>
      <div className="container w-[60vw] flex flex-col justify-center items-center mt-56 p-12 rounded-3xl shadow-2xl mx-auto gap-4 bg-slate-200 ">
        <BillInput bill={bill} onSetBill={setBill} />
        <Percentage
          percentage={percentage1}
          onSelect={setPercentage1}
          text={"How did yo lije the service?"}
        />

        <Percentage
          percentage={percentage2}
          onSelect={setPercentage2}
          text={"How did your friend like the service?"}
        />
        <Total bill={bill} tip={tip} />
        <Reset Ui="button" functions={handleReset}>
          Reset
        </Reset>
      </div>
    </>
  );
}

export default App;
