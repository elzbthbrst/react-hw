
import '../../styles/App.css'

export default function GalleryItem ({photo}) {

    return (
        <div > <img src={photo.url} alt={photo.title}></img></div>
    )
}