import '../../styles/App.css'
import { useEffect } from "react"
import { fetchGalleryList } from "../../store/actions/galleryActions"
import { useSelector, useDispatch } from 'react-redux'
import GalleryItem from "../gallery/GalleryItem"
import { useParams, useNavigate } from "react-router-dom"
import {selectAlbumItem, selectGallery } from "../../selectors/gallery"

export default function Gallery() {
    const albumItem = useSelector(selectAlbumItem)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { albumId } = useParams()
    const filterPhotos = useSelector(selectGallery)

    useEffect(() => {
        if (albumId) {
            dispatch(fetchGalleryList())
        }

    }, [dispatch, albumId])


    function onBtnClick() {
        navigate(`/users/${albumItem.userId}/albums`)
    }
    
    return (
        <div className='gallery-container'>
            <button className='btn-gallery' onClick={onBtnClick}>Return to Albums</button>

            <div className='gallery-photos' >
                {filterPhotos.map(photo => <GalleryItem photo={photo} key={photo.id} />)}
            </div>
        </div>



    )
}
