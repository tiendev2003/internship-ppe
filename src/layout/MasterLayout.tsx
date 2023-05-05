import { useState } from 'react';
import { Layout, Menu, Input, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Space } from 'antd';
import { menuKNM, menuTN, } from '../mock/menu-lo-trinh';
import { GrClose } from 'react-icons/gr';


const { Header, Sider } = Layout;

const menu_header = ['Trang chủ', 'Giới thiệu', 'Liên hệ'];
let item1: { key: string; label: string; }[] = [];
menu_header.map((value, index) => {
  item1.push({
    key: `${index}`,
    label: value,
  })
})
interface IMasterLayoutProps {
  children: React.ReactNode
}
const MasterLayout: React.FC<IMasterLayoutProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Layout>
      <Header className="bg-[#D9D9D9] text-white" style={{ position: 'sticky', top: 0, zIndex: 40, width: '100%' }}>
        <div className="  flex justify-between items-center ">
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img className="h-8" src="/src/assets/images/SMILEEYE.png" alt="" />
            <Button
              type="default"
              className="bg-[#424B59] text-white flex items-center space-x-2 "
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              
              Menu <GiHamburgerMenu />
            </Button>
            <div className="hidden md:flex items-center">
              <Space size={1}>
                <Input
                  placeholder="Search"
                  suffix={
                    <AudioOutlined
                      style={{
                        fontSize: 16,
                        color: '#1890ff',
                      }}
                    />
                  }
                />

              </Space>

            </div>
          </div>
          <div className='hidden md:block'>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              className="ml-auto min-w-[300px] bg-[#D9D9D9] font-bold text-[18px]"
              items={item1}
            />
          </div>
          
        </div>

      </Header>
      <Layout className='flex  flex-col	  ' style={{width:'100%'}}>
        {isOpenMenu &&
         <Sider theme='light' className=" bg-white px-2 h-auto z-10 md:w-full " width={`336px`} style={{minWidth:'100%'}} >
         <Button type="default" className="absolute bg-red-400 right-0 top-0 text-white" onClick={() => setIsOpenMenu(!isOpenMenu)}>
           <GrClose />
         </Button>
         <h2 className="text-[21px] bg-white font-bold text-[#505D68] mt-3">Tiếng Nhật</h2>
         <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ borderRight: 0 }} items={menuTN} />
         <h2 className="text-[21px] bg-white font-bold text-[#505D68]">Kỹ năng mềm</h2>
         <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ borderRight: 0 }} items={menuKNM} />
       </Sider>
        }
        <Layout className={`px-4 pt-3     ${isOpenMenu && " md:pl-[340px] " }   bg-slate-200   `}   >

          {children}


        </Layout>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;
