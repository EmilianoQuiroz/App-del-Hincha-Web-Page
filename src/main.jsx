import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// IMportamos los tamaños de la fuente Roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//Importamos el css
import './index.css'
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
)
