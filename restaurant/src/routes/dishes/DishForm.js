import { Button, Row, Col, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { fetchOneWDish, save } from '../../store/actions/dishActions'

import {selectDishEdit} from '../../store/selectors'


const DISH_PRICE_TEMLATE = /^\d{1,2}$/

export default function DishForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const dishEdit = useSelector(selectDishEdit)
    let { id } = useParams()

    useEffect(() => {
        if (id && !dishEdit?.id) {
            dispatch(fetchOneWDish(id))
        }
    }, [dispatch, id, dishEdit?.id])

    function onFinish(value) {
        const dish = {
            ...dishEdit,
            ...value
        }

        dispatch(save(dish))
        navigate('/dishes')

    }

    if (id && !dishEdit?.id) {
        return <div>Loading... </div>
    }


    return (
        <Row justify='center'>
        <Col span={8}>
            <Form
                name="basic"
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                style={{ maxWidth: 600, marginTop: '30px'}}
                initialValues={dishEdit}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Dish name"
                    name="name"
                    rules={[
                        {
                            min: 4,
                            message: 'Dish name must be > 3 symbols',
                        },
                        {
                            required: true,
                            message: 'Please input dish name!',
                        },
                    ]}
                >
                    <Input placeholder='Dish Name' />
                </Form.Item>

                

                <Form.Item
                    label="Dish description"
                    name="description"
                    rules={[
                        () => ({
                            validator(_, value) {
                                let description = value.split(' ')
                                if(description.length <= 5) {
                                    return Promise.reject(new Error('Description must be longer then 5 words'));
                                }
                                return Promise.resolve();
                            },
                        }),
                        {
                            required: true,
                            message: 'Please input dish description!',
                        },
                    ]}
                >
                    <Input placeholder='Dish description'/>
                </Form.Item>

                <Form.Item
                    label="Dish price"
                    name="price"
                    rules={[
                        {
                            pattern: DISH_PRICE_TEMLATE,
                            message: 'Dish price must be < 3 symbols',
                        },
                        {
                            required: true,
                            message: 'Please input dish price!',
                        },
                    ]}
                >
                    <Input placeholder='Dish price' />
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