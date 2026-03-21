import RestaurantCard from "./RestaurantCard";
import useRestaurants from "../hooks/useRestaurants";

const RestaurantList = () => {
  const { restaurants, loading, error, searchLocation } = useRestaurants();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-orange-500 text-xl font-medium animate-pulse">
          Finding restaurants...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-red-500 text-xl font-medium">{error}</div>
      </div>
    );
  }

  if (!searchLocation) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-gray-400 text-xl font-medium">
          Enter a location to find restaurants near you 🍽️
        </div>
      </div>
    );
  }

  if (restaurants.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-gray-400 text-xl font-medium">
          No restaurants found in this area
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
