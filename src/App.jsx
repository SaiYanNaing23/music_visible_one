import React from 'react'
import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={ <HomePage/> } />
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
