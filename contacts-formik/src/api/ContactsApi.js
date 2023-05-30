export default class ContactsApi {
    static API = `https://6425805b7ac292e3cf0278f7.mockapi.io/api/contacts/`
    static request(url = '', method = 'GET', body) {
        return fetch(ContactsApi.API + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }

            })
    }

    static getList() {
        return ContactsApi.request().catch(() => {
            throw new Error('cant retrieve contact list from server')
        }
        )
    }

    static create(contact) {
        return ContactsApi.request('', 'POST', contact).catch(() => {
            throw new Error('cant create contact on server')
        }
        )
    }
    static delete(id) {
        return ContactsApi.request(id, 'DELETE').catch(() => {
            throw new Error('cant delete contact on server')
        }
        )
    }

    static update(id, changes) {
        return ContactsApi.request(id, 'PUT', changes).catch(() => {
            throw new Error('cant update contact on server')
        }
        )
    }

}



