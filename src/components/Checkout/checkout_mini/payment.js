import React, { useState } from "react";
import socDist from "../../../assets/ProductDetails/payment.png";
import socDists from "../../../assets/ProductDetails/order.png";
import { useHistory } from "react-router-dom";
import Invoice from "./Invoice";
import "./payment.css";

const Payment = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleGoBack = () => {
    history.goBack();
  };

  const handlePayment = () => {
    const order = {
        orderId: "12345",
        orderDate: new Date().toLocaleDateString(),
        paymentMethod: "Credit Card",
        totalAmount: 40,
        deliveryAddress: "4568 8465 1258 6895, John Wick, 12/24, 584"
      };
      setOrderDetails(order);
      setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    history.push("/");
  };

  return (
    <div className="checkout_main">
      <div className="co_info">
        <div className="checkout">
          <h2>PAYMENT</h2>
        </div>
        <div className="co_payment_method">
          <div className="payment_methods">
            <label className="payment_option">
              <input type="radio" name="paymentMethod" value="bitcoin" />
              <div className="payment_box">1</div> Bitcoin
            </label>
            <label className="payment_option">
              <input type="radio" name="paymentMethod" value="appleWallet" />
              <div className="payment_box">2</div> Apple Wallet
            </label>
            <label className="payment_option">
              <input type="radio" name="paymentMethod" value="paypal" />
              <div className="payment_box">3</div> PayPal
            </label>
            <label className="payment_option">
              <input type="radio" name="paymentMethod" value="creditCard" />
              <div className="payment_box">4</div> Debit / Credit Card
            </label>
          </div>
        </div>
        <div className="co_del_adr">
          <h4>Delivery Address</h4>
          <div className="co_name_sur">
          </div>
          <div className="co_street">
            <input
              placeholder="4568 8465 1258 6895"
              type="text"
              name="street"
            />
          </div>
          <div className="co_street2">
            <input placeholder="John Wick" type="text" name="street2" />
          </div>
          <div className="co_zips">
            <div className="co_zip_code">
              <input placeholder="12/24" type="text" name="zipCode" />
            </div>
            <div className="co_zip_city">
              <input placeholder="584" type="text" name="city" />
            </div>
          </div>
        </div>

        <div className="co_back_save">
          <div className="co_back">
            <button type="button" onClick={handleGoBack}>
              <p>Go back to Checkout Page</p>
            </button>
          </div>
          <div className="co_save">
            <button type="button" onClick={handlePayment}>
              <h2>Pay $40</h2>
            </button>
          </div>
        </div>
      </div>
      <div className="co_img">
        <img src={socDist} alt="Social Distancing" />
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal_content">
            
            <img src={socDists} alt="Success" />
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Order Placed Successfully</h2>
            <p>
              Your order has been placed successfully! We'll try to ship it to
              your doorstep as soon as possible. Cheers!
            </p>
            <Invoice orderDetails={orderDetails} />
            <button onClick={closeModal}>CONTINUE SHOPPING</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
