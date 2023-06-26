import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import store from './redux/store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);