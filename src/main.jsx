import './index.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
   
 
)
