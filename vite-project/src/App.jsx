import './App.css';
import Header from './componentes/Header';
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from 'react';

function App() {
  let produtos = {
    "items": [
      {
        "name": "Combos",
        "cover":"https://live.staticflickr.com/65535/54028546313_1a0e32232a_b.jpg",
      },
      {
        "name": "Tacos",
        "cover": "https://live.staticflickr.com/65535/54027414257_dcb8380df7_b.jpg",
      },    
      {
        "name": "Burrito",
        "cover": "https://live.staticflickr.com/65535/54028546328_e27df6cf57_b.jpg",
      },    
      {
        "name": "Quesadilla",
        "cover": "https://live.staticflickr.com/65535/54028748940_68f82b6dcd_b.jpg",
      },    
      {
        "name": "Nachos",
        "cover": "https://live.staticflickr.com/65535/54028748920_f7f46144c0_b.jpg",
      }
    ]
  };

  const scrollRef = useRef(null);
  const [viewportRef, setViewportRef] = useState(null);

  useEffect(() => {
    if (scrollRef.current) {
      setViewportRef(scrollRef.current);
    }
  }, []);

  return (
    <>
      <Header />
      <div style={{ overflowY: "scroll", height: "100vh" }} ref={scrollRef}>
        {
          produtos.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }}  // Fica visível e move-se para sua posição original
              transition={{ duration: 0.8 }}  // Controla a duração da animação
              viewport={{ root: viewportRef, once: true }}  // `once: true` faz a animação ocorrer apenas uma vez
              className='flex items-center justify-center flex-col h-screen'
            >
              <img className='w-11/12' src={item.cover} alt={`${item.name} cover`} />
              <div className="text-center flex flex-col items-center">
                <h2 className="text-green-600 text-7xl">
                  {item.name}
                </h2>
                <hr className="header-hr bg-red-600 w-3/4" />
                <p className="text-xl text-red-600">Ver Mais</p>
                <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#dc2626">
                  <path d="M4 8L12 16L20 8" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </motion.div>
          ))
        }
      </div>
    </>
  );
}

export default App;
