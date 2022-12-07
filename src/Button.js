import React from "react";

function Button({ text, handleSubmit }) {
  return (
    <button type="button" onClick={handleSubmit}>
      {text}
    </button>
  );
}

export default React.memo(Button);
