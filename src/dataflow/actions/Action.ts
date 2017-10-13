/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const RESET_USERS_AND_POSTS = 'RESET_USERS_AND_POSTS';
export const RESET_USERS_AND_POSTS_SUCCESS = 'RESET_USERS_AND_POSTS_SUCCESS';
export const RESET_USERS_AND_POSTS_FAILURE = 'RESET_USERS_AND_POSTS_FAILURE';

/* ============ query logic action start ============ */
function fetchDataSuccess(response: any) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: response,
  };
}

function fetchDataFailure(error: any) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
}
/* ============ query logic action end ============ */

/* ============ create user logic action start ============ */
function createUserSuccess(response: any) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: response,
  };
}

function createUserFailure(error: any) {
  return {
    type: CREATE_USER_FAILURE,
    payload: error,
  };
}
/* ============ create user logic action end ============ */

/* ============ create post logic action start ============ */
function createPostSuccess(response: any) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: response,
  };
}

function createPostFailure(error: any) {
  return {
    type: CREATE_POST_FAILURE,
    payload: error,
  };
}
/* ============ create post logic action end ============ */

/* ============ reset logic action start ============ */
function resetSuccess(response: any) {
  return {
    type: RESET_USERS_AND_POSTS_SUCCESS,
    payload: response,
  };
}

function resetFailure(error: any) {
  return {
    type: RESET_USERS_AND_POSTS_FAILURE,
    payload: error,
  };
}
/* ============ reset logic action end ============ */
