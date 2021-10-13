import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import './ImagesList.scss';

import Image from "../Image/Image";
import { DEFAULT_QUERY, getIncrementedQueryPage } from '../../utils/utils';
import { loadImages } from '../../store/operations';
import { actions } from '../../store/actions';

const ImagesList = (props) => {

    const { images, loadImages, clientQuery, setClientQuery, totalHits } = props;

    function loadMoreImages() {
        const query = getNextQuery(clientQuery, DEFAULT_QUERY, images, totalHits);
        setClientQuery(query);
        loadImages(query, true)
    }

    function getNextQuery(clientQuery, defaultQuery, images, totalHits) {
        if (!clientQuery) {
            return getIncrementedQueryPage(defaultQuery)
        }
        if (totalHits - images.length <= 20) {
            return getIncrementedQueryPage(clientQuery) + `&per_page=${totalHits - images.length}`;
        }
        return getIncrementedQueryPage(clientQuery);
    }

    return (
        <InfiniteScroll
            className='images-list'
            dataLength={images.length}
            next={loadMoreImages}
            hasMore={totalHits - images.length > 20}
            > 

            {images.map(image => {
                const { largeImageURL } = image;
                return (
                    <Image key={uuidv4()} src={largeImageURL} />
                )
            })}

        </InfiniteScroll>
    )
}

const mapStateToProps = state => {
    return {
      images: state.images,
      clientQuery: state.clientQuery,
      totalHits: state.totalHits
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadImages: (query, add) => dispatch(loadImages(query, add)),
        setClientQuery: (query) => dispatch(actions.setClientQuery(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesList);