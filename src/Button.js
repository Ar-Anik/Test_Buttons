import React from "react";

function Button({ text, handleSubmit }) {
  console.log("Button Call");
  return (
    <button type="button" onClick={handleSubmit}>
      {text}
    </button>
  );
}

export default React.memo(Button);
