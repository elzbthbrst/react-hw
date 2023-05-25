export default class TodoApi {
    static API = `https://6425805b7ac292e3cf0278f7.mockapi.io/api/todo/`
    static request(error, method = 'GET', id = '', body) {
        return fetch(TodoApi.API + id, {
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
    static getList() {
       return this.request('cant retrieve todo list from server')
    }

    static create(todo) {
        return this.request('cant create todo on server', 'POST', '', todo)
    }

    static delete(id) {
        return this.request('cant delete todo on server', 'DELETE', id)
    }
    
    static update(id, todo) {
        return this.request('cant update todo on server', 'PUT', id, todo)
    }
}



