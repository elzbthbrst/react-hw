import { Route, Routes, NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {UnorderedListOutlined, UserOutlined, CoffeeOutlined, TableOutlined } from '@ant-design/icons'

import './App.css';
import OrderRouter from './routes/orders/OrderRouter'
import TableRouter from './routes/tables/TableRouter'
import WaiterRouter from './routes/waitres/WaiterRouter'
import DishRouter from './routes/dishes/DishRouter'


import NotFound from './routes/NotFound'


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
  lineHeight: '60px',
  color: '#323e42',
  backgroundColor: '#daf3fd',
};

const menu = [
  {
    label: <NavLink to='/'>Orders</NavLink>,
    key: 'orders',
    icon: <UnorderedListOutlined />
  },
  {
    label: <NavLink to='/tables'>Tables</NavLink>,
    key: 'tables',
    icon: <TableOutlined />
  },
  {
    label: <NavLink to='/waiters'>Waiters</NavLink>,
    key: 'waiters',
    icon: <UserOutlined />
  },

  
  {
    label: <NavLink to='/dishes'>Dishes</NavLink>,
    key: 'dishes',
    icon : <CoffeeOutlined />
  },]

function App() {
  const { Header, Content } = Layout;

  return (
    <div className='screen'>
      <Layout>
        <Header style={headerStyle}>
          <Menu  mode="horizontal" items={menu} />
        </Header>
        <Content style={contentStyle}>
          <Routes>
            <Route path='/*' element={<OrderRouter />} />
            <Route path='/waiters/*' element={<WaiterRouter />} />
            <Route path='/tables/*' element={<TableRouter />} />
            <Route path='/dishes/*' element={<DishRouter />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;




