import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// CSS
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Context Provider
import { AuthContextProvider } from './context/AuthContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
)
