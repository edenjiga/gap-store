import React from 'react';
// import axios from 'axios';
import { shallow } from 'enzyme';
import { assert, stub, spy } from 'sinon';

import CarCArd, { ColStyled } from './CarCard';
import { Card, CardImg, CardText, CardBody, Label } from 'reactstrap';

describe('CarCArd Component', () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      car: {
        id: 1,
        picture: 'https://i.ytimg.com/vi/AWZLeSyyq5E/maxresdefault.jpg',
        model: 'ABC',
        year: 1990,
        brand: 'Toyota',
        price: 2000,
        hp: 10000,
        gears: 6
      },
      handleUncheckedCar: spy(),
      handleCheckedCar: spy()
    };
    const props = Object.assign({}, defaultProps, newProps);
    const wrapper = shallow(<CarCArd {...props} />);

    return { wrapper, props };
  };

  it('should render without crashing', () => {
    const { wrapper } = makeWrapper();
    expect(wrapper).to.be.present();
  });

  it('should be a ColStyled and have a Card child', () => {
    const { wrapper } = makeWrapper();

    expect(wrapper).to.have.type(ColStyled);
    expect(wrapper)
      .to.have.props(['md', 'sm'])
      .to.be.eql([4, 12]);
    expect(wrapper.children().length).to.be.equal(1);
    expect(wrapper.childAt(0)).to.have.type(Card);
  });

  it('Card should have two child and have to be div and Label', () => {
    const { wrapper } = makeWrapper();
    const card = wrapper.find(Card);
    expect(card.children().length).to.be.equal(2);
    const firstChild = card.childAt(0);
    expect(firstChild).to.have.type('div');
    const secondChild = card.childAt(1);
    expect(secondChild).to.have.type(Label);

    expect(secondChild)
      .to.have.props(['check'])
      .to.be.eql([true]);
  });

  it('div should have two child and have to be CardImg and CardBody', () => {
    const { wrapper, props } = makeWrapper();
    const div = wrapper.find('div');
    expect(div.children().length).to.be.equal(2);
    const firstChild = div.childAt(0);
    expect(firstChild).to.have.type(CardImg);
    expect(firstChild)
      .to.have.props(['top', 'width', 'height', 'src', 'alt'])
      .to.be.eql([true, '100%', '180px', props.car.picture, 'Card image cap']);
    const secondChild = div.childAt(1);
    expect(secondChild).to.have.type(CardBody);
  });

  it('CardBody should have four child and have to be CardText ', () => {
    const { wrapper, props } = makeWrapper();
    const { car } = props;
    const card = wrapper.find(CardBody);

    const fields = [
      { text: 'Model', key: 'model' },
      { text: 'Year', key: 'year' },
      { text: 'Brand', key: 'brand' },
      { text: 'Price', key: 'price' }
    ];

    fields.forEach(({ text, key }, index) => {
      const child = card.childAt(index);
      expect(child).to.have.type(CardText);
      expect(child.childAt(0).text()).to.be.equal(`${text}: ${car[key]}`);
    });
  });

  describe('onChange', () => {
    it('should call handleUncheckedCar and change the state if checked is true', () => {
      const { wrapper, props } = makeWrapper();
      wrapper.setState({
        checked: true
      });

      wrapper.instance().onChange();
      assert.calledWithExactly(props.handleUncheckedCar, props.car.id);
      expect(wrapper.state().checked).to.be.equal(false);
    });

    it('should call handleCheckedCar and change the state if  checked is true', () => {
      const { wrapper, props } = makeWrapper();
      wrapper.setState({
        checked: false
      });

      wrapper.instance().onChange();
      assert.calledWithExactly(props.handleCheckedCar, props.car.id);
      expect(wrapper.state().checked).to.be.equal(true);
    });

    it(' should not call handleUncheckedCar and handleCheckedCar if selected is higher that 2', () => {
      const { wrapper, props } = makeWrapper({ selected: 3 });

      wrapper.instance().onChange();
      expect(props.handleCheckedCar.called).to.be.equal(false);
      expect(props.handleUncheckedCar.called).to.be.equal(false);
    });
  });
});
