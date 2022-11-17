import React from "react"



class Image extends React.Component {
    render () {
        return (
          <div>
            <a href="{{product.get_absolute_url}}">
              <img
                className="product_list_image"
                src="img/clothes.jpg"
                alt="product name"
              ></img>
            </a>
          </div>
        );
    }
}


class ProductDetail extends React.Component {
  handleClick = () => {
    console.log("click");
  };

  render() {
    return (
      <div className="product_information">
        <button
          onClick={this.handleClick}
          className="product_price"
        >
          $22
        </button>
        <a href="h">
          <h3 className="product_title"> hello</h3>
        </a>
        <img
          className="product_like"
          src="/static/img/heart.svg"
          alt="like"
        ></img>
      </div>
    );
  }
}


class ProductAction extends React.Component {
    render() {
        return (
          <div className="product_action">
            <a href="h" className="link_btn">
              View Product
            </a>
          </div>
        );
    }
}



export {Image, ProductDetail, ProductAction}
