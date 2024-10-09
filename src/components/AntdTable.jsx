import React, { useState } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "User ID",
    dataIndex: "user_id",
    key: "user_id",
  },
  {
    title: "Total Incentive Amount",
    dataIndex: "total_incentive_amount",
    key: "total_incentive_amount",
  },
  {
    title: "Held Amount",
    dataIndex: "held_amount",
    key: "held_amount",
  },
  {
    title: "Payable Amount",
    dataIndex: "payable_amount",
    key: "payable_amount",
  },
  {
    title: "Paid Amount",
    dataIndex: "paid_amount",
    key: "paid_amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Updated At",
    dataIndex: "updated_at",
    key: "updated_at",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Viewing Month",
    dataIndex: "viewing_month",
    key: "viewing_month",
    className: "viewing-month-column",
  },
  
];

const data = [
  {
    id: 1,
    date: "2023-12-31 10:21:11",
    user_id: 209,
    total_incentive_amount: "1000.00",
    held_amount: "200.00",
    payable_amount: "800.00",
    paid_amount: "800.00",
    status: 1,
    created_at: "2023-12-31T04:06:16.000000Z",
    updated_at: "2023-12-31T04:06:16.000000Z",
    title: "Monthly Incentive (for the month of December, 2023)",
    viewing_month: "January, 2024",
    held_amount_payment: null,
  },
  {
    id: 2,
    date: "2024-01-31 10:13:20",
    user_id: 209,
    total_incentive_amount: "1000.00",
    held_amount: "200.00",
    payable_amount: "800.00",
    paid_amount: "800.00",
    status: 1,
    created_at: "2024-01-31T04:06:16.000000Z",
    updated_at: "2024-01-31T04:06:16.000000Z",
    title: "Monthly Incentive (for the month of January, 2024)",
    viewing_month: "February, 2024",
    held_amount_payment:
      "Held incentive amount 400.00 taka for December, 2023 - January, 2024 has been paid on June 10, 2024 by Rajat Chakraborty",
  },
  {
    id: 3,
    date: "2024-02-29 10:13:20",
    user_id: 209,
    total_incentive_amount: "10000.00",
    held_amount: "2000.00",
    payable_amount: "8000.00",
    paid_amount: "8000.00",
    status: 1,
    created_at: "2024-02-29T04:06:16.000000Z",
    updated_at: "2024-02-29T04:06:16.000000Z",
    title: "Monthly Incentive (for the month of February, 2024)",
    viewing_month: "March, 2024",
    held_amount_payment: null,
  },
];

const AntdTable = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState(
    data.filter((item) => item.held_amount_payment).map((item) => item.id)
  );
  return (
    <div style={{ width: "100%" }}>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        expandable={{
          expandedRowRender: (record) => {
            return (
              <div className="expanded-row">
                <p className="held-amount-payment">{record.held_amount_payment}</p>
                <p className="held-amount">{record.held_amount}</p>
              </div>
            );
          },
          expandedRowKeys,
          expandIconColumnIndex: -1
        }}
        dataSource={data}
      />
    </div>
  );
};

export default AntdTable;
