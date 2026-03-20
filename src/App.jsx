import { useEffect, useState } from "react";
import { RestaurantProvider } from "./context/RestaurantContext";
import { geocodeLocation, searchNearbyRestaurants } from "./services/restaurantService";

function App() {
  useEffect(() => {
    const testAPI = async () => {
      try {
        console.log('testing geocoding...');
        const location = await geocodeLocation('Middletown, MD');
        console.log('location: ', location);

        console.log('testing restaurant search nearby...');
        const restaurants = await searchNearbyRestaurants(location, {
          cuisine: '',
          distance: 5000
        })
        console.log('restaurants found: ', restaurants);
      } catch (error) {
        console.error('API error', error)
      }
    }
    testAPI()
  }, [])

  return (
    <RestaurantProvider>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-orange-500">eatWhere</h1>
      </div>
    </RestaurantProvider>
  );
}

export default App;
