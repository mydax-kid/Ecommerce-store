"use client";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function ContextProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading='Loading...' persistor={persistor}>
        <div>
          {children}
        </div>
      </PersistGate>
    </Provider>
  );
}
