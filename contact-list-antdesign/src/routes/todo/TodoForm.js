import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { save, fetchOneTodo } from '../../store/actions/todoActions'


import { useEffect } from 'react';

import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import { LoadingOutlined} from '@ant-design/icons';

import {selectEditTodo} from '../../store/selectors/todoSelector'


export default function TodoForm() {
    let { id } = useParams()
    const todoEdit = useSelector(selectEditTodo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (id && !todoEdit?.id) {
            dispatch(fetchOneTodo(id))
        }
    }, [dispatch, id, todoEdit?.id])



    function onFinish(value) {
        const todo = {
            ...todoEdit,
            ...value
        }

        navigate('/todo')
        dispatch(save(todo))
    }

    if (id && !todoEdit?.id) {
        return <div>Loading... <LoadingOutlined /></div>
    }

    return (
        <Row justify='center'>
            <Col span={6}>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600, marginTop: '30px' }}
                    initialValues={todoEdit}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                min: 3,
                                message: 'Must be more then 3 symbols'
                            },
                            {
                                required: true,
                                message: 'Please input your task!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="done" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Done</Checkbox>
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





