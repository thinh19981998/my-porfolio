import { Routes, Route } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './pages/Home';
import Work from './pages/Work';
import NoMatch from './pages/NoMatch';
import Skills from './pages/Skills';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />} />
        <Route path='works' element={<Work />} />
        <Route path='skills' element={<Skills />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
