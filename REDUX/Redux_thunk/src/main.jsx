import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import { Provider } from 'react-redux'
import { mystore } from './Redux/Store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={mystore}>
    <App />
  </Provider>,
);
