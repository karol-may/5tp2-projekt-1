import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { UserPage } from './pages/UserPage.tsx'
import { UserShowPage } from './pages/UserShowPage.tsx'
import { NavBar } from './components/NavBar.tsx'
import { UserEditPage } from './pages/UserEditPage.tsx'
import { UserNewPage } from './pages/UserNewPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className='container mt-10'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/user" element={<UserPage/>} />
          <Route path="/user/:id" element={<UserShowPage/>} />
          <Route path="/user/new" element={<UserNewPage/>} />
          <Route path="/user/:id/edit" element={<UserEditPage/>} />        
          <Route path="/user/:id/delete" element={<UserShowPage/>} />        
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)
