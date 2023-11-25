import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import FormContainer from "../component/FormContainer";
import CheckoutSteps from "../component/CheckoutSteps";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPa;");
  return <div>PaymentScreen</div>;
};

export default PaymentScreen;
