// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './paginas/NavBar'
import HomePage from './paginas/HomePage'
import BlogUnitario from './paginas/BlogUnitario'
import Formulario from './paginas/Formulario'
import EditarBlog from './paginas/EditarBlog'

function App() {

  const buscarBlog = (datoBusqueda) => {
    console.log(datoBusqueda)
  }

  return (
    <BrowserRouter>
      <NavBar buscar={buscarBlog} />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/view/blog/:id' element={ <BlogUnitario /> } />
        <Route path='/edit/blog/:id' element={ <EditarBlog /> } />
        <Route path='/crear' element={<Formulario/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
