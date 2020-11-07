import { FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR, FETCH_NEWS_REQUEST} from './action';

const initialState = {
    pending: false,
    news: [],
    error: null,
    nbPages: 50,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NEWS_REQUEST: 
            return {
                ...state,
                pending: true
            }
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                pending: false,
                news: action.news,
                nbPages: action.nbPages
            }
        case FETCH_NEWS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export default reducer;
