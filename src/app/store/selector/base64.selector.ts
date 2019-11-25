import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import {Base64} from '../../models/base64.model';
import {getBase63String} from '../reducers/base64.reducer';

export const getState =
  createFeatureSelector< Base64 >('base64');
export const getString = createSelector(
  getState,
  getBase63String,
);
