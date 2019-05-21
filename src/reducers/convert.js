import {
  CONVERT_PENDING,
  CONVERT_REJECTED,
  CONVERT_XML_SELECTED,
  CONVERT_XSLT_SELECTED,
  CONVERT_FULFILLED,
  CONVERT_ERROR
} from '../actions/convert';

const initialState = {
  request: {
    target: '',
    source: '',
    type: 'EINVOICE'
  },
  response: {
    errorMessage: '',
    result: {
      errorMessage: '',
      htmlContent: ''
    }
  },
  isUploading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONVERT_XML_SELECTED:
      return {
        ...state,
        request: {
          ...state.request,
          source: action.payload
        }
      };
    case CONVERT_XSLT_SELECTED:
      return {
        ...state,
        request: {
          ...state.request,
          target: action.payload
        }
      };
    case CONVERT_PENDING:
      return {
        ...state,
        request: action.payload,
        isConverting: true
      };
    case CONVERT_FULFILLED:
      return {
        ...state,
        response: action.payload,
        isConverting: false
      };
    case CONVERT_REJECTED:
      return {
        ...state,
        response: action.payload,
        isConverting: false
      };
    case CONVERT_ERROR:
      return {
        ...state,
        response: {
          ...state.response,
          errorMessage: action.payload
        },
        isConverting: false
      };
    default:
      return state;
  }
};
