import React from "react";
import classes from "./TextArea.module.css";

const TextArea = (props) => {
  return (
    <div className="element">
      <textarea
        rows="30"
        className={classes.textarea}
        value={props.text}
        onChange={props.textareaChangeHandler}
      ></textarea>
    </div>
  );
};

export default TextArea;
