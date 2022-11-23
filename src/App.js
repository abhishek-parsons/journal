import "./App.css";
import Entry from "./components/Entry";
import Prompt from "./components/Prompt";
import promptList from "./prompts";

function App() {
  const randomPrompt =
    promptList[Math.floor(Math.random() * promptList.length)];

  return (
    <div className="App">
      <div className="prompt-entry">
        <Prompt />
        <Entry />
      </div>
    </div>
  );
}

export default App;
