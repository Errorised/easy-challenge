import React from "react";
import "./App.css";
import AllProducts from "./components/AllProducts"
import Categories from "./components/Categories";

function App() {

  const apiUrl = "https://api.predic8.de";

  return (
    <div className="App">
      <AllProducts url={apiUrl} />
      <Categories url={apiUrl} />
    </div>
  );
}

export default App;
