import React from "react";
import { Card, Button, Space } from "antd";
import { FiUser } from "react-icons/fi";

import courseImg1 from "../../assets/images/n5/1.png";
import courseImg2 from "../../assets/images/n5/2.png";
import courseImg3 from "../../assets/images/n5/3.png";
import traiNghiemIcon from "../../assets/images/icons/trai-nghiem.png";
import ngheNoiIcon from "../../assets/images/icons/nghe-noi.png";
import docVietIcon from "../../assets/images/icons/doc-viet.png";
import PlayCover from "./playCover";
const CourseItem = () => (
  <Card style={{ width: "100%" }} className="course-item">
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PlayCover size="medium" src={courseImg1} />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{ width: "33.33%", display: "flex", justifyContent: "center" }}
      >
        <PlayCover size="small" src={courseImg2} />
      </div>
      <div
        style={{ width: "33.33%", display: "flex", justifyContent: "center" }}
      >
        <PlayCover size="small" src={courseImg3} />
      </div>
      <div
        style={{ width: "33.33%", display: "flex", justifyContent: "center" }}
      >
        <PlayCover size="small" src={courseImg2} />
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "19px" }}>N5: Nấu cơm</span>
        <Space size={1}>
          <FiUser />
          <small>1.400</small>
        </Space>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0.5rem",
        }}
      >
        <Button block style={{ marginRight: "0.5rem" }}>
          <Space>
            <img src={traiNghiemIcon} alt="" />
            Trải nghiệm
          </Space>
        </Button>
        <Button block style={{ marginRight: "0.5rem" }}>
          <Space>
            <img src={ngheNoiIcon} alt="" />
            Nghe nói
          </Space>
        </Button>
        <Button block>
          <Space>
            <img src={docVietIcon} alt="" />
            Đọc viết
          </Space>
        </Button>
      </div>
    </div>
  </Card>
);

export default CourseItem;
