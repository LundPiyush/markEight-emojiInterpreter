import { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😕": "Confused",
  "😟": "Worried",
  "🤩": "Star-Struck",
  "😉": "Winking",
  "😊": "Smiling",
  "🤗": "Hugging",
  "👍": "Thumbs Up",
  "😴": "Sleeping",
  "😑": "Annoyance",
  "😂": "laughing",
  "😡": "angry",
  "🤒": "sick"
};
const emojis = Object.keys(emojiDictionary);
export default function App() {
  const [interpreter, setInterpreter] = useState("");
  function emojiClickInterpreter(emoji) {
    setInterpreter(emojiDictionary[emoji]);
  }
  function emojiInputInterpreter(event) {
    var userInput = event.target.value;
    if (emojiDictionary[userInput] === undefined) {
      setInterpreter("We don't have this emoji in our Database.");
    } else {
      setInterpreter(emojiDictionary[userInput]);
    }
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={emojiInputInterpreter}
        placeholder="Enter your emoji here"
      />
      <div
        style={{
          padding: "1rem",
          fontSize: "40px",
          fontWeight: "bold"
        }}
      >
        {interpreter}
      </div>
      <h2>Emojis we have</h2>
      {emojis.map((emoji) => {
        return (
          <div
            key={emoji}
            style={{
              padding: "0.3rem",
              fontSize: "2rem",
              cursor: "pointer",
              display: "inline-block"
            }}
            onClick={() => emojiClickInterpreter(emoji)}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
}
