import GalleryApi from "../../api/GalleryApi"


export const ACTION_SET_USERS_LIST = 'ACTION_SET_USERS_LIST'
export const ACTION_SET_ALBUMS_LIST = 'ACTION_SET_ALBUMS_LIST'
export const ACTION_SET_GALLERY_LIST = 'ACTION_SET_GALLERY_LIST'
export const ACTION_SET_ALBUMS_ITEM = 'ACTION_SET_ALBUMS_ITEM'




export function fetchUsersList() {
    return (dispatch) => {
        GalleryApi.getUsersList().then((usersList) => {
            dispatch(setUsersList(usersList))
        })
    }
}

export function fetchAlbumsList() {
    return (dispatch) => {
        GalleryApi.getAlbumsList().then((albumsList) => {
            dispatch(setAlbumsList(albumsList))
        })
    }
}

export function fetchGalleryList() {
    return (dispatch) => {
        GalleryApi.getGalleryList().then((galleryList) => {
            dispatch(setGalleryList(galleryList))
        })
    }
}

export function setUsersList(usersList) {
    return {type: ACTION_SET_USERS_LIST, payload: usersList}
}

export function setAlbumsList(albumsList) {
    return {type: ACTION_SET_ALBUMS_LIST, payload: albumsList}
}


export function setGalleryList(galleryList) {
    return {type: ACTION_SET_GALLERY_LIST, payload: galleryList}
}

export function setAlbumItem(album) {
  return {type: ACTION_SET_ALBUMS_ITEM, payload: album}

}