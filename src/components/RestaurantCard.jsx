import { memo } from "react";
import Card from "../components/shared/Card";
import Button from "../components/shared/Button";
import useRestaurants from "../hooks/useRestaurants";

const RestaurantCard = memo(({ restaurant }) => {
  const { addFavorite, removeFavorite, isFavorite } = useRestaurants();
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
  // avoiding returning generic data, removing _, and keep it limited to two words
  const cuisineTypes = types
    ?.filter(
      (type) =>
        !["restaurant", "food", "point_of_interest", "establishment"].includes(
          type,
        ),
    )
    .slice(0, 2)
    .map((type) => type.replace(/_/g, " "));

  const handleFavoriteClick = () => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(restaurant);
    }
  };

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <button
          onClick={handleFavoriteClick}
          className="text-2xl transition-transform hover:scale-110"
        >
          {isFavorite(id) ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-yellow-500 font-semibold">⭐ {rating}</span>
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
        <Button
          variant={isFavorite(id) ? "danger" : "primary"}
          onClick={handleFavoriteClick}
        >
          {isFavorite(id) ? "Remove" : "Save"}
        </Button>
      </div>
    </Card>
  );
});

RestaurantCard.displayName = 'RestaurantCard'

export default RestaurantCard;
