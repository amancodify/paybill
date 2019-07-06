import React, { Component } from "react";
import "./view-product.css";

class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: require("../data/data.service")
    };
    this.refreshList = this.refreshList.bind(this);
  }

  refreshList() {
    this.forceUpdate();
  }

  render() {
    let id = 0;
    let products = [];
    if (this.state.dataService.getProducts()) {
      products = this.state.dataService.getProducts().map((d,i) => {
        return (
          <tr key={i}>
            <th scope="row">{++id}</th>
            <td>{d.name}</td>
            <td>Rs. {d.price}</td>
          </tr>
        );
      });
    }
    return (
      <div className="col-md-6 col-xs-12 products">
        <h3>Products</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{products}</tbody>
        </table>
      </div>
    );
  }
}

export default ViewProduct; // Don’t forget to use export default!
