import UserSlice from "./UserSlice"
import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
const rootReducer= combineReducers({
    auth:UserSlice,
})

const persistConfig={
    key:'root',
    storage
}

const persistedReducer=persistReducer(persistConfig,rootReducer)
const Store =configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({

    })
})
export const persistor=persistStore(Store)
export default Store
