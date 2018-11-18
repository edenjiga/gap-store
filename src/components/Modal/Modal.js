import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardText,
  Modal,
  ModalBody,
  CardImg
} from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { isOpen, onCloseModal, car } = this.props;
    return (
      <Modal isOpen={isOpen} className={this.props.className}>
        <ModalBody>
          <Card>
            <CardImg
              top
              width="100%"
              height="180px"
              src={car.picture}
              alt="Card image cap"
            />
            <CardBody>
              <CardText>Year: {car.year}</CardText>
              <CardText>Brand: {car.brand}</CardText>
              <CardText>Price: {car.price}</CardText>
              <CardText>Hourse Power: {car.hp}</CardText>
              <CardText>Gears: {car.gears}</CardText>
            </CardBody>

            <Button color="secondary" onClick={onCloseModal}>
              Close
            </Button>
          </Card>
        </ModalBody>
      </Modal>
    );
  }
}

export default ModalExample;
