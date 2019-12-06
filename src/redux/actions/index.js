import {SET_NAME, SET_LASTNAME, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_MEMBERSHIP, SET_FIRST_SEARCH} from "./types";

export function setFirstSearch(payload) {
  return ({type: SET_FIRST_SEARCH, payload});
}

export function setName(payload) {
  return ({type: SET_NAME, payload});
}

export function setLastName(payload) {
  return ({type: SET_LASTNAME, payload});
}

export function addToFavorites(payload) {
  return ({type: ADD_TO_FAVORITES, payload});
}

export function removeFromFavorites(payload) {
  return ({type: REMOVE_FROM_FAVORITES, payload});
}

export function setMembership(payload) {
  return ({type: SET_MEMBERSHIP, payload});
}