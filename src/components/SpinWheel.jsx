import { useState, useRef } from "react";
import useRestaurants from "../hooks/useRestaurants";
import Button from "./shared/Button";
import Card from "./shared/Card";

const COLORS = [
  "#FF6B6B",
  "#FF8E53",
  "#FFC15E",
  "#54C392",
  "#4ECDC4",
  "#45B7D1",
  "#A78BFA",
  "#F472B6",
];

const SpinWheel = () => {
  const { restaurants, addFavorite, isFavorite } = useRestaurants();
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);

  const displayRestaurants = restaurants.slice(0, 8);
  const segmentAngle = 360 / displayRestaurants.length;

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    const randomIndex = Math.floor(Math.random() * displayRestaurants.length);
    const targetAngle = 360 - (randomIndex * segmentAngle + segmentAngle / 2);
    const totalRotation = rotation + 360 * 8 + targetAngle;

    setRotation(totalRotation);

    setTimeout(() => {
      setResult(displayRestaurants[randomIndex]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10 text-3xl">
          📍
        </div>

        {/* Wheel */}
        <div
          ref={wheelRef}
          className="relative rounded-full border-4 border-gray-800 shadow-2xl"
          style={{
            width: "320px",
            height: "320px",
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
              : "none",
            background: `conic-gradient(${displayRestaurants
              .map(
                (_, i) =>
                  `${COLORS[i % COLORS.length]} ${i * segmentAngle}deg ${(i + 1) * segmentAngle}deg`,
              )
              .join(", ")})`,
          }}
        >
          {/* Segment Labels */}
          {displayRestaurants.map((restaurant, i) => {
            const angle = i * segmentAngle + segmentAngle / 2;
            const radius = 110;
            const x = 160 + radius * Math.cos((angle - 90) * (Math.PI / 180));
            const y = 160 + radius * Math.sin((angle - 90) * (Math.PI / 180));

            return (
              <div
                key={restaurant.id}
                className="absolute text-white text-xs font-bold text-center"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  width: "80px",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                }}
              >
                {restaurant.displayName?.text?.split(" ").slice(0, 2).join(" ")}
              </div>
            );
          })}
        </div>
      </div>

      <Button variant="primary" onClick={handleSpin} isDisabled={spinning}>
        {spinning ? "Spinning..." : "🎡 Spin!"}
      </Button>

      {result && (
        <Card className="w-full max-w-md text-center">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {result.displayName?.text}
          </h3>
          <p className="text-gray-500 text-sm mb-2">
            {result.formattedAddress}
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-500 font-semibold">
              ⭐ {result.rating}
            </span>
            <span className="text-gray-400 text-sm">
              ({result.userRatingCount?.toLocaleString()} reviews)
            </span>
          </div>
          {!isFavorite(result.id) && (
            <Button variant="primary" onClick={() => addFavorite(result)}>
              ❤️ Save to Favorites
            </Button>
          )}
          {isFavorite(result.id) && (
            <p className="text-green-500 font-medium">✓ Already in favorites</p>
          )}
        </Card>
      )}
    </div>
  );
};

export default SpinWheel;
