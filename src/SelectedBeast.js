import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.chooseBeast.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img style={{height:200, width:200}} src={this.props.chooseBeast.src} alt={this.props.chooseBeast.description}></img>
              <p>
                {this.props.chooseBeast.description}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default SelectedBeast;
