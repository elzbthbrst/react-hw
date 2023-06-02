import { createSelector } from 'reselect'

export const selectUsers = state => state.gallery.usersList
export const selectAlbums = state => state.gallery.albumsList
export const selectPhotos = state => state.gallery.galleryList
export const selectAlbumItem = state => state.gallery.albumsItem

export const selectGallery = createSelector(
    selectPhotos,
    selectAlbumItem,
    (galleryList, album) =>{
        return galleryList.filter(gallery => gallery.albumId === album.id)
    }
)
