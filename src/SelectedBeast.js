import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {

    render () {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.props.showModal}
            onHide={this.props.removeModal}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.beast?.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img style={{height:200, width:200}} src={this.props.beast?.src} alt={this.props.beast?.description}></img>
              <p>
                {this.props.beast?.description}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.removeModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default SelectedBeast;
