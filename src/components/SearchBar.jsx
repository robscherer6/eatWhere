import { useState } from "react";
import Button from "../components/shared/Button";
import useRestaurants from "../hooks/useRestaurants";
import {
  geocodeLocation,
  searchNearbyRestaurants,
} from "../services/restaurantService";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const { setRestaurants, setLoading, setError, setSearchLocation, filters } =
    useRestaurants();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    try {
      setLoading(true);
      setError(null);
      setSearchLocation(inputValue);

      const location = await geocodeLocation(inputValue);
      const restaurants = await searchNearbyRestaurants(location, filters);

      setRestaurants(restaurants);
    } catch (error) {
      setError(error.message);
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a city or address..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <Button type="submit" variant="primary">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
