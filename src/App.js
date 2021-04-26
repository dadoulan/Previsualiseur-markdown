import React, { useState } from "react";
import TextArea from "./components/TextArea/TextArea";
import Preview from "./components/Preview/Preview";
import Marked from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const markdownToHtml = () => {
    return { __html: Marked(text) };
  };

  return (
    <>
      <h1>Prévisualiseur</h1>
      <div className="App">
        <div className="elements">
          <TextArea
            text={text}
            textareaChangeHandler={(e) => setText(e.target.value)}
          />
          <Preview text={text} markdownToHtml={markdownToHtml} />
        </div>
      </div>
    </>
  );
}

export default App;
