import React, { useState, useEffect, Fragment } from 'react';
import { fetchNews, fetchArticleById, cleanupActiveShowArticle, deleteArticleById } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from '../components/Table/Table';
import SearchInput from '../components/Search/SearchInput'
import HitsSelector from '../components/HitsSelector/HitsSelector';
import { Pagination } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import { Header, Footer } from './styles';
import Error from '../components/Error/Error';
import ShowRowModal from '../components/ShowRowModal/ShowRowModal';
import { INITIAL_HITS_PER_PAGE } from '../utils/utils';
import { selectActiveShowArticle, selectError, selectNbPages, selectNews } from '../redux/selectors';

const NewsView = () => {
    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const news = useSelector(selectNews);
    const nbPages = useSelector(selectNbPages);
    const activeShowArticle = useSelector(selectActiveShowArticle);

    const [query, setQuery] = useState('');
    const [hitsPerPage, setHitsPerPage] = useState(INITIAL_HITS_PER_PAGE);
    const [page, setPage] = useState(1);
    const [showArticleId, setShowArticleId] = useState('');
    const [deleteArticleId, setDeleteArticleId] = useState('');

    const shouldDisplayActiveShowArticle = Object.keys(activeShowArticle).length && showArticleId !== '';

    useEffect(() => {
        dispatch(fetchNews(query, hitsPerPage, page - 1)) // page-1 because on API the pageNumber starts from 0 and we display from 1 in the pagination
    }, [hitsPerPage, query, page, dispatch]);


    useEffect(() => {
        if (showArticleId) {
            dispatch(fetchArticleById(showArticleId))
        } else {
            dispatch(cleanupActiveShowArticle());
        }
    }, [dispatch, showArticleId]);


    useEffect(() => {
        if (deleteArticleId) {
            dispatch(deleteArticleById(deleteArticleId))
            setShowArticleId('');
        }
    }, [dispatch, deleteArticleId]);

    const handleQueryChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    const handleHitsPerPageChange = (e) => {
        const value = e.target.value;
        setPage(1);
        setHitsPerPage(value);
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

            <MaterialTable news={news} setShowArticleId={setShowArticleId} showArticleId={showArticleId} setDeleteArticleId={setDeleteArticleId} />
            <ShowRowModal open={shouldDisplayActiveShowArticle} handleClose={() => setShowArticleId('')} activeShowArticle={activeShowArticle} />

            <Footer>
                <Typography>Page: {page} / {nbPages} </Typography>
                <Pagination count={nbPages} size={'large'} showFirstButton showLastButton onChange={handlePageChange} />
            </Footer>

        </Fragment>
    )
}



export default NewsView;
