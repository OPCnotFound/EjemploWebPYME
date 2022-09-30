import React, { useEffect, useState } from "react";
import { getItemsByCondition } from "../app/Apis";

const TEST = () => {
  const [testState, setTestState] = useState();
  const testVariable = testState;
  console.log(testVariable);

  const test = () => {
    getItemsByCondition("smartphones", "category").then((res) =>
      setTestState(res)
    );
  };

  useEffect(() => {
    test();
  }, []);

  return <div>TEST</div>;
};

export default TEST;
