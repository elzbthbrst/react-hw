import { Row, Col, Table, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {fetchDishList} from '../../store/actions/dishActions'
import {getDishColumns} from './getDishColums'

import {selecDishList} from '../../store/selectors'



export default function DishList() {
    const list = useSelector(selecDishList)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const columns = getDishColumns(dispatch, navigate)

    useEffect(() => {
        dispatch(fetchDishList())
    }, [dispatch])


    return (
        <>
            <Row justify='center'>
                <Col>
                    <Button type="primary">
                        <Link to='/dishes/create'>Add Dish</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={20}>
                    <Table  size='middle' rowKey={'id'} columns={columns} dataSource={list} />
                </Col>
            </Row>
        </>

    )
}