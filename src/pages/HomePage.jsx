import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800">Find Restaurants</h2>
      </div>
    </div>
  );
};

export default HomePage;
