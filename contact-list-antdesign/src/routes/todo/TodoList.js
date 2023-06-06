
import FilterBtns from './FilterBtns'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { selectFilterList } from '../../store/selectors/todoSelector';

import { Table, Col, Row, Button } from 'antd';
import { getColumns } from './getColumns';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList, setFilter } from '../../store/actions/todoActions';

export default function TodoList() {
    const list = useSelector(selectFilterList)
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const filter = searchParams.get('filter')

    const columns = getColumns(dispatch, navigate)

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    useEffect(() => {
        if (filter) {
            dispatch(setFilter(filter))
        }

    }, [dispatch, filter])

    return (
        <>
            <Row justify='center'>
                <Col>
                    <Button type="primary">
                        <Link to='/todo/create'>Add todo</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={18}>
                    <Table size='middle' rowKey={'id'} columns={columns} dataSource={list} />
                </Col>
            </Row>

            <FilterBtns />
        </>

    )
}
