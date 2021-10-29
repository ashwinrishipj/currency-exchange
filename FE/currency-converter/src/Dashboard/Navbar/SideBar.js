import React, { useState } from 'react';
import { Col, Tab, Accordion, ListGroup, Dropdown, DropdownButton, ButtonGroup, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { currentPage } from '../../redux/actions';

export default function SideBar() {
    const navigationIsSet = useSelector((state) => state.toggleSideBar);

    const dispatch = useDispatch();
    return (
        <>
            <Tab.Container className="position-sticky" id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>DashBoard</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item action variant="primary" onClick={() => dispatch(currentPage("home"))}>
                                        Compare with Currencies
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="secondary" onClick={() => dispatch(currentPage("charts"))}>
                                        Chart Display
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="info" onClick={() => dispatch(currentPage("rates"))} >
                                        Current Rates
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Currency</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup.Item action variant="primary" onClick={() => dispatch(currentPage("addCurrency"))}>
                                    Add Currency
                                </ListGroup.Item>
                                <ListGroup.Item action variant="Secondary" onClick={() => dispatch(currentPage("manageCurrency"))}>
                                    Manage Currency
                                </ListGroup.Item>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Tab.Container>
        </>
    );
}
