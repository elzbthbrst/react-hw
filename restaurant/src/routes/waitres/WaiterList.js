import { Row, Col, Table, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {fetchWaiterList} from '../../store/actions/waiterActions'
import {getWaiterColumns} from './getWaiterColums'

import {selecWaiterList} from '../../store/selectors'


export default function WaiterList() {
    const list = useSelector(selecWaiterList)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const columns = getWaiterColumns(dispatch, navigate)

    useEffect(() => {
        dispatch(fetchWaiterList())
    }, [dispatch])

   

    return (
        <div style={{height: '100vh'}}>
            <Row justify='center'>
                <Col>
                    <Button type="primary">
                        <Link to='/waiters/create'>Add Waiter</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={10}>
                    <Table pagination = {{hideOnSinglePage: true}} size='middle' rowKey={'id'} columns={columns} dataSource={list} />
                </Col>
            </Row>
        </div>

    )
}