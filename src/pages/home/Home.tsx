import MasterLayout from "../../layout/MasterLayout";

import '../../style/slick-theme.css'
import '../../style/slick.css'
 
import CourseItem from "../course/courseItem";
import { tiengnhat } from "../../mock/menu-lo-trinh";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import responsive from "../../mock/carousel-responsive";
var settings = {
  dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};
const home = () => (
  <MasterLayout>
    {tiengnhat.map((value, index) => <div className={`${index == 0 ? `` : `mt-10`}   space-y-2`}>
        <Space>
          <h2 className="text-[28px]">{value}</h2>
          <Link to={'/lo-trinh'}>
            <Button>
              <Space>
                <img src="src/assets/images/icons/lo-trinh.png" alt=""/>
                Lộ trình
              </Space>
            </Button>
          </Link>
        </Space>
        <section className="">
        <Carousel responsive={responsive}>
            <CourseItem/>
            <CourseItem/>
            <CourseItem/>
            <CourseItem/>
            <CourseItem/>
          </Carousel>
        </section>
        
      </div>)}


  </MasterLayout>
);
export default home;
