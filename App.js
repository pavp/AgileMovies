import React from "react";
import RootNavigation from "@navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import configureStore from "@store";
import Axios from "@interceptor";

const { store, persistor } = configureStore();

const AgileMovies = () => {
  Axios.Interceptor(store);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={undefined} persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default AgileMovies;
