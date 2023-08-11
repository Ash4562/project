import React from 'react'
import Register from './pages/register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
import "react-toastify/dist/ReactToastify.css"
import Dashboard from './pages/Dashboard'
const App = () => {
  return <>


    <BrowserRouter>
      <Register />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}
export default App
