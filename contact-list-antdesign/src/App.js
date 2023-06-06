import { Route, Routes, NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd';

import './App.css';

import Home from './routes/Home'
import About from './routes/About'
import NotFound from './routes/NotFound'
import TodoRouter from './routes/todo/TodoRouter'
import ContactRouter from './routes/contact/ConracrRouter'


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};


const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '60px',
  color: '#323e42',
  backgroundColor: '#daf3fd',
};

const items = [
  {
    label: <NavLink to='/'>Home</NavLink>,
    key: 'home',
  },
  {
    label: <NavLink to='/about'>About</NavLink>,
    key: 'about',
  },

  {
    label: <NavLink to='/todo'>TodoList</NavLink>,
    key: 'todo',
  },
  {
    label: <NavLink to='/contact'>Contacts</NavLink>,
    key: 'contact',
  },]

function App() {
  const { Header, Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>
          <Menu  mode="horizontal" items={items} />
        </Header>
        <Content style={contentStyle}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/todo/*' element={<TodoRouter />} />
            <Route path='/contact/*' element={<ContactRouter />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
