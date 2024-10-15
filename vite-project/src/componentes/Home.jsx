
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Home(){
    const scrollRef = useRef(null);
    const [viewportRef, setViewportRef] = useState(null);
  
    useEffect(() => {
      const setViewport = () => {
        setTimeout(() => {
          if (scrollRef.current) {
            setViewportRef(scrollRef.current);
          }
        }, 2000); // Espera 2 segundos antes de executar
      };
    
      setViewport(); // Chama a função
    }, []);
    const produtos = useContext(UserContext);
    return(
        <div style={{ overflowY: "scroll", overflowX: "hidden", height: "100vh" }} ref={scrollRef}>
        {
              produtos.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }}  // Fica visível e move-se para sua posição original
                  transition={{ duration: 0.8 }}  // Controla a duração da animação
                  viewport={{ root: viewportRef, once: true }}  // `once: true` faz a animação ocorrer apenas uma vez
                  className='flex items-center justify-center flex-col h-5/6s'
                >
                  <img className='w-full' src={item.cover} alt={`${item.name} cover`} />
                  <div className="text-center flex flex-col items-center">
                    <h2 className="text-green-600 text-5xl">
                      {item.name}
                    </h2>
                    <hr className="header-hr bg-red-600 w-3/4" />
                    <p className="text-xl text-red-600">Ver Mais</p>
                    <svg className="w-5 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#dc2626">
                      <path d="M4 8L12 16L20 8" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </motion.div>
              ))
            }
          </div>
    )
}