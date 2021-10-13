import { constants } from "./constants";

export const actions = {
    setImages,
    imagesRequest,
    imagesLoadSuccess,
    imagesLoadFailure,
    addImages,
    setClientQuery,
    setTotalHits
};

function setImages(value) {
    return {
        type: constants.SET_IMAGES,
        payload: value
    }
}

function addImages(value) {
    return {
        type: constants.ADD_IMAGES,
        payload: value
    }
}

function imagesRequest() {
    return {
        type: constants.IMAGES_REQUEST
    }
}

function imagesLoadSuccess() {
    return {
        type: constants.IMAGES_LOAD_SUCCESS,
    }
}

function imagesLoadFailure() {
    return {
        type: constants.IMAGES_LOAD_FAILURE,
    }
}

function setClientQuery(value) {
    return {
        type: constants.SET_CLIENT_QUERY,
        payload: value
    }
}

function setTotalHits (value) {
    return {
        type: constants.SET_TOTAL_HITS,
        payload: value
    }
}