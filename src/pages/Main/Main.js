import React, { Component, Fragment } from 'react';

import { sortBy, includes, remove } from 'lodash';
import { Container, Row } from 'reactstrap';
import { CarCard, ComparerButton } from 'components';

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedCar = this.handleCheckedCar.bind(this);
    this.handleUncheckedCar = this.handleUncheckedCar.bind(this);
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

  render() {
    const { cars = [], searchText, selectedCars } = this.props;

    const items = cars.filter(item =>
      includes(item.brand.toUpperCase(), searchText.toUpperCase())
    );
    return (
      <Fragment>
        <Container>
          <Row>
            {sortBy(items, ['brand']).map((car, index) => (
              <CarCard
                car={car}
                key={`car-${index}`}
                selected={selectedCars.selected}
                handleCheckedCar={this.handleCheckedCar}
                handleUncheckedCar={this.handleUncheckedCar}
              />
            ))}
          </Row>
        </Container>
        {selectedCars.selected && <ComparerButton />}
      </Fragment>
    );
  }
}
