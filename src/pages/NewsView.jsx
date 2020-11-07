import React, { useState, useEffect, Fragment } from 'react';
import { fetchNews } from '../redux/action';
import { useSelector, useDispatch, connect } from 'react-redux';
import MaterialTable from '../components/Table/Table';
import SearchInput from '../components/Search/SearchInput'
import HitsSelector from '../components/HitsSelector/HitsSelector';
import { Pagination } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import { Header, Footer } from './styles';
import Error from '../components/Error/Error';
import ClipLoader from "react-spinners/ClipLoader";
import { Wrapper } from './styles';


const NewsView = () => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const news = useSelector(state => state.news);
    const pending = useSelector(state => state.pending);
    const nbPages = useSelector(state => state.nbPages);

    const [query, setQuery] = useState('');
    const [hitsPerPage, setHitsPerPage] = useState(20);
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
        setPage(1);
        setHitsPerPage(value);
    }

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    if (error) {
        return <Error />;
    }


    return (
        <Wrapper >
            <Header>
                <SearchInput type="text" value={query} onChange={handleQueryChange} />
                <HitsSelector hitsPerPage={hitsPerPage} onChange={handleHitsPerPageChange} />
            </Header>

            {pending ? <ClipLoader size={50} color={"#36D7B7"} /> :
                <Fragment>
                    <MaterialTable news={news} />
                    <Footer>
                        <Typography>Page: {page} / {nbPages} </Typography>
                        <Pagination count={nbPages} size={'large'} showFirstButton showLastButton onChange={handlePageChange} />
                    </Footer>
                </Fragment>
            }


        </Wrapper>
    )
}


const mapStateToProps = state => ({
    error: state.error,
    news: state.news,
    pending: state.pending,
})


const mapDispatchToProps = dispatch => ({
    fetchNews: (query, hitsPerPage, page) => dispatch(fetchNews(query, hitsPerPage, page)),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsView);
