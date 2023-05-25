import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { save } from '../store/actions/todoActions'

export default function TodoForm() {
    const [title, setTitle] = useState('')
    const todoEdit = useSelector((state) => state.editTodo)
    const dispatch = useDispatch()
    useEffect(() => {
        if (todoEdit.title) {
            setTitle(todoEdit.title)
        }
    }, [todoEdit.title])

    function onTitleChange(e) {
        setTitle(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        setTitle('')
        const todo = {
            ...todoEdit,
            title
        }
        dispatch(save(todo))
    }

    return (
        <form
            onSubmit={onSubmit}>
            <input type="text"
                placeholder="Введите сообщение"
                value={title}
                onChange={onTitleChange} />
        </form>
    )
}