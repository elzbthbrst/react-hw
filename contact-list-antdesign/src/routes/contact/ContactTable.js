
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchList } from '../../store/actions/contactActions'

import { Table, Col, Row, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom'

import { getContactColumns } from './getContactColumns'



export default function ContactTable() {
    const list = useSelector((state) => state.contact.list)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const columns = getContactColumns(dispatch, navigate)


    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])


    return (
        <>
            <Row justify='center'>
                <Col>
                    <Button type="primary">
                        <Link to='/contact/create'>Add New Contact</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={16}>
                    <Table size='middle' rowKey={'id'} columns={columns} dataSource={list} />
                </Col>
            </Row>
        </>

    )
} 