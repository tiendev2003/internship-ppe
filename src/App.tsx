import {Fragment} from "react";
import {Routes, Route} from "react-router-dom"

import Home from "@pages/home";
import LoTrinh from "@pages/lo-trinh";
import GlobalProvider from "./context/GlobalProvider";
import CourseDetail from "@pages/course-detail";

// import { Col, DatePicker } from "antd";
// import { Text } from "./components/text";
// import MasterLayout from "@layouts/masterLayout";

const App = () => {
  return (
    <Fragment>
      <GlobalProvider>
        <Routes>
          <Route path="/course-detail" element={<CourseDetail/>}/>
          <Route path="/lo-trinh" element={<LoTrinh/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </GlobalProvider>

      {/*<MasterLayout/>*/}
      {/*<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Text title="Hello AsurRaa" />
          <DatePicker />
        </div>
      </div>*/}
    </Fragment>
  );
};

export default App;
