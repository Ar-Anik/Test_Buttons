import { useCallback, useState } from "react";
import Input from "./Input";
import MultipleButton from "./MultipleButton";
import Screen from "./Screen";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState(0);

  const handleSubmit1 = useCallback((event) => {
    setValue1(event.target.value);
  }, []);

  const handleSubmit2 = useCallback((event) => {
    setValue2(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    setValue3((previus) => previus + 1);
  }, []);

  return (
    <>
      <Input
        type="text"
        placeholder="Input For Positive Button"
        value={value1}
        handleSubmit={handleSubmit1}
      />
      <br />
      <br />
      <Input
        type="text"
        placeholder="Input For Negative Button"
        value={value2}
        handleSubmit={handleSubmit2}
      />

      <Screen value={value3} />

      <MultipleButton
        text="Increment By One"
        value={value1}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
