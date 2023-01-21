import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/App.jsx';
import reportWebVitals from './test/reportWebVitals';

// * --> Estilos
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@picocss/pico';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

reportWebVitals();
