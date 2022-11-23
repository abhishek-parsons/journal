import "./App.css";
import Entry from "./components/Entry";
import Prompt from "./components/Prompt";

function App() {
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
