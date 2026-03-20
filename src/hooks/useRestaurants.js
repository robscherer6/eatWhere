import { useContext } from "react";
import RestaurantContext from '../context/RestaurantContext'

const useRestaurants = () => {
    const context = useContext(RestaurantContext)

    if (!context) {
        throw new Error('useRestaurants must be used within a RestaurantProvider')
    }
    return context
}

export default useRestaurants