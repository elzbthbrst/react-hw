import ContactItem from './ContactItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {fetchList} from '../store/actions/contactActions'

export default function ContactTable() {
    const list = useSelector((state) => state.contact.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])


    return (
        <table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map(contact => <ContactItem key={contact.id} contact={contact} />)}
            </tbody>
        </table>
    )
}