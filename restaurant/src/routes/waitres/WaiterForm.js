import { Button, Row, Col, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import {fetchOneWaiter, save} from '../../store/actions/waiterActions'

import {selectWaiterEdit} from '../../store/selectors'


const PHONE_TEMPLATE = /^\d{3}-\d{2}-\d{2}$/
const FIRST_NAME_TEMPLATE = /^[A-Z]{1}[a-z]{2,10}$/



export default function WaiterForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const waiterEdit = useSelector(selectWaiterEdit)
    let { id } = useParams()

    useEffect(() => {
        if (id && !waiterEdit?.id) {
            dispatch(fetchOneWaiter(id))
        }
    }, [dispatch, id, waiterEdit?.id])

    function onFinish(value) {
        const waiter = {
            ...waiterEdit,
            ...value
        }

        dispatch(save(waiter))
        navigate('/waiters')

    }

    if (id && !waiterEdit?.id) {
        return <div>Loading... </div>
    }

    return (
        <Row justify='center' >
        <Col span={8}>
            <Form
                name="basic"
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                style={{ maxWidth: 600, marginTop: '30px'}}
                initialValues={waiterEdit}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="FirstName"
                    name="firstName"
                    rules={[
                        {
                            pattern: FIRST_NAME_TEMPLATE,
                            message: 'Must start from uppercase symbol',
                        },
                        {
                            min: 4,
                            message: 'FirstName must be > 3 symbols',
                        },
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            pattern: PHONE_TEMPLATE,
                            message: 'Must be 000-00-00',
                        },
                        {
                            required: true,
                            message: 'Please input your phone!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 8, span: 16, }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    </Row>
    )
}