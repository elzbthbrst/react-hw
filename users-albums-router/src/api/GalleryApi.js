export default class GalleryApi {
    static API = `https://jsonplaceholder.typicode.com/`
    static request(error, url, id = '', body, method = 'GET') {
        return fetch(GalleryApi.API + url + id, {
            method: method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(error)
            })
    }
    static getUsersList() {
        return this.request('cant retrieve users list from server', 'users/')
    }
    static getOneUser(id) {
        
        return this.request('cant retrieve one user from server', 'users/', id)
    }

    static getAlbumsList(userId) {
        return this.request('cant retrieve albums list from server', 'albums/', userId)
    }
    static getOneAlbum(id) {
        return this.request('cant retrieve one album from server', 'albums/', id)
    }
    static getGalleryList() {
        return this.request('cant retrieve photos list from server', 'photos/')
    }


}



