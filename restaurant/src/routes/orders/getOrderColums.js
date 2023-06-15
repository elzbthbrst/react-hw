import { Button, Space } from "antd";
import {WalletOutlined, EditOutlined}  from '@ant-design/icons'



import { clearBillOrder, clearEditOrder } from '../../store/actions/orderActions'




export function getOrderColumsList(dispatch, navigate) {

    function onBillBtnClick(order) {
        navigate(`/${order.id}/bill`)
        dispatch(clearBillOrder())
        
    }

    function onEditBtnClisck(order) {
        navigate(`/${order.id}/edit`)
        dispatch(clearEditOrder())
    }

    return [
        {
            title: 'Table',
            dataIndex: 'table',
            key: 'table',
            render: (_, order) => order.table.number, 
            align: 'center'
        },

        {
            title: 'Waiter',
            dataIndex: 'waiter',
            key: 'waiter',
            render: (_, order) => order.waiter.firstName,
            align: 'center'

        },
        
        {
            title: 'Actions',
            key: 'actions',
            render: (_, order) => (
                <Space wrap>
                    <Button onClick={() => onEditBtnClisck(order)}> <EditOutlined /> Edit </Button>
                    <Button type="primary" onClick={() => onBillBtnClick(order)}> <WalletOutlined /> Show Bill </Button>

                </Space>
            ),
            align: 'center'
        },
    ];
}


export function getOrderColumsBill() {
    return [
        {
            title: 'Dish Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'center'

        },
        
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
            align: 'center'
        },
        {
            title: 'Amount',
            key: 'amount',
            render: (_, dish) => dish.count * dish.price,
            align: 'center'

        },
    ];
}