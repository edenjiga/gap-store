import React, { Component, Fragment } from 'react';

import { sortBy, includes, remove, findIndex } from 'lodash';
import { Container, Row } from 'reactstrap';
import { CarCard, ComparerButton, Modal } from 'components';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      carSelected: {}
    };
    this.handleCheckedCar = this.handleCheckedCar.bind(this);
    this.handleUncheckedCar = this.handleUncheckedCar.bind(this);
    this.onClickCard = this.onClickCard.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  handleCheckedCar(id) {
    const { changeSelectedCars, selectedCars = {} } = this.props;
    const { selected, carsId = [] } = selectedCars;
    if (selected < 3) {
      carsId.push(id);
      changeSelectedCars(carsId);
    }
  }

  handleUncheckedCar(id) {
    const { changeSelectedCars, selectedCars = {} } = this.props;
    const { carsId = [] } = selectedCars;
    changeSelectedCars(remove(carsId, n => n !== id));
  }

  onClickCard(id) {
    const { cars } = this.props;
    this.setState({
      modal: !this.state.modal,
      carSelected: cars[findIndex(cars, ['id', id])]
    });
  }

  onCloseModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { cars = [], searchText, selectedCars } = this.props;
    const { modal, carSelected } = this.state;

    const items = cars.filter(item =>
      includes(item.brand.toUpperCase(), searchText.toUpperCase())
    );
    return (
      <Fragment>
        <Modal
          isOpen={modal}
          onCloseModal={this.onCloseModal}
          car={carSelected}
        />
        <Container>
          <Row>
            {sortBy(items, ['brand']).map((car, index) => (
              <CarCard
                car={car}
                key={`car-${index}`}
                selected={selectedCars.selected}
                handleCheckedCar={this.handleCheckedCar}
                handleUncheckedCar={this.handleUncheckedCar}
                onClickCard={this.onClickCard}
              />
            ))}
          </Row>
        </Container>
        {selectedCars.selected && <ComparerButton />}
      </Fragment>
    );
  }
}
