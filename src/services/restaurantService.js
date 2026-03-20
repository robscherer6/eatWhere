const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
const BASE_URL = "https://places.googleapis.com/v1";

export const searchNearbyRestaurants = async (location, filters = {}) => {
  const { cuisine = "", distance = 5000 } = filters;

  const body = {
    includedTypes: cuisine ? [cuisine] : ["restaurant"],
    maxResultCount: 20,
    locationRestriction: {
      circle: {
        center: {
          latitude: location.lat,
          longitude: location.lng,
        },
        radius: distance,
      },
    },
  };

  const response = await fetch(`${BASE_URL}/places:searchNearby`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.rating,places.userRatingCount,places.formattedAddress,places.types,places.regularOpeningHours,places.photos",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("failed to fetch restaurant data");
  }

  const data = await response.json();
  return data.places || [];
};

export const geocodeLocation = async (locationString) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationString)}&key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to geocode location");
  }

  const data = await response.json();

  console.log('Geocoding response:', data) // ← add this
  console.log('Geocoding status:', data.status) // ← and this

  if (data.results.length === 0) {
    throw new Error("Location not found");
  }

  return data.results[0].geometry.location;

};
