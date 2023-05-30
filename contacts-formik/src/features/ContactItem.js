import { useDispatch } from 'react-redux'
import {deleteContact, createEditContact} from '../store/actions/contactActions'

export default function ContactItem({contact}) {
    const dispatch = useDispatch()
    function onDeltBtnClick() {
        dispatch(deleteContact(contact))
    }
    function onEditBtnClick() {
        dispatch(createEditContact(contact))
    }
    return (
        <tr >
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phone}</td>
            <td><button onClick ={onEditBtnClick} >Edit</button> <button onClick ={onDeltBtnClick} >Delete</button></td>
        </tr>
    )
}