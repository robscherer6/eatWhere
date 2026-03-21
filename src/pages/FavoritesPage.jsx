import useRestaurants from "../hooks/useRestaurants";
import Card from "../components/shared/Card";
import Button from "../components/shared/Button";

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useRestaurants();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Favorites</h2>
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="text-6xl mb-4">🤍</div>
            <p className="text-gray-400 text-xl font-medium">
              No favorites saved yet
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Search for restaurants and save ones you love
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          My Favorites
          <span className="ml-2 text-orange-500">({favorites.length})</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((restaurant) => {
          const {
            id,
            displayName,
            formattedAddress,
            rating,
            userRatingCount,
            regularOpeningHours,
            types,
          } = restaurant;

          const name = displayName?.text;
          const isOpen = regularOpeningHours?.openNow;
          const cuisineTypes = types
            ?.filter(
              (type) =>
                ![
                  "restaurant",
                  "food",
                  "point_of_interest",
                  "establishment",
                ].includes(type),
            )
            .slice(0, 2)
            .map((type) => type.replace(/_/g, " "));

          return (
            <Card key={id} className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <span className="text-2xl">❤️</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-semibold">
                  ⭐ {rating}
                </span>
                <span className="text-gray-400 text-sm">
                  ({userRatingCount?.toLocaleString()} reviews)
                </span>
              </div>

              {cuisineTypes?.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {cuisineTypes.map((type, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full capitalize"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-gray-500 text-sm">{formattedAddress}</p>

              <div className="flex items-center justify-between mt-auto">
                <span
                  className={`text-sm font-medium ${isOpen ? "text-green-500" : "text-red-500"}`}
                >
                  {isOpen ? "● Open Now" : "● Closed"}
                </span>
                <Button variant="danger" onClick={() => removeFavorite(id)}>
                  Remove
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPage;
