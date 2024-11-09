import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './LayoutOne/LayoutOne'
import Home from './pages/Home'

function App() {
 const myRoute =createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<LayoutOne/>}>
        <Route path='/Home' element={<Home/>}/>
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
