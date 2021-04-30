import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./Components/App";
import 'modern-normalize/modern-normalize.css';
import { Provider } from "react-redux";

import store from './redux/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"));
