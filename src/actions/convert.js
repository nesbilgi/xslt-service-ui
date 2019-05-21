import axios from 'axios';
import { API_BASE } from '../config/env';

export const CONVERT_PENDING = 'CONVERT_PENDING';
export const CONVERT_FULFILLED = 'CONVERT_FULFILLED';
export const CONVERT_REJECTED = 'CONVERT_REJECTED';

export function convert(request = null) {
  return dispatch => {

    axios
      .post(`${API_BASE}/convert`, request)
      .then(result => result.data)
      .then(data =>
        dispatch({
          type: CONVERT_FULFILLED,
          payload: data
        })
      )
      .catch(errror =>
        dispatch({
          type: CONVERT_REJECTED,
          payload: errror
        })
      );
  };
}

export const CONVERT_ERROR = 'CONVERT_ERROR';
export function convertError(message = '') {
  return dispatch => {
    dispatch({
      type: CONVERT_ERROR,
      payload: message
    });
  };
}

export const CONVERT_XML_SELECTED = 'CONVERT_XML_SELECTED';
export function xmlSelected(base64 = '') {
  return dispatch => {
    dispatch({
      type: CONVERT_XML_SELECTED,
      payload: base64
    });
  };
}

export const CONVERT_XSLT_SELECTED = 'CONVERT_XSLT_SELECTED';
export function xsltSelected(base64 = '') {
  return dispatch => {
    dispatch({
      type: CONVERT_XSLT_SELECTED,
      payload: base64
    });
  };
}
