import React from "react";
import classes from "./Preview.module.css";

const Preview = (props) => {
  const myCss = `${classes.preview} element`;

  return (
    <div
      className={myCss}
      dangerouslySetInnerHTML={props.markdownToHtml()}
    ></div>
  );
};

export default Preview;
