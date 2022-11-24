import promptList from "../prompts";
import moment from "moment";
import { ShuffleOutline } from "react-ionicons";
import "animate.css";
import { useState } from "react";

function Prompt() {
  const [prompt, setPrompt] = useState(
    promptList[Math.floor(Math.random() * promptList.length)]
  );

  return (
    <div className="prompt-container">
      <div className="prompt">
        <p className="date">{moment().format("dddd, MMMM Do YYYY")}</p>
        <p className="animate__animated animate__fadeInUp">{prompt}</p>
      </div>
      <div className="button" onClick={() => window.location.reload()}>
        <ShuffleOutline color={"white"} />
        Shuffle
      </div>
    </div>
  );
}

export default Prompt;
