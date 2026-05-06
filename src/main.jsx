import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CurrentForm } from './Form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <h1>CV Resume project</h1>
    <CurrentForm />
  </StrictMode>,
)
