import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import { State } from "./state";
const imoveisst = 'imoveisst'

const persistConfig = {
  key: imoveisst,
  transforms: [
    encryptTransform({
      secretKey: imoveisst,
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
  storage,
};

const persistedReducer = persistReducer(persistConfig, State.reducer);

const makeStore = () =>
  configureStore({
    reducer: {
      [State.name]: persistedReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

const store = makeStore();
let persistor = persistStore(store)

export { store, persistor };


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
