import "./App.css";
import "./assets/styles.css";
import RandomGif from "./components/randomGif";
import TaggedGif from "./components/taggedGif";

function App() {
  return (
    <div className="proj-bg-container">
      <RandomGif />
      <TaggedGif />
    </div>
  );
}

export default App;
