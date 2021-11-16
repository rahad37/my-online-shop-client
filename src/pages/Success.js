import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userRequest } from "../requestMethod";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : <h1 style={{color: 'teal'}}>Successfully. Your order is being prepared...</h1>}
    <Link to='/'>
      <button style={{ padding: 10, marginTop: 20, backgroundColor: 'darkblue', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>Go to Homepage</button>
    </Link>
    </div>
  );
};

export default Success;




// import React from 'react';
// import { useLocation } from 'react-router';

// const Success = () => {
//     const location = useLocation();

//     console.log(location);
//     return (
//         <div style={{}}>
//            <h1 style={{
//                display: 'flex',
//                alignItems: 'center',
//                justifyContent: 'center',
//                width: '400px',
//                margin: "200px auto",
//                flexDirection: 'column',
//                backgroundColor: 'teal',
//                color: "white",
//                padding: '50px 30px',
//                borderRadius: '10px'
//            }}>Payment Successful...</h1>            
//         </div>
//     );
// };

// export default Success;