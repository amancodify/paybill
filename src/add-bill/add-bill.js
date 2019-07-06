import React, { Component } from "react";
import "./add-bill.css";
import ViewProductFilter from "../view-product-filter/view-product-filter";

class AddBill extends Component {
  constructor(props) {
      super(props);
      this.viewProductFilter = React.createRef();
      this.handleChange = this.handleChange.bind(this);
      this.refreshBill = this.refreshBill.bind(this);
  }
  handleChange(e) {
    this.viewProductFilter.current.changeFilterChar(e.target.value);
  }
  refreshBill() {
      this.props.refreshList();
  }
  render() {
    return (
      <div className="col-md-6 col-xs-12 add-bill">
        <h3 className="title">Generate bill</h3>
        <form action="#">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              name="name"
              onChange={this.handleChange}
            />
          </div>
        </form>
        <ViewProductFilter ref={this.viewProductFilter} filterChar="" refreshBill={this.refreshBill}/>
      </div>
    );
  }
}

export default AddBill;
