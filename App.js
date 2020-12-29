import React from "react";
import { StyleSheet } from "react-native";
import AppContainer from "./Navigation/NavigationConfig";
import configureStore from './Store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();


const App = () => {
  // console.log(store.products);
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
