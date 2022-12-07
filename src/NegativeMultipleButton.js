import React from "react";
import Button from "./Button";

function NegativeMultipleButton({ text, value, handleSubmit }) {
  const mb = [];
  for (let i = 1; i <= value; i++) {
    mb.push(
      <span key={i}>
        <Button key={i} text={text} handleSubmit={handleSubmit} />
      </span>
    );
  }

  return mb;
}

export default React.memo(NegativeMultipleButton);
