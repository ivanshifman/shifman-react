import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar />

        <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />}></Route>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>

        </Routes>

    </BrowserRouter>
       
    </>
  );
}

export default App;
