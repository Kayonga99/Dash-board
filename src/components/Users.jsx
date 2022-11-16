import React from "react";
import { Button, ButtonGroup, Row, Col, InputGroup, Form, Dropdown, Card, Table } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCheck, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
    
function Dash() {
    return (
        <>
        <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
    <div className="mb-4 mb-lg-0">
        <h1>Dashboard</h1>
    </div>
</div>
        <div className="table-settings mb-4">
    <Row className="justify-content-between align-items-center">
        <Col xs={9} lg={4} className="d-flex">
            <InputGroup className="me-2 me-lg-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Search" />
            </InputGroup>
            <Form.Select className="w-25">
                <option defaultChecked>All</option>
                <option value="1">Active</option>
                <option value="2">Inactive</option>
                <option value="3">Pending</option>
                <option value="3">Canceled</option>
            </Form.Select>
        </Col>
        <Col xs={3} lg={8} className="text-end">
            <Dropdown as={ButtonGroup} className="me-2">
                <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                    <span className="icon icon-sm icon-gray">
                        <FontAwesomeIcon icon={faSlidersH} />
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                    <Dropdown.Item className="d-flex fw-bold">
                        10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                    <span className="icon icon-sm icon-gray">
                        <FontAwesomeIcon icon={faCog} />
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                    <Dropdown.Item className="d-flex fw-bold">
                        10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
    </Row>
</div>
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
    <Card.Body>
        <Table hover className="user-table align-items-center">
            <thead>
                <tr>
                    <th className="border-bottom">Name</th>
                    <th className="border-bottom">Email</th>
                    <th className="border-bottom">Course</th>
                    <th className="border-bottom">Enrollment date</th>
                </tr>
                
            </thead>
            <tbody>
            <tr>
    <td>
        <Card.Link className="d-flex align-items-center">
            {/* <Image src={} className="user-avatar rounded-circle me-3" /> */}
            <div className="d-block">
                <span className="fw-bold">Kayonga Chiteta</span>
            </div>
        </Card.Link>
    </td>
    <td>Student@email.com</td>
    <td>Student's course</td>
    <td>January 20, 2022</td>
</tr>
            </tbody>
        </Table>
    </Card.Body>
</Card>
</>
    )
}

export default Dash;