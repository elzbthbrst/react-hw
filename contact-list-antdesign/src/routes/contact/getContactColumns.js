import {  Button, Space } from "antd";
import {clearEditContact, deleteContact} from '../../store/actions/contactActions'
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';



export function getContactColumns(dispatch, navigate) {
    function onDeleteClick(contact) {
        dispatch(deleteContact(contact))
    }

    function onEditBtnClisck(contact) {
        navigate(`/contact/${contact.id}/edit`)
        dispatch(clearEditContact())
    }


    return [
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstName',
        }, 
        {
            title: 'LastName',
            dataIndex: 'lastName',
            key: 'lastName',

        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',

        },
        {
            title: 'Actions',
            key: 'actions',
        render: (value, contact) => (
            <Space wrap>
                <Button onClick={() => onEditBtnClisck(contact)}>  Edit <EditOutlined /></Button>
                <Button danger onClick={() => onDeleteClick(contact)}> Delete <DeleteOutlined /></Button> 
            </Space>
        )
        
        },
    ];
}