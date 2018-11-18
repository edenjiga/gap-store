import React, { Component } from 'react';
import { Col, Input } from 'reactstrap';
import styled from 'styled-components';
import { Card, CardImg, CardText, CardBody, Label } from 'reactstrap';

const ColStyled = styled(Col)`
  margin-top: 20px;
`;

export default class extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { selected, car, handleUncheckedCar, handleCheckedCar } = this.props;
    if (this.state.checked) {
      this.setState({ checked: !this.state.checked });
      return handleUncheckedCar(car.id);
    }

    if (selected > 2) return;

    this.setState({ checked: !this.state.checked });
    handleCheckedCar(car.id);
  }

  render() {
    const { car } = this.props;
    return (
      <ColStyled md={4} sm={12}>
        <Card>
          <div onClick={() => console.log('aa')}>
            <CardImg
              top
              width="100%"
              height="180px"
              src={car.picture}
              alt="Card image cap"
            />
            <CardBody>
              <CardText>Model: {car.model}</CardText>
              <CardText>Year: {car.year}</CardText>
              <CardText>Brand: {car.brand}</CardText>
              <CardText>Price: {car.price}</CardText>
            </CardBody>
          </div>
          <Label check>
            <Input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.onChange}
            />
            Comparar
          </Label>
        </Card>
      </ColStyled>
    );
  }
}
