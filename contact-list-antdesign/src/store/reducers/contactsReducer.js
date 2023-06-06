import {ACTION_CREATE_CONTACT,
    ACTION_CREATE_EDIT_CONTACT,
    ACTION_DELETE_CONTACT,
    ACTION_UPDATE_LIST,
    ACTION_SET_CONTACT_LIST,
    ACTION_CLEAR_EDIT_CONTACT
} from '../actions/contactActions'




export const DEFAULT_CONTACT = {
    "firstName":"",
    "lastName":"",
    "phone":""
}


const initialState ={
    list : [], 
    contactEdit : DEFAULT_CONTACT
}


export default function contactsReducer(state = initialState, { type, payload }) {
    switch(type) {
        case ACTION_CREATE_CONTACT: {
            return {...state,
            list: [
                ...state.list, 
                {...payload}
            ]}
        }
        case ACTION_CREATE_EDIT_CONTACT: {
            return {...state, contactEdit: payload }
        }
        case ACTION_CLEAR_EDIT_CONTACT: {
            return {...state, contactEdit: DEFAULT_CONTACT }
        }
        case ACTION_DELETE_CONTACT: {
            const newList = state.list.filter(el => el.id !== payload.id)
            return {...state, list: newList }
        }
        case ACTION_UPDATE_LIST: {
            const updateLIst = state.list.map(el => el.id === payload.id ? payload : el)
            return {...state, list: updateLIst, contactEdit : DEFAULT_CONTACT }
        }
        case ACTION_SET_CONTACT_LIST: return { ...state, list: payload }
        default: return state
    }
}