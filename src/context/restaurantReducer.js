export const initialState = {
  restaurants: [],
  favorites: JSON.parse(localStorage.getItem('eatWhere-favorites')) || [],
  filters: {
    cuisine: '',
    distance: 5000
  },
  loading: false,
  error: null,
  searchLocation: ''
}

const restaurantReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESTAURANTS':
      return { ...state, restaurants: action.payload }

    case 'SET_LOADING':
      return { ...state, loading: action.payload }

    case 'SET_ERROR':
      return { ...state, error: action.payload }

    case 'SET_SEARCH_LOCATION':
      return { ...state, searchLocation: action.payload }

    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } }

    case 'ADD_FAVORITE': 
      { const updatedFavorites = [...state.favorites, action.payload]
      localStorage.setItem('eatWhere-favorites', JSON.stringify(updatedFavorites))
      return { ...state, favorites: updatedFavorites } }

    case 'REMOVE_FAVORITE':
      { const filteredFavorites = state.favorites.filter(item => item.id !== action.payload)
      localStorage.setItem('eatWhere-favorites', JSON.stringify(filteredFavorites))
      return { ...state, favorites: filteredFavorites } }

    default:
      return state
  }
}

export default restaurantReducer