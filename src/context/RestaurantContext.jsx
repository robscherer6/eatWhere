import { createContext, useReducer, useCallback } from 'react'
import restaurantReducer, { initialState } from './restaurantReducer'

const RestaurantContext = createContext()

export const RestaurantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState)

  const addFavorite = useCallback((restaurant) => {
    dispatch({ type: 'ADD_FAVORITE', payload: restaurant })
  }, [])

  const removeFavorite = useCallback((id) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id })
  }, [])

  const isFavorite = useCallback((id) => {
    return state.favorites.some(item => item.id === id)
  }, [state.favorites])

  return (
    <RestaurantContext.Provider value={{
      restaurants: state.restaurants,
      favorites: state.favorites,
      filters: state.filters,
      loading: state.loading,
      error: state.error,
      searchLocation: state.searchLocation,
      setRestaurants: (restaurants) => dispatch({ type: 'SET_RESTAURANTS', payload: restaurants }),
      setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
      setError: (error) => dispatch({ type: 'SET_ERROR', payload: error }),
      setSearchLocation: (location) => dispatch({ type: 'SET_SEARCH_LOCATION', payload: location }),
      setFilters: (filters) => dispatch({ type: 'SET_FILTERS', payload: filters }),
      addFavorite,
      removeFavorite,
      isFavorite
    }}>
      {children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantContext