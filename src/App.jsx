import { lazy, Suspense } from "react";
import { RestaurantProvider } from "./context/RestaurantContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const HomePage = lazy(() => import("./pages/HomePage"));
const SpinPage = lazy(() => import("./pages/SpinPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

const LoadingFallback = () => (
  <div className="flex justify-center items-center py-20">
    <div className="text-orange-500 text-xl font-medium animate-pulse">
      Loading...
    </div>
  </div>
);

function App() {
  return (
    <RestaurantProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/spin" element={<SpinPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </RestaurantProvider>
  );
}

export default App;
