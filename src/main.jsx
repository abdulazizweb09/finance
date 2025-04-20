import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
