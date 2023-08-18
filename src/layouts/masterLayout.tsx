import {Breadcrumb, Button, Layout, Menu, Space} from 'antd';
import React from 'react';
import {GiHamburgerMenu, GrClose} from "react-icons/all";
import Search from "antd/es/input/Search";
import {menuTN, menuKNM} from "@mockdata/menu-lo-trinh";
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobalProvider";

const {Header, Content, Sider} = Layout;

const items1 = [
  {label: 'TRANG CHỦ', key: 'item-1'}, // remember to pass the key prop
  {label: 'GIỚI THIỆU', key: 'item-2'},
  {label: 'LIÊN HỆ', key: 'item-3'},
];

interface IMasterLayoutProps {
  children: React.ReactNode
}

const MasterLayout: React.FC<IMasterLayoutProps> = ({children}) => {
  const {isOpenMenu, setIsOpenMenu} = React.useContext(GlobalContext)
  console.log({isOpenMenu})
  return (
    <Layout>
      <Header className="header justify-between">
        <Space>
          <Link to={"/"}>
            <img src={"./src/assets/images/logo.png"} className="logo w-[86px] h-[23px]"/>
          </Link>

          <Button type="default" className={"bg-[#424B59] text-white flex items-center space-x-2"}
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            Menu <GiHamburgerMenu/>
          </Button>
        </Space>
        <div className="search hidden md:block">
          <Search placeholder="Search" style={{width: 200}}/>
        </div>

        <Menu className='hidden md:block  ' theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items1}/>
      </Header>
      <Layout>
        {isOpenMenu &&
          <Sider width={336} className="site-layout-background px-2 custom-sider relative">

            <Button type="default"
                    className={"absolute right-0 top-0"}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <GrClose/>
            </Button>
            <h2 className={"text-[21px] font-bold text-[#505D68]"}>Tiếng Nhật</h2>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{height: '100%', borderRight: 0,}}
              items={menuTN}
            />
            <h2 className={"text-[21px] font-bold text-[#505D68]"}>Kỹ năng mềm</h2>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{height: '100%', borderRight: 0,}}
              items={menuKNM}
            />
          </Sider>
        }
        <Layout style={{padding: '0 0 24px'}}>

          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MasterLayout;
