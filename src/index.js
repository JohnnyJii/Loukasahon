import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import './index.css'
import './App.css';

ReactDOM.render(<BrowserRouter>
                <App />
                </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
