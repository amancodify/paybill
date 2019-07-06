import React, { Component } from "react";
import "./add-product.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: require("../data/data.service")
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(e) {
    const newProduct = {
      name: e.target.name.value,
      price: e.target.price.value
    };
    this.state.dataService.addProduct(newProduct);

    this.props.refreshList();

    e.preventDefault();
    e.target.reset();
  }

  render() {
    return (
      <div className="col-md-6 col-xs-12 add-products">
        <h3 className="title">Add Product</h3>
        <form onSubmit={this.addProduct} action="#">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              name="name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Price"
              name="price"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddProduct; // Don’t forget to use export default!
