import {
   GET_ALL_BIKES,
   GET_ALL_BIKES_ERROR,
   GET_ALL_ACCESSORIES,
   GET_ALL_ACCESSORIES_ERROR,
    GET_SEARCH_RESULTS,
   GET_SEARCH_RESULTS_ERROR
} from '../actions/types';

const initialState = {
   Bikes: [],
   Accessories: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
   SearchResults: [],
   loading: true,
};

export default function (state = initialState, action) {
   const { type, payload } = action;
   switch (type) {
      case GET_ALL_BIKES:
         return {
            ...state,
            Bikes: payload,
            loading: false,
         };
      case GET_ALL_BIKES_ERROR:
         return {
            ...state,
            Bikes: [],
            loading: false,
         };
       case GET_SEARCH_RESULTS:
         return {
            ...state,
            SearchResults: payload,
            loading: false,
         };
      case GET_SEARCH_RESULTS_ERROR:
         return {
            ...state,
            SearchResults: [],
            loading: false,
         };   
      default:
         return state;
   }
}
