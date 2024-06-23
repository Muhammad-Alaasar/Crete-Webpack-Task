import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './NewCar.css'

export default function NewCar() {
    return (
        <Form className="p-5">
            <Row className="mb-5">
                <Form.Group as={Col} controlId="carType">
                    <Form.Label className="mb-3">نوع السيارة</Form.Label>
                    <Form.Select defaultValue="اختار نوع السيارة">
                        <option>اختار نوع السيارة</option>
                        <option>BWM</option>
                        <option>BWM</option>
                        <option>BWM</option>
                        <option>BWM</option>
                        <option>BWM</option>
                        <option>BWM</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="carState">
                    <Form.Label className="mb-3">حالة السيارة</Form.Label>
                    <Form.Select defaultValue="اختار حالة السيارة">
                        <option>اختار حالة السيارة</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="structurePattern">
                    <Form.Label className="mb-3">نمط الهيكل</Form.Label>
                    <Form.Select defaultValue="اختار نمط الهيكل">
                        <option>اختار نمط الهيكل</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-5">
                <Col sm={4}>
                    <Form.Label className="mb-3">السعر</Form.Label>
                    <Form.Group as={Row} controlId="price">
                        <Form.Label className="mb-3" column sm={1}>
                            من:
                        </Form.Label>
                        <Col sm={5} className="date-from">
                            <Form.Control type="text" placeholder="140,000" />
                        </Col>

                        <Form.Label className="mb-3" column sm={1}>
                            الى:
                        </Form.Label>
                        <Col sm={5} className="date-to">
                            <Form.Control type="text" placeholder="140,000" />
                        </Col>
                    </Form.Group>
                </Col>

                <Col sm={4}>
                    <Form.Label className="mb-3">الموديل</Form.Label>
                    <Form.Group as={Row} controlId="model">
                        <Form.Label className="mb-3" column sm={1}>
                            من:
                        </Form.Label>
                        <Col sm={5} className="model-from">
                            <Form.Control type="text" placeholder="2009" />
                        </Col>

                        <Form.Label className="mb-3" column sm={1}>
                            الى:
                        </Form.Label>
                        <Col sm={5} className="model-to">
                            <Form.Control type="text" placeholder="2022" />
                        </Col>
                    </Form.Group>
                </Col>

                <Form.Group as={Col} controlId="motionVector">
                    <Form.Label className="mb-3">ناقل الحركة</Form.Label>
                    <Form.Select defaultValue="اختار ناقل الحركة">
                        <option>اختار ناقل الحركة</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit" className="search-btn">
                ابحث
            </Button>
        </Form>
    )
}
