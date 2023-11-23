import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../component/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import {
  useLoginUserMutation,
  useGetAllUsersQuery,
  useGetUserProfileQuery,
} from "../slices/userSlice";
import Loader from "../component/Loader";
import Message from "../component/Message";
import axios from "axios";

function HomeScreen() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  const [loginUser, result] = useLoginUserMutation();
  const {
    data,
    isLoading: uIsLoading,
    error: uError,
  } = useGetUserProfileQuery();
  // const [products, setProducts] = useState([]);
  // useEffect(function () {
  //   axios.get("/api/products").then((res) => {
  //     setProducts(res.data);
  //   });
  // }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">{error.data.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product key={product._id} product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default HomeScreen;
