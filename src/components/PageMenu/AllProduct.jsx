import { useParams } from "react-router-dom";
// import useFetch from "../../Hook/useFetch";
import ProductList from "../Page/ProductList";
import allproduct from "../Style/allproduct.css";

import { Container, Row, Col } from "reactstrap";
export default function AllProduct() {
  // const { title } = useParams();
  // const { data: productData, isLoading: isLoadingproductData } = useFetch(
  //   `http://localhost:3004/productData`,
  //   false
  // );

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
  const listimgmenu = [
    {
      id: 1,
      linkImg: "https://mcdn.coolmate.me/image/July2022/mceclip0_35.png",
    },
    {
      id: 2,
      linkImg: "https://mcdn.coolmate.me/image/July2022/mceclip1_79.png",
    },
    {
      id: 3,
      linkImg: "https://mcdn.coolmate.me/image/July2022/mceclip2_44.png",
    },
    {
      id: 4,
      linkImg: "https://mcdn.coolmate.me/image/July2022/mceclip4_40.png",
    },
    {
      id: 5,
      linkImg: "https://mcdn.coolmate.me/image/July2022/mceclip2_97.png",
    },
    {
      id: 6,
      linkImg: "https://mcdn.coolmate.me/image/July2022/mceclip5_4.png",
    },
  ];

  const listimgtitle = [
    {
      id: 1,
      linkImg:
        "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-short.jpg",
      title1: "Quần đùi",
      type: true,
    },
    {
      id: 2,
      linkImg:
        "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-dai.jpg",
      title1: "Quần Dài",
      type: true,
    },
    {
      id: 3,
      linkImg:
        "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/July2022/AntismellTANKTOP.jpg",
      title1: "Áo Tank top",

      type: true,
    },
    {
      id: 4,
      linkImg:
        "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-lot.jpg",
      title1: "Quần lót nam",
      type: false,
    },
  ];

  // function collections(collection) {
  //   let productFilter;
  //   if (collection.type === true) {
  //     let productFilter1 = productData.filter(
  //       (product) => product.type == useSrt(collection.title1, true)
  //     );

  //     let productFilter2 = [];
  //     if (collection.title2) {
  //       productFilter2 = productData.filter(
  //         (product) => product.type == useSrt(collection.title2, true)
  //       );
  //     }

  //     productFilter = [...productFilter1, ...productFilter2];
  //   } else {
  //     productFilter = productData.filter(
  //       (product) => product.category == useSrt(collection.title1, true)
  //     );
  //   }

  //   return (
  //     <>
  //       <h3>
  //         {" "}
  //         <span>{collection.title1}</span>{" "}
  //         {collection.title2 ? <span> & {collection.title2} </span> : null}
  //       </h3>

  //       <ProductList
  //         imgFirst={collection.linkImg}
  //         productData={productFilter}
  //       />
  //     </>
  //   );
  // }

  return (
    <>
      <Container>
        <Row>
          <Col md="12" xs="6">
            {listimgmenu.map((e) => {
              return (
                <a href="" key={e.id} className="link-img">
                  <img src={e.linkImg} />
                </a>
              );
            })}
          </Col>
        </Row>
      </Container>
      {/* {isLoadingproductData === false && productData.length > 0 && (
        <Container fluid>
          <Row>
            <Col md="2" xs="6">
              {listimgtitle.map((collection) => {
                return (
                  <div key={collection.id}>
                    <img style={{ width: "200px" }} src={collection.linkImg} />
                    <p>{collection.title1}</p>
                    {productData.length > 0 &&
                      isLoadingproductData === false &&
                      productData
                        .map((item) => {
                          return { type: item.type };
                        })
                        .filter((item) => item.type === collection.title)}
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      )} */}
    </>
  )
}
