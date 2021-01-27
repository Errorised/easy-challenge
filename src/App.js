import React from "react";
import "./App.css";
import AvailableProducts from "./components/AvailableProducts"
import Categories from "./components/Categories";

function App() {

  const apiUrl = "https://api.predic8.de";
  
  return (
    <div className="App">
      <h1>List of available products</h1>
      <AvailableProducts url={apiUrl} />
      <h1>List of all products</h1>
      <Categories url={apiUrl} />
    </div>
  );
}

export default App;
