import { legacy_createStore } from "redux";
import { Reducer } from "./Reducer";

export const myStore = legacy_createStore(Reducer);
