import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import HeaderProvider from './context-api/HeaderContext.jsx'
import { Internet_Status_Provider } from './context-api/InternetStatusContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Internet_Status_Provider>
        <HeaderProvider>
          <App />
        </HeaderProvider>
      </Internet_Status_Provider>
    </BrowserRouter>
  </StrictMode>
)
