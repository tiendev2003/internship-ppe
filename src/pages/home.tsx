import MasterLayout from "@layouts/masterLayout";
import { Button, Space } from "antd";
import CourseItem from "@components/courses/courseItem";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { menuTN, n2, tiengnhat } from "@mockdata/menu-lo-trinh";

import carouselResponsive from "@mockdata/carousel-responsive";
import { Link } from "react-router-dom";
import PlayCover from "@components/playCover";
import React from "react";

const home = () =>
(
  <MasterLayout>
    {tiengnhat.map((value, index) => <div className={`${index == 0 ? `` : `mt-10`} space-y-2`}>
      <Space>
        <h2 className="text-[28px]">{value}</h2>
        <Link to={'/lo-trinh'}>
          <Button>
            <Space>
              <img src="src/assets/images/icons/lo-trinh.png" alt="" />
              Lộ trình
            </Space>
          </Button>
        </Link>
      </Space>
      <section className="">
        <Carousel responsive={carouselResponsive}>
          {
            n2.map((item) => {
              console.log(item);
              return <CourseItem item={item} />; // Trả về item nếu bạn muốn tạo một mảng mới tương tự như n5
            })}


        </Carousel>
      </section>
      <h2 className="text-[23px] pt-3 text-gray-500">Trải nghiệm người dùng</h2>
      <section className="">

        <Carousel responsive={carouselResponsive}>
          <PlayCover size={"medium"} src={"src/assets/images/n5/3.png"} />
          <PlayCover size={"medium"} src={"src/assets/images/n5/2.png"} />
          <PlayCover size={"medium"} src={"src/assets/images/n5/1.png"} />
          <PlayCover size={"medium"} src={"src/assets/images/n5/1.png"} />
        </Carousel>
      </section>
    </div>)}


  </MasterLayout>
)
export default home;
