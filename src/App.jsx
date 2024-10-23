import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de datos, por ejemplo de una API
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos de carga
    
    return () => clearTimeout(timer);
    }, []);

  return (
    <>
      { loading ? <LoadingScreen /> : <Header />}
    </>
  );
}

export default App
