
import * as types from './actionTypes';
import authorApi  from '../api/mockAuthorApi';

// Action Creators...

export function beginAjaxCall() {
    return {
                type: types.BEGIN_AJAX_CALL 
           };
}

export function ajaxCallError() {
    return {
                type: types.AJAX_CALL_ERROR 
           };
}
