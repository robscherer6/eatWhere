import { createContext, useState, useEffect } from "react";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  // lazy initialization, calls once on mount (localstorage access is sync)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("eatWhere-favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [filters, setFilters] = useState({
    cuisine: "",
    // google measures distance in meters (5000m ~ 3 mi)
    distance: 5000,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    localStorage.setItem("eatWhere-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((res) => res.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((res) => res.id === id);
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        favorites,
        filters,
        setFilters,
        loading,
        setLoading,
        error,
        setError,
        searchLocation,
        setSearchLocation,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext;
