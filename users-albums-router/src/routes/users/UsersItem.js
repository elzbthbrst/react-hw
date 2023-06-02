import { useNavigate} from "react-router-dom"

export default function UserItem ({user}) {
    const navigate = useNavigate()

    function onUsersBtnClick() {
        navigate(`/users/${user.id}/albums/`)
    }
    return (
        <li>{user.name} <button onClick={onUsersBtnClick}>Chose User</button></li>
    )
}