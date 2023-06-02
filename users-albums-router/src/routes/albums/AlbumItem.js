import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setAlbumItem } from "../../store/actions/galleryActions"

export default function AlbumItem({ album }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function onAlbumBtnClick() {
        dispatch(setAlbumItem(album))
        navigate(`/users/${album.userId}/albums/${album.id}/gallery`)
    }
    return (
        <li>{album.title} <button onClick={onAlbumBtnClick}>Chose album</button></li>
    )
}