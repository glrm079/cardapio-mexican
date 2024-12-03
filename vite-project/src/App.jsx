import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import UserContext from './contexts/UserContext.js';
import produtos from './data/produtos.json';

function App() {
  const [productView, setProductView] = useState("");

  return (
    <>
      <Header />
      {/* Passando 'produtos' e 'setProductView' para o contexto */}
      <UserContext.Provider value={{ produtos, setProductView }}>
        {
          productView !== "" ? 
           <>
            <Header/>
           </>
          : 
            <Home />
          
        }
      </UserContext.Provider>
    </>
  );
}

export default App;
