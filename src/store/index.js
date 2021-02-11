import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: [],
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (preloadedState) => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [
      thunkMiddleware,
      ...getDefaultMiddleware({serializableCheck: false}),
    ],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
  const persistor = persistStore(store);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(persistedReducer),
    );
  }

  return {store, persistor};
};
