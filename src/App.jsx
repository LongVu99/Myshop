import Slider from "./components/HomePage/Slider";
import Product from "./components/HomePage/Product";
import HomepageDemin from "./components/HomePage/HomepageDemin";
import Basic from "./components/HomePage/Basic";
import "bootstrap/dist/css/bootstrap.min.css";
import Experiences from "./components/HomePage/Experiences";
import StoryAndService from "./components/HomePage/StoryAndService";
import Join from "./components/HomePage/Join";

import "./App.css";
// import { useEffect } from "react";
function App() {
  // useEffect(() => {
  //   fetch(`http://localhost:5000/`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div>
      <div className="slider container-fluid">
        <Slider></Slider>
      </div>
      <Product></Product>
      <HomepageDemin></HomepageDemin>
      <Basic></Basic>
      <Experiences></Experiences>
      <Join></Join>
      <StoryAndService />
    </div>
  );
}
export default App;
