import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {BrowswrRouter} from 'react-dom';
import {ContextComponents} from 'react-dom'

createRoot(document.getElementById('root')).render(
  <BrowswrRouter>
    <ContextComponents>
      <App />
    </ContextComponents>   
  </BrowswrRouter>      
  
)          