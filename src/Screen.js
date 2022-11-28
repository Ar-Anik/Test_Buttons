import React from "react";

function Screen({ value }) {
  return <div>{value}</div>;
}

export default React.memo(Screen);
