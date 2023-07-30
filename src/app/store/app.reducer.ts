import { ActionReducerMap } from "@ngrx/store";
import { IRickAndMorty, cartReducer } from "./reducers/rickAndMorty.reducer";

export interface AppState {
    rickAndMorty: IRickAndMorty;
}

export const appReducers: ActionReducerMap<AppState> = {
    rickAndMorty: cartReducer
}