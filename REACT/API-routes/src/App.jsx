import './App.css'
import {ApiCall} from './Components/ApiCall'
import { BreadCrumb } from './Components/BreadCrumb'
import {Navbar} from './Components/Navbar'
import {AllRoutes} from './Routes/AllRoutes'

function App() {
 

  return (
    <>
      <h1>api calling</h1>
      <Navbar />
      <AllRoutes />
      <BreadCrumb />
    </>
  )
}

export default App