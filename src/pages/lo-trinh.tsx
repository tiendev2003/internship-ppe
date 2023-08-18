import MasterLayout from "@layouts/masterLayout";
import { Button, Space } from "antd";
import CourseItem from "@components/courses/courseItem";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { tiengnhat } from "@mockdata/menu-lo-trinh";
import carouselResponsive from "@mockdata/carousel-responsive";
import { BiArrowBack } from "react-icons/all";
import { Link } from "react-router-dom";
import React from "react";
import { GlobalContext } from "../context/GlobalProvider";
import classNames from "classnames";

const LoTrinh = () => {
  const { isOpenMenu } = React.useContext(GlobalContext)

  return (
    <MasterLayout>
      <Space>
        <Link to={'/'}>
          <BiArrowBack className="text-[28px]" />
        </Link>
        <h2 className="text-[28px]">N5: Tiếng nhật hàng ngày</h2>
        <Button>
          <Space>
            <img src="src/assets/images/icons/lo-trinh.png" alt="" />
            Lộ trình
          </Space>
        </Button>
      </Space>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {[...Array(50)].map((value) => (
          <div className={classNames({ 'col-span-4': isOpenMenu, 'col-span-3': !isOpenMenu, } )}
          >
            <CourseItem item={"N5: Tiếng nhật hàng ngày"} />
          </div>
        ))}

      </section>
    </MasterLayout>
  )
}

export default LoTrinh;
