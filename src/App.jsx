import React from "react";
import CardName from "./components/CardName";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <CardName
        name="SYERA AL-FARIDZI"
        username="alfrdzley"
        title="Software Engineer | Backend Dev"
        repositories={3000}
        stars={1000}
      />
    </div>
  );
}

export default App;
