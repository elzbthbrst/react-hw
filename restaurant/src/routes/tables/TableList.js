import { useSelector, useDispatch } from 'react-redux';
import { Link} from 'react-router-dom'

import { useEffect } from 'react';
import { fetchTableList } from '../../store/actions/tableActions';

import { Col, Row, Button, Space } from 'antd';

import TableCard from './TableCard';

import {selecTableList} from '../../store/selectors'







export default function TableList() {
    const list = useSelector(selecTableList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTableList())
    }, [dispatch])

    return (
        <>
            <Row justify='center'>
                <Col span={16}>
                    <Button type="primary">
                        <Link to='/tables/create'>Add Table</Link>
                    </Button>
                </Col>

            </Row>
            <Row justify='center'>
                <Col span={16}>
                    <Space align="center" wrap direction="horizontal" size="small">
                        {list.map(table => <TableCard table={table} key={table.id} />)}
                    </Space>
                </Col>
            </Row>


            

        </>
    )
}