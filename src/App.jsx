import React from 'react'
import  Sidebar from './components/Sidebar'
import Notesarea from './components/Notesarea'
import { BrowserRouter,Routes,Route, Navigate, } from 'react-router-dom'
import NotesContext from './components/context/NotesContext'
import Home from './components/Home'
import Edit from './components/Edit'
function App() {
  return (
   <>
    <div className='wrapper d-flex'>
      <BrowserRouter>
     
      <Routes>
      <Route path='/sidebar' element={<Sidebar/>}/>
      <Route path='/note' element={  <> <NotesContext>  <Sidebar/> <Notesarea/></NotesContext>  </>}/>
      <Route path='/edit/:id' element={  <> <NotesContext>  <Sidebar/> <Edit/> </NotesContext>  </>}/>
      <Route path='/home' element={<> <Home/></>}/>
      <Route path='*' element={<Navigate to='/home'/>}/>
      </Routes>
      </BrowserRouter>
    </div>
   </>
  )
}

export default App