import { useState } from "react";
import MyButton from "../myButton/MyButton";

export default function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const like = () => {
    setLikes((prev) => prev + 1);
  };
  const dislike = () => {
    setDislikes((prev) => prev + 1);
  };

  const reset = () => {
    setLikes(0);
    setDislikes(0);
  };
  return (
    <>
      <div>
        <span>{likes}</span>
        <MyButton text={"👍"} func={like} />
        <MyButton text={"👎"} func={dislike} />
        <span>{dislikes}</span>
      </div>
      <div>
        <MyButton text={"RESET"} func={reset} />
      </div>
    </>
  );
}
