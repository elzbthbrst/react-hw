import { Checkbox, Button, Space } from "antd";
import { fetchDelete, clearEditTodo, toggleBackground} from '../../store/actions/todoActions'
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';



export function getColumns(dispatch, navigate) {
    function onDeleteClick(todo) {
        dispatch(fetchDelete(todo))
    }

    function onEditBtnClisck(todo) {
        navigate(`/todo/${todo.id}/edit`)
        dispatch(clearEditTodo())
    }

    function onTodoClick(todo) {
        dispatch(toggleBackground(todo))
    }

    return [
        {
            title: 'Done',
            dataIndex: 'done',
            key: 'done',
            render: (value, todo) => <Checkbox onClick={() => onTodoClick(todo)} checked={value}/>
        }, 
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',

        },
        {
            title: 'Actions',
            key: 'actions',
        render: (value, todo) => (
            <Space wrap>
                <Button onClick={() => onEditBtnClisck(todo)}>  Edit <EditOutlined /></Button>
                <Button danger onClick={() => onDeleteClick(todo)}> Delete <DeleteOutlined /></Button> 
            </Space>
        )
        
        },
    ];
}