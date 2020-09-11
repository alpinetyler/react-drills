import React from 'react';
import reactDOM from "react-dom";
import './index.css';
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import {HashRouter} from "react-router-dom";

reactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById("root")
);

registerServiceWorker();
