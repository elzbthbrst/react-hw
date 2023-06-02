
import './styles/App.css';
import { NavLink, Routes, Route } from 'react-router-dom'
import UsersRoutes from './routes/users/UsersRoutes'
import Home from './routes/Home';
import NotFound from './routes/NotFound';

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <NavLink to='/'>
          Home
        </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/users/*' element={<UsersRoutes />}></Route>
        <Route path='/*' element={<NotFound />}></Route>

      </Routes>


    </div>
  );
}

export default App;
