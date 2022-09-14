import AdminLayout from "../../../components/common/layout/AdminLayout";
import "../../../components/admin/customer/Customer.scss";
import "../../../global.scss";
import { customers } from "../../../data/mock_data";
import Pagination from "../../../components/common/pagination/pagination";
import React, { useState, useEffect } from "react";
import { Col, Row, Table } from "antd";
import Icon from "../../../components/common/Icon";
import { Grid, Tag } from "antd";
import CardOverview from "../../../components/admin/report/CardOverview";
import VisitorBarChart from "../../../components/admin/report/VisitorBarChart";

const avatars = [
  "/images/avatars/avatar1.jpg",
  "/images/avatars/avatar2.png",
  "/images/avatars/avatar3.png",
  "/images/avatars/avatar4.jpg",
  "/images/avatars/avatar5.png",
];

const { useBreakpoint } = Grid;

const AdminReport = () => {
  const screens = useBreakpoint();
  useEffect(() => {
    console.log("Screen", screens);
  }, [screens]);
  return (
    <AdminLayout>
      <span className="title">Report</span>
      <Row gutter={[20, 24]} style={{marginBottom: "20px"}}>
        <Col
          style={{}}
          xs={{
            span: 24,
          }}
          sm={{
            span: 12,
          }}
          md={{
            span: 12,
          }}
          lg={{
            span: 12,
          }}
          xl={{
            span: 6,
          }}
        >
          <CardOverview
            title="Total Leads"
            cardStyle={{
              background: "linear-gradient(to right,#fe9365,#feb798)",
            }}
          ></CardOverview>
        </Col>
        <Col
          style={{}}
          xs={{
            span: 24,
          }}
          sm={{
            span: 12,
          }}
          md={{
            span: 12,
          }}
          lg={{
            span: 12,
          }}
          xl={{
            span: 6,
          }}
        >
          <CardOverview
            title="Total Vendors"
            cardStyle={{
              background: "linear-gradient(to right,#0ac282,#0df3a3)",
            }}
          ></CardOverview>
        </Col>
        <Col
          style={{}}
          xs={{
            span: 24,
          }}
          sm={{
            span: 12,
          }}
          md={{
            span: 12,
          }}
          lg={{
            span: 12,
          }}
          xl={{
            span: 6,
          }}
        >
          <CardOverview
            title="Orders"
            cardStyle={{
              background: "linear-gradient(to right,#fe5d70,#fe909d)",
            }}
          ></CardOverview>
        </Col>
        <Col
          style={{}}
          xs={{
            span: 24,
          }}
          sm={{
            span: 12,
          }}
          md={{
            span: 12,
          }}
          lg={{
            span: 12,
          }}
          xl={{
            span: 6,
          }}
        >
          <CardOverview
            title="Visits"
            cardStyle={{
              background: "linear-gradient(to right,#01a9ac,#01dbdf)",
            }}
          ></CardOverview>
        </Col>
      </Row>
      <Row gutter={[20, 24]} style={{marginBottom: "20px"}}>
        <Col
          style={{}}
          sm={{
            span: 24,
          }}
          md={{
            span: 16,
          }}
        >
          <VisitorBarChart></VisitorBarChart>
        </Col>
        <Col
          style={{}}
          sm={{
            span: 24,
          }}
          md={{
            span: 8,
          }}
        >
          <VisitorBarChart></VisitorBarChart>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default AdminReport;
