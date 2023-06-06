import { useSearchParams } from "react-router-dom"
import { Col, Row, Space, Button } from 'antd'

export default function FilterBtns() {
    const [_, setSearchParams] = useSearchParams()
    return (
        <Row  justify="center">
            <Col >
                <Space>
                    <Button onClick={() => setSearchParams('filter=all')}>All</Button>
                    <Button onClick={() => setSearchParams('filter=done')}>Done</Button>
                    <Button onClick={() => setSearchParams('filter=active')}>Active</Button>
                </Space>
            </Col>
        </Row>


    )
}