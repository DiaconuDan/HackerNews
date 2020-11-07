export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';


export const fetchNews = (query, hitsPerPage, page) => {
    return {
       type : FETCH_NEWS_REQUEST,
        query: query,
        hitsPerPage: hitsPerPage,
        page: page,
    }
}


export const fetchNewsSuccess = (news, nbPages) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        news: news,
        nbPages:nbPages
    }
}

export const fetchNewsError = (error) => {
    return {
        type: FETCH_NEWS_ERROR,
        error: error
    }
}


