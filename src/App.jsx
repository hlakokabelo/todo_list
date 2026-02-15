import React from 'react'
import ToDoList from './pages/ToDoList'
import NavBar from './pages/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' 
            element={<><NavBar />
              <ToDoList /></>} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/register' element={<SignUpPage />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
