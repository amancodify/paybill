import React, { Component } from "react";
import "./bill.css";
import AddBill from '../add-bill/add-bill'
import ViewBill from "../view-bill/view-bill";

class Bill extends Component {
  constructor(props) {
    super(props);
    this.viewBill = React.createRef();
    this.refreshList = this.refreshList.bind(this);
  }
  refreshList() {
    this.viewBill.current.refreshList();
  }
  render() {
    return (
        <div className="container">
            <div className="row">
                <AddBill refreshList={this.refreshList} />
                <ViewBill ref={this.viewBill} />
            </div>

        </div>
    );
  }
}

export default Bill;
