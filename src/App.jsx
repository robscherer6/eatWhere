import { RestaurantProvider } from "./context/RestaurantContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import SpinPage from "./pages/Spinpage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <RestaurantProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/spin" element={<SpinPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </RestaurantProvider>
  );
}

export default App;
