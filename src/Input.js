import React from "react";

function Input({ type, placeholder, value, handleSubmit }) {
  console.log("Element Call");
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleSubmit}
    />
  );
}

export default React.memo(Input);
