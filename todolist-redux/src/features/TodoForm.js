import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { create, edit, createEditTodo } from '../store/actions'

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
        if (todo.id) {
            dispatch(edit(todo))
            dispatch(createEditTodo({}))
        } else {
            const todoFromServer = {
                ...todo,
                id: Math.random()
            }

            dispatch(create(todoFromServer))
        }
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