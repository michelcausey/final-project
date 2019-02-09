import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./style.css";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="modal-container">
        <Button color="warning" id="modal-button" onClick={this.toggle}>click here to open map </Button>
        <Modal size="lg" id="modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h1>View Map</h1></ModalHeader>
          <ModalBody>
            <img id="modal-image" src="images/mapV3.png" alt="the map"></img>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;