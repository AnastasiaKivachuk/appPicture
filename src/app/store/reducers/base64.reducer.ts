import {Action} from '@ngrx/store';
import {Base64} from '../../models/base64.model';
import * as  Base64Action from '../action/base62.action';

const initialState: Base64 = {
  base63String: ''
};

export function reducer(state: Base64 = initialState, action: Base64Action.Actions) {


  switch (action.type) {
    case Base64Action.ADD_STRING:
      return {...state, ...{base63String: action.payload}};
    default:
      return state;
  }
}

export const getBase63String = (state: Base64) => state.base63String;

