import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import FilterBar from "../components/FilterBar";
import Hero from "../components/Hero";
import useRestaurants from "../hooks/useRestaurants";

const HomePage = () => {
  const { searchLocation } = useRestaurants();
  return (
    <div>
      {!searchLocation && <Hero />}
      <SearchBar />
      <FilterBar />
      <div className="container mx-auto px-4 py-8">
        <RestaurantList />
      </div>
    </div>
  );
};

export default HomePage;
