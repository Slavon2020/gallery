import { constants } from "./constants";

const initialStore = {
	images: [],
	isLoading: false,
	clientQuery: '',
	totalHits: 0
}

export const reducer = (state = initialStore, action) => {
	switch (action.type) {
		case constants.SET_IMAGES:
			return {...state, images: action.payload}
		case constants.ADD_IMAGES:
			return {...state, images: [...state.images, ...action.payload]}
		case constants.IMAGES_REQUEST:
			return {...state, isLoading: true}
		case constants.IMAGES_LOAD_SUCCESS:
			return {...state, isLoading: false}
		case constants.IMAGES_LOAD_FAILURE:
			return {...state, isLoading: false}
		case constants.SET_CLIENT_QUERY:
			return {...state, clientQuery: action.payload}
		case constants.SET_TOTAL_HITS:
			return {...state, totalHits: action.payload}
		default:
			return state;
	}
}