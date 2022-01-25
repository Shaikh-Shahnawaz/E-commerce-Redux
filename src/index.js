import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


//Redux

import { Provider } from "react-redux";
import {store} from './ReduxToolkit/store/store.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
