import '../../App.css'
import { Form, Select, Space, Button, Input, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectOrderEdit, selectOptions } from '../../store/selectors'
import { fetchJointListTbWtDs } from '../../store/actions/jointActions'
import { save, fetchOneOrder } from '../../store/actions/orderActions'
const { Option } = Select

export default function OrderForm() {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { id } = useParams()

    const orderEdit = useSelector(selectOrderEdit)
    const options = useSelector(selectOptions)

    function onFormSubmit(value) {
        let i = 1
        const dishList = value.dishes.map((dish) => {
            return {
                id: i++,
                count: parseInt(dish.count),
                dishId: dish.dishId
            }
        })
        const order = {
            ...orderEdit,
            ...value,
            "dishes": dishList
        }
        dispatch(save(order))
        navigate('/')
    }

    useEffect(() => {
        if (id && !orderEdit?.id) {
            dispatch(fetchOneOrder(id))
        }
    }, [dispatch, id, orderEdit?.id])

    useEffect(() => {
        dispatch(fetchJointListTbWtDs())
    }, [dispatch])

    if (id && !orderEdit?.id) {
        return <LoadingOutlined style={{ fontSize: 50 }} />
    }

    return (
        <Row
            justify="center"
        >
            <Col lg={8}
                md={12}
                sm={16}>
                <Form
                    className='margin-top-30'
                    form={form}
                    layout="horizontal"
                    onFinish={onFormSubmit}
                    initialValues={orderEdit}>
                    <Form.Item
                        name="tableId"
                        label="Chose Table"
                        rules={[
                            {
                                required: true,
                                message: 'You have to chose Table',
                            },

                        ]}
                    >
                        <Select
                            style={{
                                width: 200,
                            }}
                            options={options.table}
                        />
                    </Form.Item>
                    <Form.Item
                        name="waiterId"
                        label="Chose Waiter"
                        rules={[
                            {
                                required: true,
                                message: 'You have to chose Waiter',
                            },

                        ]}
                    >
                        <Select
                            style={{
                                width: 200,
                            }}
                            options={options.waiter}
                        />
                    </Form.Item>
                    <h5> Chose Dishes </h5>

                    <Form.List
                        name="dishes"
                    >
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((field) => (
                                    <Space key={field.key} align="baseline" wrap>
                                        <Form.Item
                                            noStyle
                                            shouldUpdate={(prevValues, curValues) =>
                                                prevValues.waiterId === curValues.waiterId
                                            }
                                        >
                                            {() => (
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'dishId']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Missing sight',
                                                        },

                                                    ]}
                                                >
                                                    <Select
                                                        placeholder='chose dishes'
                                                        style={{
                                                            width: 200,
                                                        }}
                                                    >
                                                        {(options.dish).map((item) => (
                                                            <Option key={item.value} value={item.value}>
                                                                {item.label}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            )}
                                        </Form.Item>
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'count']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing price',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Input dish count' />
                                        </Form.Item>

                                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                                    </Space>
                                ))}

                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add Dish
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Form.Item>

                </Form>
            </Col>
        </Row>
    )
}