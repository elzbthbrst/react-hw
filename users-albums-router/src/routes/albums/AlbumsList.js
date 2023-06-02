import { useEffect } from "react"
import { fetchAlbumsList } from "../../store/actions/galleryActions"
import { useSelector, useDispatch } from 'react-redux'
import AlbumItem from "./AlbumItem"
import { useParams, useNavigate} from "react-router-dom"
import { selectAlbums } from "../../selectors/gallery"


export default function AlbumsList() {
    const albumsList = useSelector(selectAlbums)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { id } = useParams()
    const filterAlbums = albumsList.filter(album => album.userId === Number(id))

    useEffect(() => {
        if (id) {
            dispatch(fetchAlbumsList())
        }
    }, [dispatch, id])

    function onBtnClick() {
        navigate('/users')
    }


    return (
        <ul >
            <button onClick={onBtnClick}>Return to Users</button>
            {filterAlbums.map(album => <AlbumItem album={album} key={album.id} />)}
        </ul>


    )
}
