import ContactsApi from '../../api/ContactsApi'


export const ACTION_CREATE_CONTACT ='ACTION_CREATE_CONTACT'
export const ACTION_CREATE_EDIT_CONTACT ='ACTION_CREATE_EDIT_CONTACT'
export const ACTION_DELETE_CONTACT ='ACTION_DELETE_CONTACT'
export const ACTION_UPDATE_LIST ='ACTION_UPDATE_LIST'
export const ACTION_SET_CONTACT_LIST ='ACTION_SET_CONTACT_LIST'
export const ACTION_CLEAR_EDIT_CONTACT ='ACTION_CLEAR_EDIT_CONTACT'



export function fetchList() {
    return (dispatch) => {
        ContactsApi.getList().then((serverList) => {
            dispatch(setContactList(serverList))
        })
    }
}

export function fetchOneContact(id) {
    return (dispatch) => {
        ContactsApi.getOne(id).then((contact) => {
            dispatch(createEditContact(contact))
        })
    }
}

export function deleteContact(contact) {
    return (dispatch) => {
        ContactsApi.delete(contact.id).then(() => {
            dispatch(remove(contact))
        })
    }
}

export function save(contact) {
    return (dispatch) => {
        if(contact.id) {
        ContactsApi.update(contact.id, contact).then((contact) => {
            dispatch(updateList(contact))
        })
    } else {
        ContactsApi.create(contact).then((serverContact) => {
            console.log(serverContact);
            dispatch(create(serverContact)) 
        })
    }
    }
    
}



export function create(contact) {
    return{ type: ACTION_CREATE_CONTACT, payload: contact}
}

export function remove(contact) {
    return{ type: ACTION_DELETE_CONTACT, payload: contact}
}


export function createEditContact(contact) {
    return{ type: ACTION_CREATE_EDIT_CONTACT, payload: contact}
}


export function clearEditContact() {
    return{ type: ACTION_CLEAR_EDIT_CONTACT}
}


export function updateList(contact) {
    return{ type: ACTION_UPDATE_LIST, payload: contact}
}


export function setContactList(serverList) {
    return{ type: ACTION_SET_CONTACT_LIST, payload: serverList}
}

