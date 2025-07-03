import { useState } from "react";
import MyButton from "../../../components/myButton/MyButton";
import Feedback from "../../../components/feedback/Feedback";

export default function Homework_04() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [countColor, setCountColor] = useState("white");

  const handleCountColorRed = () => {
    setCountColor("red");
  };

  const handleCountColorBlue = () => {
    setCountColor("blue");
  };

  const handleCountColorGreen = () => {
    setCountColor("green");
  };

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  const handleSwitcher = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div>
      <MyButton func={handleSwitcher} text={!isVisible ? "Show" : "Hide"} />
      {isVisible ? (
        <>
          <MyButton text="RED" type="button" func={handleCountColorRed} />
          <MyButton text="BLUE" type="button" func={handleCountColorBlue} />
          <MyButton text="GREEN" type="button" func={handleCountColorGreen} />
          <div>
            <MyButton type="button" text="-" func={handleMinus} />
            <span style={{ color: countColor }}>{count}</span>
            <MyButton type="button" text="+" func={handlePlus} />
          </div>
        </>
      ) : (
        <></>
      )}
      <Feedback />
    </div>
  );
}
