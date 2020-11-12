import React, { useState, useEffect, Fragment } from 'react';
import { fetchNews} from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from '../components/Table/Table';
import SearchInput from '../components/Search/SearchInput'
import HitsSelector from '../components/HitsSelector/HitsSelector';
import { Pagination } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import { Header, Footer } from './styles';
import Error from '../components/Error/Error';
import { INITIAL_HITS_PER_PAGE } from '../utils/utils';
import {  selectError, selectNbPages, selectNews } from '../redux/selectors';

const NewsView = () => {
    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const news = useSelector(selectNews);
    const nbPages = useSelector(selectNbPages);
    
    const [query, setQuery] = useState('');
    const [hitsPerPage, setHitsPerPage] = useState(INITIAL_HITS_PER_PAGE);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        dispatch(fetchNews(query, hitsPerPage, page - 1)) // page-1 because on API the pageNumber starts from 0 and we display from 1 in the pagination
    }, [hitsPerPage, query, page, dispatch]);


    const handleQueryChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    const handleHitsPerPageChange = (e) => {
        const value = e.target.value;
        setHitsPerPage(value);
        setPage(1);
    }

    const handlePageChange = (event, value) => {
        setPage(value);
    }


    if (error) {
        return <Error error={error} />;
    }


    return (
        <Fragment>
            <Header>
                <SearchInput type="text" value={query} onChange={handleQueryChange} />
                <HitsSelector hitsPerPage={hitsPerPage} onChange={handleHitsPerPageChange} />
            </Header>

            <MaterialTable news={news}  />
            
            <Footer>
                <Typography>Page: {page} / {nbPages} </Typography>
                <Pagination count={nbPages} size={'large'}  showFirstButton showLastButton onChange={handlePageChange} page={page}/>
            </Footer>

        </Fragment>
    )
}



export default NewsView;
