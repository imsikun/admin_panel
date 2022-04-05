import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import NewP from './pages/new/NewP';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userId' element={<Single />} />
            <Route path='new' element={<NewP />} />
          </Route>
          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':productId' element={<Single />} />
            <Route path='new' element={<NewP />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
