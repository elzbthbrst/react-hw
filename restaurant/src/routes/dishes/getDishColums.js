import { Button, Space } from "antd";

import { deleteDish, clearEditDish } from '../../store/actions/dishActions'
import { EditOutlined, DeleteOutlined}  from '@ant-design/icons'




export function getDishColumns(dispatch, navigate) {



    function onDeleteClick(dish) {
        dispatch(deleteDish(dish))
    }

    function onEditBtnClisck(dish) {
        navigate(`/dishes/${dish.id}/edit`)
        dispatch(clearEditDish())
    }


    return [
        {
            title: 'Dish Name',
            dataIndex: 'name',
            sorter: (x, y) => x.name.localeCompare(y.name),
            key: 'name',
            width: 200
        },
        {
            title: 'Dish description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Dish price',
            dataIndex: 'price',
            key: 'price',
            width: 100,
            sorter: (x, y) => x.price - y.price,
            align: 'center'
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, dish) => (
                <Space wrap>
                    <Button onClick={() => onEditBtnClisck(dish)}> <EditOutlined /> Edit </Button>
                    <Button danger onClick={() => onDeleteClick(dish)}> <DeleteOutlined />  Delete </Button>
                </Space>
            ),
            width: 300,
            align: 'center'
        },
    ];
}