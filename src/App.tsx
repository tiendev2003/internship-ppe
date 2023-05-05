import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalProvider from "./context/GlobalProvider";
import Home from "./pages/home/Home";
import DetailCourse from "./pages/course/n5/detailCourse";
function App() {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lo-trinh" element={<DetailCourse />} />
        </Routes>
      </GlobalProvider>

     
    </>
  );
}

export default App;
