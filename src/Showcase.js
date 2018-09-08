import React, { Component } from 'react';
import ShowcaseItem from './ShowcaseItem';
import cake from './cake.jpg';
import cupcakes from './cupcakes.jpg';
import macaroni from './macaroni.jpg';

const items = [
  {
    key: 1,
    title: 'Cake',
    image: cake,
    price: '123000000000000000',
  },
  {
    key: 2,
    title: 'Cupcakes',
    image: cupcakes,
    price: '45000000000000000',
  },
  {
    key: 3,
    title: 'Macaroni',
    image: macaroni,
    price: '30000000000000000',
  },
];

class Showcase extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">Store</h1>
        <div className="card-deck text-center">
          {items.map(function (item) {
            return <ShowcaseItem key={item.key} title={item.title} price={item.price} image={item.image} />
          })}
        </div>
      </div>
    )
  }
}

export default Showcase;