import { Row, Col, Table, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectJointOrders } from '../../store/selectors'
import { getOrderColumsList } from './getOrderColums'
import { fetchJointListOTW } from '../../store/actions/jointActions'

export default function OrderList() {
    const list = useSelector(selectJointOrders)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const columns = getOrderColumsList(dispatch, navigate)

    useEffect(() => {
        dispatch(fetchJointListOTW())
    }, [dispatch])

    return (
        <div style={{ height: '100vh' }}>
            <Row justify='center'>
                <Col>
                    <Button type="primary">
                        <Link to='/create_order'>Add Order</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={10}>
                    <Table
                        pagination={{ hideOnSinglePage: true }}
                        size='middle' rowKey={'id'}
                        columns={columns}
                        dataSource={list}
                    />
                </Col>
            </Row>
        </div>
    )
}