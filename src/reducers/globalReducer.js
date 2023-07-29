import { ADD_TO_FAVORITES, GET_FAVOURITES, GET_RANDOM, GET_SEARCH, GET_TRENDING, LOADING, SET_PAGE, SET_SEARCH_QUERY } from "../utils/globalActions";

const globalReducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_TRENDING:
            return {
                ...state,
                trending: action.payload,
                loading: false,
            };
        case GET_RANDOM:
            return {
                ...state,
                random: action.payload,
                loading: false,
            };
        case GET_SEARCH:
            return {
                ...state,
                searchResults: action.payload,
                loading: false,
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favourites: [action.payload, ...state.favourites],
            };
        case GET_FAVOURITES:
            return {
                ...state,
                favourites: action.payload,
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        default:
            return state;
    }
};

export default globalReducer;
