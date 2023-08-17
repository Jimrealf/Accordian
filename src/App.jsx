import { useState } from "react";
import reactLogo from "./assets/react.svg";
import data from "./data";
import Questions from "./questions";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <h1>FAQ</h1>
      <Questions questions={questions} />
    </main>
  );
}

export default App;
