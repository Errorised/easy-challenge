import React from "react";
import "./App.css";
import AvailableProducts from "./components/AvailableProducts/AvailableProducts"
import CategoriesTable from "./components/AllProducts/CategoriesTable";

function App() {

  const apiUrl = "https://api.predic8.de";
  
  return (
    <div className="App">
      <h1>List of available products</h1>
      <AvailableProducts url={apiUrl} />
      <h1>List of all products</h1>
      <CategoriesTable url={apiUrl} />
    </div>
  );
}

export default App;
