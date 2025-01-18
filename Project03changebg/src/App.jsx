import { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="button-container">
          <button onClick={() => setColor("red")} className="color-button red">
            Red
          </button>
          <button onClick={() => setColor("green")} className="color-button green">Green</button>

          <button onClick={() => setColor("blue")} className="color-button blue">
            Blue</button>
          <button onClick={() => setColor("yellow")} className="color-button yellow">
            Yellow
          </button>
          <button onClick={() => setColor("purple")} className="color-button purple">
            Purple
          </button>
          <button onClick={() => setColor("orange")} className="color-button orange">
            Orange
          </button>
          <button onClick={() => setColor("pink")} className="color-button pink">
            Pink
          </button>
          <button onClick={() => setColor("cyan")} className="color-button cyan">
            Cyan
          </button>
          <button onClick={() => setColor("brown")} className="color-button brown">
            Brown
          </button>
          <button onClick={() => setColor("black")} className="color-button black">
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
