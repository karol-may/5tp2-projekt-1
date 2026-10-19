import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { UserPage } from './pages/UserPage.tsx'
import { UserShowPage } from './pages/UserShowPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/user/:id" element={<UserShowPage/>} />        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
