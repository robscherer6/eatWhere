import SpinWheel from "../components/SpinWheel";
import useRestaurants from "../hooks/useRestaurants";
import { Link } from "react-router-dom";

const SpinPage = () => {
  const { restaurants } = useRestaurants();

  if (restaurants.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center py-20 text-center">
          <div className="text-6xl mb-4">🎡</div>
          <p className="text-gray-400 text-xl font-medium">
            No restaurants to spin!
          </p>
          <p className="text-gray-400 text-sm mt-2 mb-6">
            Search for restaurants first then come back to spin
          </p>
          <Link
            to="/"
            className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-200"
          >
            Go Search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🎡 Spin to Decide!
      </h2>
      <SpinWheel />
    </div>
  );
};

export default SpinPage;
