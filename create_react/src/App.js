import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/UI/NavBar/NavBar';
import { AppRouter } from './components/AppRouter';
import { AuthContext } from './contex';
import { useEffect, useState } from 'react';



function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <Router>
        <NavBar />
        <AppRouter />
      </Router>
    </AuthContext.Provider>

  );
}

export default App;