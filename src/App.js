import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import AllProducts from "./components/AllProducts"

function App() {

  const apiUrl = "https://api.predic8.de";

  return (
    <div className="App">
      <AllProducts url={apiUrl} />
    </div>
  );
}

export default App;
