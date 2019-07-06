import React, { Component } from "react";
import "./view-bill.css";

class ViewBill extends Component {
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
    let products = [];
    let totalTax = 0;
    let totalBill = 0;
    if (this.state.dataService.getProductsBill()) {
      products = this.state.dataService.getProductsBill().map((d,i) => {
        const tax = (d.price * d.quantity) * 0.05;
        const total = (d.price * d.quantity) * 0.05 + (d.price * d.quantity);

        totalTax += tax;
        totalBill += total;
        return (
          <tr key={i}>
            <td>{d.name}</td>
            <td>{d.quantity}</td>
            <td>Rs. {d.price}</td>
            <td>Rs. {tax}</td>
            <td>Rs. {total}</td>
          </tr>
        );
      });
    }
    if(products.length > 0) {
      return (
        <div className="col-md-6 col-xs-12 products">
          <h3>Bill</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Products</th>
                <th scope="col">Quantity</th>
                <th scope="col">Rate</th>
                <th scope="col">Tax</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>{products}</tbody>
          </table>
          <div>
            <h5>Total Tax: Rs. {totalTax}</h5>
            <h5>Total Bill: Rs. {totalBill}</h5>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-md-6 col-xs-12 products">
          <h3>Add Items to generate bill</h3>
        </div>
      );
    }
  }
}

export default ViewBill;
