import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/app.css'
import './styles/style.css'
import './styles/responsive.css'
import App from './App.jsx'
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "AW-16520452127",
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)