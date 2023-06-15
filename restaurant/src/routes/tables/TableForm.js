
import { Button, Form, Input, Row, Col } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchOneTable, save } from '../../store/actions/tableActions'

import {selectTableEdit, selecTableList} from '../../store/selectors'




const TABLE_TEMLATE = /^\d{1,2}$/

export default function TableForm() {
    const tableEdit = useSelector(selectTableEdit)
    const list = useSelector(selecTableList)

    let { id } = useParams()


    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (id && !tableEdit?.id) {
            dispatch(fetchOneTable(id))
        }
    }, [dispatch, id, tableEdit?.id])

    function onFinish(value) {
        const table = {
            ...tableEdit,
            ...value
        }

        dispatch(save(table))
        navigate('/tables')

    }

    if (id && !tableEdit?.id) {
        return <div>Loading... </div>
    }


    return (
        <Row justify='center'>
            <Col span={6}>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600, marginTop: '30px' }}
                    initialValues={tableEdit}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Number"
                        name="number"
                        rules={[
                            () => ({
                                validator(_, value) {
                                    for(let table of list) {
                                        if(table.number === Number(value)) {
                                            return Promise.reject(new Error('You should create new table'));
                                        }
                                    }
                                    return Promise.resolve();
                                },
                            }),
                            {
                                pattern: TABLE_TEMLATE,
                                message: 'Must be not longer then 3 symbols'
                            },
                            {
                                required: true,
                                message: 'Please input number of table!'
                            },

                        ]}
                    >
                        <Input placeholder='Table Number'/>
                    </Form.Item>



                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>


    )
}