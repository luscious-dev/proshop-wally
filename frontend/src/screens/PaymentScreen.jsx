import { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import FormContainer from "../component/FormContainer";
import CheckoutSteps from "../component/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../slices/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value={paymentMethod}
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
