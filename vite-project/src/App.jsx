import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import UserContext from './contexts/UserContext.js'


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


  return (
    <>
      <Header />
      <UserContext.Provider value={produtos}>
        <Home />
      </UserContext.Provider>
    
    </>
  );
}

export default App;
