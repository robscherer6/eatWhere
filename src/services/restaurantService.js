const API_KEY =  import.meta.env.VITE_GOOGLE_PLACES_API_KEY
const BASE_URL = 'https://places.googleapis.com/v1'

export const searchNearbyRestaurants = async (location, filters = {}) => {
    const { cuisine = '', distance = 5000 } = filters

}