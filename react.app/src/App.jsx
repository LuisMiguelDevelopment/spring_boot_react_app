import './App.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import ListaProductos from './page/ListaProductos';
import EditarProducto from './page/EditarProducto';
import { ProductosProvider } from './context/productoContext';
function App() {


  return (
    <>

      <ProductosProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListaProductos />} />
            <Route path='/editar/:id' element={<EditarProducto />} />
          </Routes>
        </BrowserRouter>
      </ProductosProvider>
    </>
  )
}

export default App
