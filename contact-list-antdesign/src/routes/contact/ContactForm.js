
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Row, Col, Form, Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import { useDispatch, useSelector } from 'react-redux'
import { save, fetchOneContact } from '../../store/actions/contactActions'


const PHONE_TEMPLATE = /^\d{3}-\d{3}-\d{4}$/




export default function ContactForm() {
    let { id } = useParams()
    const editContact = useSelector((state) => state.contact.contactEdit)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(editContact);
    console.log(id);


    useEffect(() => {
        if (id && !editContact?.id) {
            dispatch(fetchOneContact(id))
        }
    }, [dispatch, id, editContact?.id])


    function onFinish(value) {

        const contact = {
            ...editContact,
            ...value
        }

        dispatch(save(contact))
        navigate('/contact')
    }


    if (id && !editContact?.id) {
        return <div>Loading... <LoadingOutlined /></div>
    }

    return (
        <Row justify='center'>
            <Col span={8}>
                <Form
                    name="basic"
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 16, }}
                    style={{ maxWidth: 600, marginTop: '30px'}}
                    initialValues={editContact}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="FirstName"
                        name="firstName"
                        rules={[
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
                        label="LastName"
                        name="lastName"
                        rules={[
                            {
                                min: 5,
                                message: 'LastName must be > 4 symbols',
                            },
                            {
                                required: true,
                                message: 'Please input your LastName!',
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
                                message: 'Must be 000-000-0000',
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

