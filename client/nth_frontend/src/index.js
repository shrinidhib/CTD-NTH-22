import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
// import CollapsibleExample from './App';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers/rootReducer';
import "react-toastify/dist/ReactToastify.css";

const store =createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
);
