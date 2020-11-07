import React, { useState, useEffect } from 'react';
import { fetchNews } from '../redux/action';
import { useSelector, useDispatch, connect } from 'react-redux' ;
import MaterialTable from '../components/Table/Table';
import SearchInput from '../components/Search/SearchInput'
import SelectHits from '../components/SelectHits/SelectHits' ;
import { Dropdown, Menu } from 'semantic-ui-react' ;


const NewsView = () => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const news = useSelector(state => state.news);
    const pending = useSelector(state => state.pending);
    const nbPages = useSelector(state => state.nbPages);

    const [query, setQuery] = useState('');
    const [hitsPerPage, setHitsPerPage] = useState(50);
    const [page, setPage] = useState(0);


    useEffect(() => {
        dispatch(fetchNews(query, hitsPerPage, page))
    }, []);// eslint-disable-line


    const handleQueryChange = (value) => {
        setQuery(value);
        dispatch(fetchNews(value, hitsPerPage, page))
    }

    const handleHitsPerPageChange = (value) => {
      console.log("hits", value) ;
        setPage(0);
        setHitsPerPage(value);
        dispatch(fetchNews(query, value, 0))
    }

    const handlePageChange = (value) => {
        setPage(value);
        dispatch(fetchNews(query, hitsPerPage, value))
    }



 

    return (
        <div >
            <SelectHits hitsPerPage={hitsPerPage}   onChange={handleHitsPerPageChange} />
            {/* <Menu compact style={{ marginLeft: 15 }}>
    <Dropdown text='hitsPerPage' options={BidOptions} value={hitsPerPage} onChange={e=>handleHitsPerPageChange(e.target.value)} simple item />
  </Menu> */}
            <SearchInput type="text" value={query} onChange={e => handleQueryChange(e.target.value)} />
            <select value={page} onChange={e => handlePageChange(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value={nbPages-1}>{nbPages-1}</option>
            </select>
           
             <MaterialTable news={news} />
        </div>
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
