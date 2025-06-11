import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import { Homepage } from './pages/Homepage/Homepage'
import { ROUTES } from './constants/routes'

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
