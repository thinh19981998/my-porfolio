import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = React.lazy(() => import('./components/layout/Main'));
const Home = React.lazy(() => import('./pages/Home'));
const Work = React.lazy(() => import('./pages/Work'));
const Skills = React.lazy(() => import('./pages/Skills'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));

function App() {
  return (
    <React.Suspense>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='works' element={<Work />} />
          <Route path='skills' element={<Skills />} />s
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
