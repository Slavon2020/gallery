import { constants } from "./constants";
import { reducer } from "./reducer";

let initialStore = {
        images: [],
        isLoading: false,
        clientQuery: ''
};

const setInitialStore = () => {
    initialStore = {
        images: [],
        isLoading: false,
        clientQuery: ''
    }
}

beforeEach(() => {
    setInitialStore();
})

describe('Testing reducer', () => {
    test('testing SET_IMAGES action', () => {
        const action = {
            type: constants.SET_IMAGES,
            payload: ['image1', 'image2', 'image3']
        }
        const newState = reducer(initialStore, action)
        expect(newState.images).toEqual(action.payload);
    });

    test('testing ADD_IMAGES action', () => {
        initialStore.images = ['image1', 'image2'];
        const payload = ['image3', 'image4'];
        const action = {
            type: constants.ADD_IMAGES,
            payload
        }
        const newState = reducer(initialStore, action);
        const expectedImagesArray = [...initialStore.images, ...payload]
        expect(newState.images).toEqual(expectedImagesArray);
    });

    test('testing IMAGES_REQUEST action', () => {
        const action = {
            type: constants.IMAGES_REQUEST
        }
        const newState = reducer(initialStore, action);
        expect(newState.isLoading).toBeTruthy();
    });

    test('testing IMAGES_LOAD_SUCCESS action', () => {
        const action = {
            type: constants.IMAGES_LOAD_SUCCESS
        }
        const newState = reducer(initialStore, action);
        expect(newState.isLoading).toBeFalsy();
    });

    test('testing IMAGES_LOAD_FAILURE action', () => {
        const action = {
            type: constants.IMAGES_LOAD_FAILURE
        };
        const newState = reducer(initialStore, action);
        expect(newState.isLoading).toBeFalsy();
    });

    test('testing SET_CLIENT_QUERY action', () => {
        const action = {
            type: constants.SET_CLIENT_QUERY,
            payload: 'testQueryString'
        }
        const newState = reducer(initialStore, action);
        expect(newState.clientQuery).toEqual(action.payload);
    });
});