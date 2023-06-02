import { Routes, Route } from 'react-router-dom'
import AlbumsList from './AlbumsList'
import Gallery from '../gallery/Gallery'
import NotFound from '../NotFound'

export default function AlbumsRouter() {
    return (
        <Routes>
            <Route path='/' element={<AlbumsList />}></Route>
            <Route path='/:albumId/gallery/*' element={<Gallery />}></Route>
            <Route path='/*' element={<NotFound />}></Route>

        </Routes>
    )
}