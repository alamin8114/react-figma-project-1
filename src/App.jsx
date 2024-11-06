import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './LayoutOne/LayoutOne'
import MobleRes from './components/Mobleres/MobleRes'
import Home from './pages/Home'

function App() {
 const myRoute =createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<LayoutOne/>}>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Mobile' element={<MobleRes/>}/>
      </Route>
  )
 )

  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
