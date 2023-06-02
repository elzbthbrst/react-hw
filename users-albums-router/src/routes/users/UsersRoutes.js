import { Routes, Route } from 'react-router-dom'
import UsersList from './USersList'
import AlbumsRouter from '../albums/AlbumsRouter'
import NotFound from '../NotFound'


export default function UsersRoutes() {
    return (
        <Routes>
            <Route path='/' element={<UsersList />}></Route>
            <Route path='/:id/albums/*' element={<AlbumsRouter />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
        </Routes>
    )
}