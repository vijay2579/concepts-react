import { useState } from "react";

const Parent = () => {
  const [username, setUsername] = useState("Test");

  const changeUsername = () => {
    setUsername("Changed value");
  };

  return (
    <>
      <p>The value is {username}</p>
      <button onClick={() => changeUsername()}>Click Me</button>
    </>
  );
};

export default Parent;
