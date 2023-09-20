import menuheader from "../Style/menuheader.css";

import { NavLink, Link, useNavigate } from "react-router-dom";
import coolmate from "../Style/coomate.css";
import { useState, useEffect } from "react";
// import cartSlide from "../../Redux/cartSlide";
import { useSelector } from "react-redux";
import Collapse from "react-bootstrap/Collapse";

import Login from "./Login";
import Search from "./Search";

export default function Navbar() {
  const menuheader = [
    {
      id: 1,
      title: "OutLet",
    },
    {
      id: 2,
      title: "Combo tiết kiệm",
    },
    {
      id: 3,
      title: "Sản phẩm",
      child: [
        {
          title: "Nhu cầu",
          childs: [
            {
              name: "Mặc nhà & Mặc trong",
              content: "Homewear & Underwear",
              imgname:
                "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/do-mac-nha-va-mac-trong.jpg",
            },
            {
              name: "Mặc hàng ngày",
              content: "Casualwear",
            },
            {
              name: "Đồ thể thao",
              content: "Activewear",
              attention: "Hot",
            },
            {
              name: "Phụ kiện",
              content: "Accessories",
            },
          ],
        },
        {
          title: "Danh mục",
          childs: [
            {
              name: "Áo Nam",
              product: [
                "Áo Tank top",
                "Áo T-shirt",
                "Áo Polo",
                "Áo Sơ Mi",
                "Áo Thể Thao",
                "Áo In Hình",
                "Áo khoác thể thao",
              ],
            },
            {
              name: "Phụ kiện",
              product: ["Mũ (Nón)", "Tất (Vớ)"],
            },
            {
              name: "Quần Nam",
              product: ["Quần Shorts", "Quần Jeans,Quần Dài"],
            },
            {
              name: "Quần Lót Nam",
              product: [
                "Quần Brief (Tam giác)",
                "Quần Trunk (Boxer)",
                "Quần Brief Boxer (Boxer dài)",
              ],
            },
            {
              name: "Tất cả sản phẩm",
            },
            {
              name: "Box đồ nam",
            },
          ],
        },
        {
          title: "Bộ sưu tập",
          childs: [
            {
              name: "Vũ trụ áo Marvel",
              content: "Ưu đãi trải nghiệm hấp dẫn",
            },
            {
              name: "Clean Vietnam",
              content: "Sự kết hợp giữa Coolmate & Vietmax",
            },
            {
              name: "Coolmate Basics",
              content: "BST giá rẻ - chất lượng",
            },
            {
              name: "Sản phẩm bền vững",
              content: "Sản phẩm thân thiện với môi trường",
            },
          ],
        },
        {
          title: "Công nghệ",
          childs: [
            {
              name: "Excool",
              content: "Công nghệ làm mát tối đa",
              product: [],
            },
            {
              name: "Cleandye",
              content: "Sự kết hợp giữa Coolmate & Vietmax",
              product: [],
            },
            {
              name: "HeiQ Viroblock",
              content: "Diệt 99.99% virus SARS-CoV2",
              product: [],
            },
            {
              name: "Anti-Smell",
              content: "10% doanh thu dành cho các bé",
              product: [],
            },
            {
              name: "Sản phẩm bền vững",
              content: "Công nghệ khử mùi từ Nhật Bản",
              product: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Coolxprint",
    },
    {
      id: 5,
      title: "Về Coolmate",
      child: [
        {
          id: 1,
          linkImg: "https://mcdn.coolmate.me/image/August2022/mceclip0_97.jpg",
          NameCol: "Dịch vụ 100% hài lòng ",
          content: "Bật mí 11 dịch vụ cam kết với khách hàng",
        },
        {
          id: 2,
          linkImg: "https://mcdn.coolmate.me/image/August2022/mceclip1_92.jpg",
          NameCol: "Dịch vụ 100% hài lòng ",
          content: "Bật mí 11 dịch vụ cam kết với khách hàng",
        },
        {
          id: 3,
          linkImg: "https://mcdn.coolmate.me/image/August2022/mceclip2_100.jpg",
          NameCol: "Coolclub - Khách hàng thân thiết ",
          content: "Những ưu đãi hấp dẫn dành cho khách hàng thân thiết",
        },
        {
          id: 4,
          linkImg: "https://mcdn.coolmate.me/image/August2022/mceclip3_34.jpg",
          NameCol: "Câu chuyện ",
          content: "Về sartup với mô hình online",
        },
      ],
    },
    {
      id: 6,
      title: "Chọn Size",
    },
  ];
  function useSrt(str, path) {
    // Gộp nhiều dấu space thành dấu -

    if (path === true) {
      str = str.replace(/\s+/g, "-");
      str = str.trim();
      return str;
    } else {
      str = str.replace(/-/g, " ");
      return str;
    }
  }
  const [isshow, setisshow] = useState(false);
  const onclicklogin = () => {
    setisshow(true);
  };

  const cart = useNavigate();
  const onclickcart = () => {
    cart(`/HomePage/NavBarFunction/Cart`);
  };
  const [search, setSearch] = useState(false);
  const onclicksearch = () => {
    setSearch(true);
  };
  // const datacartproduct = useSelector((state) => state.cart);
  const [totalQuantity, settotalQuantity] = useState();

  function sum(datacartproduct) {
    let totalQuantity = 0;

    for (let j = 1; j < datacartproduct.length; j++) {
      totalQuantity += datacartproduct[j].quantity;
    }
    return totalQuantity;
  }
  // useEffect(() => {
  //   settotalQuantity(sum(datacartproduct));
  // }, [datacartproduct]);

  return (
    <div className="menu">
      <p>Combo tiết kiệm ưu đãi 44%</p>
      <div className=" menu-top">
        <div className="logo-left">
          <Link to="/">
            <img src="../src/components/img/1.jpg"></img>
          </Link>
        </div>
        <div className="menu-center">
          <ul className="list-item">
            {menuheader.map((item) => {
              return (
                <li className="active" key={item.id}>
                  <p>
                    {/* narbar menu header */}
                    <NavLink
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "700",
                      }}
                      to={`${useSrt(item.title, false)}`}
                    >
                      {item.title}
                    </NavLink>
                  </p>

                  {item.child ? (
                    <div className="container product">
                      {item.title === "Sản phẩm" &&
                        item.child.length > 0 &&
                        item.child.map((child) => {
                          return (
                            <div key={child.title}>
                              <p> {child.title}</p>
                              <div className="childs">
                                {child.childs.map((childs) => {
                                  return (
                                    <div
                                      key={childs.name}
                                      className="childs-menu"
                                    >
                                      {/*  menu child of " Nhu cầu , BST , Công Nghệ */}
                                      <Link
                                        className="childs-name"
                                        style={{ textDecoration: "none" }}
                                        to={`${useSrt(childs.name, true)}`}
                                      >
                                        <div className="child-name-title">
                                          <p>{childs.name}</p>
                                          {childs.attention ? (
                                            <p className="attention">
                                              {childs.attention}
                                            </p>
                                          ) : null}
                                        </div>
                                        <div className="childs-content">
                                          {childs.content}
                                        </div>{" "}
                                        {child.explain ? (
                                          <p className="child-explain">
                                            {child.explain}
                                          </p>
                                        ) : null}
                                      </Link>

                                      {/* product child of sản phẩm */}
                                      {childs.product ? (
                                        <div className="childs-product">
                                          {childs.product.map((pro) => {
                                            return (
                                              <p
                                                className="product-products"
                                                key={pro}
                                              >
                                                <Link
                                                  to={`Danh-mục/${useSrt(
                                                    pro,
                                                    true
                                                  )}`}
                                                  style={{
                                                    textDecoration: "none",
                                                    color: "#8e8e8e",
                                                  }}
                                                >
                                                  {pro}
                                                </Link>
                                              </p>
                                            );
                                          })}
                                        </div>
                                      ) : null}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  ) : null}
                  {item.child ? (
                    <div className="collmate container">
                      {item.title === "Về Coolmate" &&
                        item.title.length > 0 &&
                        item.child.map((coolmate) => {
                          // console.log(coolmate);
                          return (
                            <div key={coolmate.id} className="collmate-items">
                              <div className="size-collmate">
                                <div
                                  className="colmate-img"
                                  key={coolmate.linkImg}
                                >
                                  <img src={coolmate.linkImg} />
                                </div>
                                <div
                                  className="colmate-namecoll"
                                  key={coolmate.NameCol}
                                >
                                  <div>{coolmate.NameCol}</div>
                                </div>
                                <div
                                  className="colmate-content"
                                  key={coolmate.content}
                                >
                                  <div>{coolmate.content}</div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="setting-right">
          {isshow && <Login setisshow={setisshow} />}
          {search && <Search setSearch={setSearch} />}
          <img src="../src/components/img/search.png" onClick={onclicksearch} />
          <img src="../src/components/img/login.png" onClick={onclicklogin} />
          <img src="../src/components/img/shopping.png" onClick={onclickcart} />
          {}
          <span className="quantityicon" onClick={() => totalQuantity}>
            {totalQuantity}
          </span>
        </div>
      </div>
    </div>
  );
}
