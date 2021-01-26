import React, { useState } from "react";

const Ternary = () => {
  const [bool, setBool] = useState(true);
  return <div> {bool ? <h1></h1> : <div>
      </div>}</div>;
};
