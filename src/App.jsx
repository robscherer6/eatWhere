import { useState } from "react";
import { RestaurantProvider } from "./context/RestaurantContext";

function App() {
  return (
    <RestaurantProvider>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-orange-500">eatWhere</h1>
      </div>
    </RestaurantProvider>
  );
}

export default App;
