import { actions } from "./actions";

export const loadImages = (query, add) => (dispatch) => {
	dispatch(actions.imagesRequest());
    fetch(query)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(actions.imagesLoadSuccess());
          dispatch(add ? actions.addImages(result.hits) : actions.setImages(result.hits));
          dispatch(actions.setTotalHits(result.totalHits));
        },
        (error) => {
          // loggerShouldBeHere
          dispatch(actions.imagesLoadFailure());
          console.error('Cannot load data from server. ', error);
        }
      )
}