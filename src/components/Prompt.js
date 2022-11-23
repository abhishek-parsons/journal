import promptList from "../prompts";

function Prompt({ selected, onClick }) {
  const randomPrompt =
    promptList[Math.floor(Math.random() * promptList.length)];
  return (
    <div className="prompt-container" onClick={onClick}>
      <div className="prompt">
        <p>Date</p>
        <p>
          This is the prompt and here is where it will show up. It can contain
          questions etc that the person might want to answer
        </p>
      </div>
      <div className="controls">controls</div>
    </div>
  );
}

export default Prompt;
