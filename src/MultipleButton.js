import React from "react";
import Button from "./Button";

function MultipleButton({ text, value, handleSubmit }) {
  const mb = [];
  for (let i = 0; i < { value }; i++) {
    mb.push(<Button text={text} handleSubmit={handleSubmit} />);
  }
  console.log(mb);
  return mb;
}

export default React.memo(MultipleButton);
