import { Button, Space } from "antd";

import { deleteWaiter, clearEditWaiter } from '../../store/actions/waiterActions'
import { EditOutlined, DeleteOutlined}  from '@ant-design/icons'





export function getWaiterColumns(dispatch, navigate) {



    function onDeleteClick(waiter) {
        dispatch(deleteWaiter(waiter))
    }

    function onEditBtnClisck(waiter) {
        navigate(`/waiters/${waiter.id}/edit`)
        dispatch(clearEditWaiter())
    }


    return [
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            sorter: (x, y) => x.firstName.localeCompare(y.firstName),
            key: 'firstName',
            align: 'center'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            align: 'center'

        },
        {
            title: 'Actions',
            key: 'actions',
            align: 'center',
            render: (_, waiter) => (
                <Space wrap>
                    <Button onClick={() => onEditBtnClisck(waiter)}> <EditOutlined /> Edit </Button>
                    <Button danger onClick={() => onDeleteClick(waiter)}> <DeleteOutlined />  Delete </Button>
                </Space>
            )

        },
    ];
}