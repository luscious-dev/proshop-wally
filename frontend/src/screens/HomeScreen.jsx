import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../component/Product";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
