import React, { Component } from "react";
import "./product.css";
import AddProduct from "../add-product/add-product";
import ViewProduct from "../view-product/view-product";

class Product extends Component {
  constructor(props) {
    super(props);
    this.viewProduct = React.createRef();
    this.refreshList = this.refreshList.bind(this);
  }
  refreshList() {
    this.viewProduct.current.refreshList();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <AddProduct refreshList={this.refreshList} />
            <ViewProduct ref={this.viewProduct} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product; // Don’t forget to use export default!
