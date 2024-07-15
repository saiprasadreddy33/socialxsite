
import React from "react";
import "./invoice.css";

const Invoice = ({ orderDetails }) => {
  return (
    <div className="invoice">
      <div className="invoice-header">
        <h2>Invoice</h2>
        <p>Order Date: {orderDetails.orderDate}</p>
      </div>
      <div className="invoice-details">
        <p>Order ID: {orderDetails.orderId}</p>
        <p>Payment Method: {orderDetails.paymentMethod}</p>
        <p>Total Amount: ${orderDetails.totalAmount}</p>
        <p>Delivery Address: {orderDetails.deliveryAddress}</p>
      </div>
    </div>
  );
};

export default Invoice;
