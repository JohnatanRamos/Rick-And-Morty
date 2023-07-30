import { Action, createReducer, on } from '@ngrx/store';
import { IResponseApi } from 'src/app/core/interfaces/IResponseApi.interface';

import * as actions from '../actions/rickAndMorty.actions';
import { ITypeFilters } from 'src/app/core/interfaces/ITypeFilters.interface';

export interface IRickAndMorty {
  responseApi?: IResponseApi;
  currentPage: number;
  options: ITypeFilters;
  notFound: boolean;
}

export const initialState: IRickAndMorty = {
  currentPage: 1,
  options: {},
  notFound: false
};

const _rickAndMortyReducer = createReducer(
  initialState,

  on(actions.setResponseApi, (state, { responseApi }) => {
    const response = structuredClone(responseApi);
    return { ...state, responseApi: response, notFound: false };
  }),

  on(actions.setPagination, (state, { currentPage }) => {
    return { ...state, currentPage };
  }),

  on(actions.setOptions, (state, { field, value }) => {
    let newOptions = { ...state.options };
    if (!value) {
      delete newOptions[field];
    } else {
      newOptions = {
        ...newOptions,
        [field]: value,
      };
    }
    return { ...state, options: { ...newOptions } };
  }),

  on(actions.resetValues, () => {
    return { currentPage: 1, options: {}, notFound: false };
  }),

  on(actions.notFoundValue, (state) => {
    return {...state, notFound: true};
  })
);

export function cartReducer(state: any, action: Action) {
  return _rickAndMortyReducer(state, action);
}
