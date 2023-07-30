import { createAction, props } from "@ngrx/store";
import { IResponseApi } from "src/app/core/interfaces/IResponseApi.interface";
import { typeFields } from "src/app/core/interfaces/ITypeFilters.interface";

export const setResponseApi = createAction('set response api', props<{ responseApi: IResponseApi }>());
export const setPagination = createAction('set pagination', props<{ currentPage: number }>());
export const setOptions = createAction('set options', props<{ field: typeFields, value: string | null }>());
