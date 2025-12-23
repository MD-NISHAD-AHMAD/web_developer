import { createRoot } from 'react-dom/client';
import {App} from './App.jsx';

import { CreateComponentsContext } from './Context/CreateComponentsContext.jsx';

createRoot(document.getElementById('root')).render(
  <CreateComponentsContext>
    <App />
  </CreateComponentsContext>
);
