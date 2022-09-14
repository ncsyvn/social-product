import AdminLayout from "../../../components/common/layout/AdminLayout";
import "../../../components/admin/customer/Customer.scss";
import "../../../global.scss";
import { customers } from "../../../data/mock_data";
import Pagination from "../../../components/common/pagination/pagination";
import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Icon from "../../../components/common/Icon";

const avatars = [
  "/images/avatars/avatar1.jpg",
  "/images/avatars/avatar2.png",
  "/images/avatars/avatar3.png",
  "/images/avatars/avatar4.jpg",
  "/images/avatars/avatar5.png",
];
const AdminHelp = () => {
  const [total, setTotal] = useState(0);
  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize);
  };
  useEffect(() => {
    setTotal(customers.length);
  }, []);
  const antdTableColumns = [
    {
      title: "#",
      dataIndex: "no",
      key: "no",
      width: 60,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 240,
      render: (_, { name }) => (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <img
            src={avatars[Math.floor(Math.random() * avatars.length)]}
            alt="avatar"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "1000px",
              marginRight: "12px",
            }}
          ></img>
          <span className="table-row-name">{name}</span>
        </div>
      ),
    },
    {
      title: "Tax Number",
      dataIndex: "tax",
      key: "tax",
    },
    {
      title: "Created by",
      dataIndex: "created_by",
      key: "created_by",
    },
    {
      title: "Created Date",
      dataIndex: "created_date",
      key: "created_date",
    },
    {
      title: "Actived Date",
      dataIndex: "actived_date",
      key: "actived_date",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_) => (
        <div style={{ display: "flex" }}>
          <Icon
            name="edit.svg"
            width="20px"
            height="20px"
            color="#adb5bd"
            forceColor="blue"
            style={{ marginRight: "8px", cursor: "pointer" }}
          ></Icon>
          <Icon
            name="delete.svg"
            width="20px"
            height="20px"
            color="#adb5bd"
            forceColor="black"
            style={{ cursor: "pointer" }}
          ></Icon>
        </div>
      ),
      width: 120,
    },
  ];
  return (
    <AdminLayout>
      <span className="title">Manage customer</span>
      {/* <div class="wrapper-content">
        <div>
          <table className="table table-hover">
            <thead style={{ position: "sticky" }}>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Tax Number</th>
                <th scope="col">Address</th>
                <th scope="col">Created By</th>
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
        </div>

        <Pagination
          total={total}
          showTotal={true}
          showPageSize={true}
          showGotoPage={true}
          onChange={onPageChange}
        ></Pagination>
      </div> */}
      <div class="wrapper-content" style={{ paddingBottom: "12px" }}>
        <Table
          dataSource={customers}
          columns={antdTableColumns}
          pagination={false}
          scroll={{ x: 800, y: 520 }}
          style={{ marginBottom: "24px" }}
        />
        <Pagination
          total={total}
          showTotal={true}
          showPageSize={true}
          showGotoPage={true}
          onChange={onPageChange}
          style={{ display: "flex", justifyContent: "flex-end" }}
        ></Pagination>
      </div>
    </AdminLayout>
  );
};

export default AdminHelp;
