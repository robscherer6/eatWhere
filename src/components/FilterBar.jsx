import useRestaurants from "../hooks/useRestaurants";
import {
  geocodeLocation,
  searchNearbyRestaurants,
} from "../services/restaurantService";

const CUISINE_TYPES = [
  { label: "All", value: "" },
  { label: "Italian", value: "italian_restaurant" },
  { label: "Chinese", value: "chinese_restaurant" },
  { label: "Mexican", value: "mexican_restaurant" },
  { label: "Japanese", value: "japanese_restaurant" },
  { label: "American", value: "american_restaurant" },
  { label: "Indian", value: "indian_restaurant" },
  { label: "Thai", value: "thai_restaurant" },
  { label: "Mediterranean", value: "mediterranean_restaurant" },
];

const DISTANCE_OPTIONS = [
  { label: "1 mile", value: 1609 },
  { label: "3 miles", value: 4827 },
  { label: "5 miles", value: 8045 },
  { label: "10 miles", value: 16090 },
];

const FilterBar = () => {
  const {
    filters,
    setFilters,
    searchLocation,
    setRestaurants,
    setLoading,
    setError,
  } = useRestaurants();

  const handleFilterChange = async (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);

    if (!searchLocation) return;

    try {
      setLoading(true);
      setError(null);
      const location = await geocodeLocation(searchLocation);
      const results = await searchNearbyRestaurants(location, updatedFilters);
      setRestaurants(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!searchLocation) return null;

  return (
    <div className="bg-white border-t border-gray-200 py-3">
      <div className="container mx-auto px-4 flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Cuisine:</span>
          <div className="flex gap-1 flex-wrap">
            {CUISINE_TYPES.map((cuisine) => (
              <button
                key={cuisine.value}
                onClick={() => handleFilterChange({ cuisine: cuisine.value })}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
                  ${
                    filters.cuisine === cuisine.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
                  }`}
              >
                {cuisine.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Distance:</span>
          <div className="flex gap-1">
            {DISTANCE_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => handleFilterChange({ distance: option.value })}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
                  ${
                    filters.distance === option.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
