import React from "react";
import { Card } from "antd";
import { Button } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";

export default function Cardcomponent() {
  return (
    <div
      className="site-card-border-less-wrapper"
      style={{ backroundColor: "#fa8c16" }}
    >
      <Card
        title=" ."
        bordered={false}
        style={{ width: 700, marginTop: "10px" }}
      >
        <div>
          <p style={{ margin: "40px", fontSize: "30px" }}>28/10/2020</p>
          <Button
            style={{
              margin: "40px",
              backgroundColor: "black",
              color: "white",
              fontSize: "20px",
              padding: "15px",
              width: "170px",
            }}
            size="large"
          >
            Case Study
          </Button>

          <p
            style={{
              margin: "40px",
              fontSize: "60px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Amazon Gift
          </p>
          <p
            style={{
              margin: "40px",
              fontSize: "60px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Pay
          </p>
        </div>

        <div style={{ fontSize: "50px", marginLeft: "1000px" }}>
          <ArrowRightOutlined />
        </div>
      </Card>
    </div>
  );
}
