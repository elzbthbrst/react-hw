import { useEffect } from "react"
import { fetchUsersList } from "../../store/actions/galleryActions"
import {useSelector, useDispatch} from 'react-redux'
import UserItem from "./UsersItem"
import { selectUsers } from "../../selectors/gallery"

export default function UsersList() {
    const usersList = useSelector(selectUsers)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsersList())
    }, [dispatch])

    return (
        <ul>
            {usersList.map(user => <UserItem user = {user} key ={user.id}/>)}
        </ul>  
    )
}