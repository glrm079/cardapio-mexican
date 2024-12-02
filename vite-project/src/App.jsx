import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import UserContext from './contexts/UserContext.js';
import produtos from './data/produtos.json';
import ProductViewPage from './componentes/productViewPage.jsx';

function App() {
  const [productView, setProductView] = useState("");

  return (
    <>
      <Header />
      {/* Passando 'produtos' e 'setProductView' para o contexto */}
      <UserContext.Provider value={{ produtos, setProductView }}>
        {
          productView !== "" ? (
           <ProductViewPage/>
          ) : (
            <Home />
          )
        }
      </UserContext.Provider>
    </>
  );
}

export default App;
