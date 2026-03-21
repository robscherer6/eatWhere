import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/ResaurantList";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <div className="container mx-auto px-4 py-8">
        <RestaurantList />
      </div>
    </div>
  );
};

export default HomePage;
