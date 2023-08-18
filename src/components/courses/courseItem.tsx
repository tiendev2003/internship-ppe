import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Button, Card, Space} from 'antd';
import {FiUser} from "react-icons/all";
import PlayCover from "@components/playCover";

const {Meta} = Card;
interface IMasterLayoutProps {
  item: React.ReactNode
}
const CourseItem: React.FC<IMasterLayoutProps>  = ({item}) => (
  <Card
    style={{width: '100%'}}
    cover={
      <>
        <PlayCover size={"medium"} src={"src/assets/images/n5/1.png"}/>
        <div className={"fij mt-1 space-x-1"}>
          <PlayCover size={"small"} src={"src/assets/images/n5/3.png"}/>
          <PlayCover size={"small"} src={"src/assets/images/n5/2.png"}/>
          <PlayCover size={"small"} src={"src/assets/images/n5/3.png"}/>
        </div>
      </>
    }
    className={"course-item"}
  >
    <Meta
      title={<>
        <div className={"fij"}>
          <span className="text-[19px]">{item}</span>
          <Space size={"1"}>
            <FiUser/>
            <small>1.400</small>
          </Space>
        </div>
        <div className="fij space-x-2 mt-2">

          <Button block>
            <Space>
              <img src="src/assets/images/icons/trai-nghiem.png" alt=""/>
              Trải nghiệm
            </Space>
          </Button>
          <Button block>
            <Space>
              <img src="src/assets/images/icons/nghe-noi.png" alt=""/>
              Nghe nói
            </Space>
          </Button>
          <Button block>
            <Space>
              <img src="src/assets/images/icons/doc-viet.png" alt=""/>
              Đọc viết
            </Space>
          </Button>
        </div>
      </>}
    />
  </Card>
);

export default CourseItem;
