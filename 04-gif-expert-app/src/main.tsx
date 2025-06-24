import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {GifExpertApp} from './GifExpertApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='container mt-3'>
      <GifExpertApp />
    </div>

  </StrictMode>,
)
