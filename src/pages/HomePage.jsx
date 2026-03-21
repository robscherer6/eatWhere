import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/ResaurantList";
import FilterBar from "../components/FilterBar";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <FilterBar />
      <div className="container mx-auto px-4 py-8">
        <RestaurantList />
      </div>
    </div>
  );
};

export default HomePage;
