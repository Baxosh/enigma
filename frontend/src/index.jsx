import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import './static/index.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>,
)
