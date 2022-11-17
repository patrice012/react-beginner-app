import React, {Component} from 'react'
import {Image, ProductDetail, ProductAction} from './productComponent'


class Product extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = [
          {
            url: "img/clothes.jpg",
            price: 22,
            title: "clothes",
          },
          {
            url: "img/dome.jpg",
            price: 55,
            title: "dome de fer",
          },
          {
            url: "img/tasse.jpg",
            price: 28,
            title: "tasse de cafe",
          },
        ];
    }

    
    render() {
        return (
          <div className="product_section">
            <Image />
            <ProductDetail onClick={this.handleClick} />
            <ProductAction />
          </div>
        );
    }
}


export {Product}