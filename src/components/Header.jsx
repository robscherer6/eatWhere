import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-500 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold tracking-tight">
          🍽️ eatWhere
        </Link>
        <nav className="flex gap-6">
          <Link
            to="/"
            className="text-white font-medium hover:text-orange-200 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/spin"
            className="text-white font-medium hover:text-orange-200 transition-colors duration-200"
          >
            Spin
          </Link>
          <Link
            to="/favorites"
            className="text-white font-medium hover:text-orange-200 transition-colors duration-200"
          >
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
