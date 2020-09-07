import actionTypes from "./state.types";

export const setMovie = movie => ({
    type: actionTypes.SET_MOVIE,
    payload: movie
});

export const setSearchField = searchField => ({
    type: actionTypes.SET_SEARCHFIELD,
    payload: searchField
})

export const setNominations = nominations => ({
    type: actionTypes.SET_NOMINATIONS,
    payload: nominations
  });