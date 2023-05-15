import { useState, useEffect } from 'react'

export default function TodoForm({ onFormSubmit, editTodo }) {
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (editTodo.title) {
            setTitle(editTodo.title)
        }
    }, [editTodo.title])

    function onTitleChange(e) {
        setTitle(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        setTitle('')

        const todo = {
            ...editTodo,
            title
        }

        onFormSubmit(todo)
        
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