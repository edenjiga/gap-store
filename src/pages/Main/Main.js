import React, { Component } from 'react';
import { sortBy, includes } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import { CarCard } from 'components';

export default class extends Component {
  render() {
    const { cars = [], searchText } = this.props;

    const items = cars.filter(item =>
      includes(item.brand.toUpperCase(), searchText.toUpperCase())
    );
    return (
      <Container>
        <Row>
          {sortBy(items, ['brand']).map((car, index) => (
            <CarCard car={car} key={`car-${index}`} />
          ))}
        </Row>
      </Container>
    );
  }
}
