import { useEffect, useState } from "react";
import { RestaurantProvider } from "./context/RestaurantContext";
import Card from "./components/shared/Card";
import Button from "./components/shared/Button";
import Header from "./components/Header";

function App() {
  return (
    <RestaurantProvider>
      <div className="min-h-screen bg-gray-100 p-8">
        <Header />
        <h1 className="text-4xl font-bold text-orange-500 mb-6">eatWhere</h1>
        <Card className="max-w-sm">
          <p className="text-gray-700 mb-4">Test card content</p>
          <div className="flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button isDisabled={true}>Disabled</Button>
          </div>
        </Card>
      </div>
    </RestaurantProvider>
  );
}

export default App;
