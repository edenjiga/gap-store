import React, { Component } from 'react';
import { Col, Input } from 'reactstrap';
import styled from 'styled-components';
import { Card, CardImg, CardText, CardBody, Label } from 'reactstrap';

export const ColStyled = styled(Col)`
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

  onChange() {
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
    const { car, onClickCard } = this.props;
    return (
      <ColStyled md={4} sm={12}>
        <Card>
          <div onClick={() => onClickCard(car.id)}>
            <CardImg
              top
              width="100%"
              height="180px"
              src={car.picture}
              alt="Card image cap"
            />
            <CardBody>
              <CardText>{`Model: ${car.model}`}</CardText>
              <CardText>{`Year: ${car.year}`}</CardText>
              <CardText>{`Brand: ${car.brand}`}</CardText>
              <CardText>{`Price: ${car.price}`}</CardText>
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
