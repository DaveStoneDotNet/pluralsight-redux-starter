
import * as types        from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

import authorApi         from '../api/mockAuthorApi';

// ----------------------------------------------------------------------------------------------
// Action Creators...
// ----------------------------------------------------------------------------------------------

export function loadAuthorsSuccess(authors) {
    return {
                type:    types.LOAD_AUTHORS_SUCCESS, 
                authors: authors
           };
}

// ----------------------------------------------------------------------------------------------
// Thunks...
// ----------------------------------------------------------------------------------------------

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors()
                        .then((authors) => { dispatch(loadAuthorsSuccess(authors)); })
                        .catch((error)  => { throw (error); });
    };
}