import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import './Header.scss';

import QueryItem from '../QueryItem/QueryItem';
import { loadImages } from '../../store/operations';
import { DEFAULT_QUERY, createQueryString } from '../../utils/utils';
import { actions } from '../../store/actions';

const Header = (props) => {
    const { images, setImages, loadImages, setClientQuery } = props;
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        props.loadImages(DEFAULT_QUERY);
    }, []);

    function onChange(e, getDataFromResults) {
        if (getDataFromResults) {
            setValue(e);
        } else {
            const { value } = e.target;
            if (value.length > 100) return;
            setValue(value);
            const query = createQueryString(DEFAULT_QUERY, value);
            setTimeout(clearTimeout(timeoutId));
            setTimeoutId(setTimeout(() => {
                loadImages(query);
                setClientQuery(query);
            }, 500));
        }
    }

    function onKeyPress(e) {
        if (e.key === 'Enter') {
            inputRef.current.blur();
        }
    }

    function saveResult() {
        const results = localStorage.getItem('results');
        if (!results) {
            localStorage.setItem('results', JSON.stringify({[value]: images}));
        } else {
            const parsedResult = JSON.parse(results);
            parsedResult[value] = images;
            localStorage.setItem('results', JSON.stringify(parsedResult));
        }
    }

    function getQueriesList() {
        const queriesJSON = localStorage.getItem('results');
        if(queriesJSON) {
            const queries = JSON.parse(queriesJSON);
            return (
                <ul>
                    {Object.keys(queries).map(query => 
                        <QueryItem
                            onMouseDown={inputOnMouseDown} 
                            text={query} 
                            key={query}
                        />)
                    }
                </ul> 
            ) 
        }
    }

    function inputOnMouseDown(query) {
        const results = JSON.parse(localStorage.getItem('results'));
        const images = results[query];
        setImages(images);
        setClientQuery(createQueryString(DEFAULT_QUERY, query));
        onChange(query, true);
    }

    return (
        <header className='page-header'>
            <h1 className='page-header__title'>Image Gallery</h1>

            <div className='page-header__input-section'>
                <div className='input-section__wrap'>
                    <input 
                        placeholder='search images...'
                        className='page-header__search'
                        value={value}
                        type='text'
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onKeyPress={onKeyPress}
                        ref={inputRef}
                    />

                    {value.length > 0 && images && images.length > 0 && 
                    <button
                    className='page-header__save-btn'
                    onClick={saveResult}>
                        Save
                    </button>}
                </div>

                    {images && images.length > 0 && isFocused && 
                    <div className='page-header__queries-list'>
                        {getQueriesList()}
                    </div>}
            </div>   
        </header>
    )
}

const mapStateToProps = state => {
    return {
      images: state.images,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        loadImages: (query) => dispatch(loadImages(query)),
        setImages: (images) => dispatch(actions.setImages(images)),
        setClientQuery: (query) => dispatch(actions.setClientQuery(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);