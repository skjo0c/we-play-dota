import React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

const ModalComponent = (props) => (
  <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {`${props.matchDetail.dire_name} vs ${props.matchDetail.radiant_name}`}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row className="show-grid">
          <Col xs={6}>
            <code>.col-xs-6 .col-md-4</code>
          </Col>
          <Col xs={6}>
            <code>.col-xs-6 .col-md-4</code>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default ModalComponent;
