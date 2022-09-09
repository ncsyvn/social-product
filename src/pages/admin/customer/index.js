import AdminLayout from "../../../components/common/layout/AdminLayout";
import "../../../components/admin/customer/Customer.scss";
import "../../../global.scss";
import { customers } from "../../../data/mock_data";
import Pagination from "../../../components/common/pagination/pagination";
import React, { useState } from "react";

const AdminCustomer = () => {
  const [total, setTotal] = useState(0);
  return (
    <AdminLayout>
      <span className="title">Manage customer</span>
      <input
        type={"text"}
        onChange={(event) => {
          setTotal(parseInt(event.target.value));
          console.log("value", total);
        }}
      ></input>
      <div class="wrapper-content">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Tax Number</th>
              <th scope="col">Address</th>
              <th scope="col">Created by</th>
              <th scope="col">Created Date</th>
              <th scope="col">Actived Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((element, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="table-row-name">{element.name}</td>
                  <td>{element.tax}</td>
                  <td>{element.address}</td>
                  <td>{element.created_by}</td>
                  <td>{element.created_date}</td>
                  <td>{element.actived_date}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination total={total}></Pagination>
      </div>
    </AdminLayout>
  );
};

export default AdminCustomer;
