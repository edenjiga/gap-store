import React from 'react';
import { CardImg, Table } from 'reactstrap';

export default ({ items }) => (
  <Table striped>
    <thead>
      <tr>
        <th />
        {items.map(item => (
          <th>
            <CardImg
              top
              width="25%"
              height="180px"
              src={item.picture}
              alt="Card image cap"
            />
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Model</th>
        {items.map(item => (
          <td>{item.model}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">Year</th>
        {items.map(item => (
          <td>{item.year}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">Brand</th>
        {items.map(item => (
          <td>{item.brand}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">Price</th>
        {items.map(item => (
          <td>$ {item.price}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">Hourse Power</th>
        {items.map(item => (
          <td>{item.hp}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">Gears</th>
        {items.map(item => (
          <td>{item.gears}</td>
        ))}
      </tr>
    </tbody>
  </Table>
);
