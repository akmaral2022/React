import './App.css';
import { Navigation } from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import { PageAboutMe } from './pages/AboutMe';
import { PageContacts } from './pages/Contacts';
import { PagePortfolio } from './pages/Portfolio';
import { PageE } from './pages/EPage';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route index path='/' element={<PageAboutMe />} />
        <Route path='/portfolio' element={<PagePortfolio />} />
        <Route path='/contacts' element={<PageContacts />} />
        <Route path='/epage' element={<PageE />} />
      </Routes>
    </div>
  );
}

export default App;
