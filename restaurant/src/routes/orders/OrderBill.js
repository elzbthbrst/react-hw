import '../../App.css'

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Table, Row, Col, Typography, Button, Space } from 'antd';

import { getOrderColumsBill } from './getOrderColums'
import { selectOrderBill, selecDishList } from '../../store/selectors'
import { fetchJointListTbWtDs } from '../../store/actions/jointActions'
import { fetchOneBillOrder, deleteOrder, clearBillOrder } from '../../store/actions/orderActions'


export default function OrderBill() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dishList = useSelector(selecDishList)
    const orderBill = useSelector(selectOrderBill)
    const billColums = getOrderColumsBill()
    let { id } = useParams()

    const orderDishes = orderBill.dishes
    const dishArrOrder = getDishArr(orderDishes, dishList) 
    const totalSum = dishArrOrder.reduce((acc, dish) => {
        acc += (dish.count * dish.price)
        return acc
    }, 0)


    function getDishArr(orderDishes, dishList) {
        let dishCounts = []
        for (let orderD of orderDishes) {
            for (let dish of dishList) {
                if (orderD.dishId === dish.id) {
                    dishCounts.push({
                        ...orderD,
                        price: dish.price,
                        name: dish.name,
                    })
                }
            }
        }
        return dishCounts
    }

    function onDeleteBtnClick() {
        dispatch(deleteOrder(orderBill))
        navigate('/')
    }

    function onReturnClick() {
        dispatch(clearBillOrder())
        navigate('/')
    }

    useEffect(() => {
        if (id && !orderBill?.id) {
            dispatch(fetchOneBillOrder(id))
        }
    }, [dispatch, id, orderBill?.id])

    useEffect(() => {
        dispatch(fetchJointListTbWtDs())
    }, [dispatch])

    if (id && !orderBill?.id) {
        return <LoadingOutlined style={{ fontSize: 50 }} />
    }

    return (
        <div style={{ height: '100vh' }}>
            <Row className='margin-top-30' justify='center'>
                <Col span={10}>
                    <Table pagination={{ hideOnSinglePage: true }} dataSource={dishArrOrder} rowKey={'id'} columns={billColums} />
                </Col>

            </Row>
            <Row justify='center'>
                <Col span={4}>
                    <Typography.Title type='success' level={5}>Total : {totalSum}</Typography.Title>
                    <Space>
                        <Button onClick={onReturnClick}> Return to Orders</Button>
                        <Button danger onClick={onDeleteBtnClick}> Delete Order</Button>
                    </Space>

                </Col>
            </Row>
        </div>

    )
}