import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import ProductList from "./components/Page/ProductList";
import Ui from "./components/Page/Ui";
import "./index.css";
import ProductSportStuffDetail from "./components/Page/ProductSportStuffDetail";
import TitleProduct from "./components/Listpro/TitleProduct";
import Cart from "./components/HomePage/Cart";
// import store from "/src/redux/store";
import About from "./components/HomePage/About";
import Coolxprint from "./components/HomePage/Coolxprint";
// import { Provider } from "react-redux";
import Register from "./components/HomePage/Register"
import ProductSearch from "./components/Page/ProductSearch";
import ResetPassword from "./components/HomePage/ResetPassword";
import AllProduct from "./components/PageMenu/AllProduct";
import UserContextProvider from "./components/context/UserContext.js";
// import ChonceSize from "./components/PageMenu/ChonceSize";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <UserContextProvider>
       <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ui />}>
            <Route index element={<App />} />
            <Route path="/Coolxprint" element={<Coolxprint />}></Route>
            <Route path="/Về Coolmate" element={<About />}></Route>
            <Route path="/Sản Phẩm" element={<AllProduct />}></Route>
            <Route path="/HomePage/NavBarFunction/Cart" element={<Cart />} />
            <Route path="/Vũ trụ áo Marvel" element={<h1>ok</h1>} />
            <Route path="/Danh-mục/:pro" element={<TitleProduct />}></Route>
            <Route path="/Form/Register" element={<Register />}></Route>
            <Route path="/Form/ResetPassword" element={<ResetPassword />}></Route>
            <Route
              path="/Page/ProductList/ProductSportStuffDetail/:id"
              element={<ProductSportStuffDetail />}
            />
            <Route
              path="/Page/ProductSearch/ProductSportStuffDetail/:id"
              element={<ProductSportStuffDetail />}
            />
            <Route path="/:title" element={<TitleProduct />} />
            <Route path="/productSearch/:keyword" element={<ProductSearch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </UserContextProvider>
    
  // </Provider>
);
