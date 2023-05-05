import ReactPlayer from "react-player";
import MasterLayout from "../../../layout/MasterLayout";
import CourseItem from "../courseItem";
import PlayCover from "../playCover";
import { Button, Space } from "antd";

const DetailCourse = () => (
    <MasterLayout>
        <div className="w-full flex">
            <div className="w-3/4  min-h-screen bg-gray-400">
                <div className="main-vid w-[98%]   mx-auto " >
                    <div style={{ display: "flex", justifyContent: "center" }} className=" rounded-xl">
                        <PlayCover size="medium" src='src/assets/images/n5/1.png' />
                    </div>
                    <div className="flex justify-center items-center mt-4 mb-4 rounded-xl"
                    >
                        <div
                            style={{ width: "33.33%", display: "flex", justifyContent: "center" }}
                        >
                            <PlayCover size="small" src='src/assets/images/n5/2.png' />
                        </div>
                        <div
                            style={{ width: "33.33%", display: "flex", justifyContent: "center" }}
                        >
                            <PlayCover size="small" src='src/assets/images/n5/3.png' />
                        </div>
                        <div
                            style={{ width: "33.33%", display: "flex", justifyContent: "center" }}
                        >
                            <PlayCover size="small" src='src/assets/images/n5/1.png' />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex-1 overflow-y-scroll bg-gray-100 p-6">
                            <div className="flex flex-col">
                                <div className="flex justify-end">
                                    <div className="bg-blue-500 text-white max-w-xs rounded-lg p-3 mb-2">
                                        <p>Hello, how are you?</p>
                                    </div>
                                    <img  src="https://i.pravatar.cc/40" alt="Avatar" className="w-8 h-8 rounded-full ml-2"/>
                                    
                                </div>
                                <div className="flex justify-start">
                                    <img src="https://i.pravatar.cc/40" alt="Avatar" className="w-8 h-8 rounded-full mr-2"/>
                                        <div className="bg-gray-300 max-w-xs rounded-lg p-3 mb-2">
                                            <p>I'm doing great, thanks for asking!</p>
                                        </div>
                                </div>
                            
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className="w-1/4 h-screen bg-gray-300 ">
                <div className="p-5 flex flex-col">
                    <div className="bg-blue-500 text-white p-3 rounded-xl text-center mb-3 ">
                        Trải nghiệm toàn bộ lộ trình
                    </div>
                    <Space size={11} className="p-2">
                        <img src="src/assets/images/icons/trai-nghiem.png" alt="" />
                        <p>30 trải nghiệm</p>
                    </Space>
                    <Space size={11} className="p-2">
                        <img src="src/assets/images/icons/nghe-noi.png" alt="" />
                        <p>Nghe nói mọi lúc mọi nơi</p>
                    </Space>
                    <Space size={11} className="p-2">
                        <img src="src/assets/images/icons/doc-viet.png" alt="" />
                        <p>Trải nghiệm toàn bộ</p>
                    </Space>
                    <Space size={11} className="p-2">
                        <img src="src/assets/images/icons/truy-cap.png" alt="" />
                        <p>Truy cập toàn bộ</p>
                    </Space>
                    <Space size={11} className="p-2">
                        <img src="src/assets/images/icons/chung-chi.png" alt="" />
                        <p>Hoàn tât chứng chỉ</p>
                    </Space>
                </div>
            </div>
        </div>
    </MasterLayout>
)
export default DetailCourse