/* eslint-disable no-global-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
import React from 'react'
import './Orders.css'
import {useState,useEffect} from 'react'
import axios from 'axios' 
import {toast} from 'react-toastify'
import { assets } from '../../assets/admin_assets/assets'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch orders");
    }
  };

  const statusHandler = async (event,orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order-container">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            {/* Order Image */}
            <img src={assets.parcel_icon} alt="Parcel Icon" />

            {/* Order Details */}
            <div className="order-item-details">
              {/* Order Items */}
              <p className="order-item-food">
                {order.items
                  .map((item) => `${item.name} x ${item.quantity}`)
                  .join(", ")}
              </p>

              {/* Customer Name */}
              <p className="order-item-name">
                {order.address.firstName} {order.address.lastName}
              </p>

              {/* Address */}
              <div className="order-item-address">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>

              {/* Contact */}
              <p className="order-item-phone">{order.address.phone}</p>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <p>Items: {order.items.length}</p>
              <p>{order.amount} ₨</p>
            </div>

            {/* Status Dropdown */}
            <select onChange={(event) => statusHandler(event,order._id)} value={order.status} className="order-status">
              <option value="Food Processing" selected>Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};
 

export default Orders;


// import React from 'react';
// import './Orders.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { assets } from '../../assets/admin_assets/assets';


// const Orders = ({url}) => {

//   const [orders,setOrders] = useState([]);

//   const fetchAllOrders = async () => {
//     const response = await axios.get(url + "/api/order/list");
//     if (response.data.success) {
//       setOrders(response.data.data);
//       console.log(response.data.data);
//     } else{
//       toast.error("Error");
//     }
//   }

//     useEffect(() => {
//       fetchAllOrders();
//     },[]);

//   return (
//     <div className='order add'>

//       <h3>Order Page</h3>
//       <div className="order-list">
//         {orders.map((order,index) => {
//           <div key={index} className="order-item">
//             <img src={assets.parcel_icon} alt="" />
//             <div>
//               <p className="order-item-food">
//                 {order.items.map((item,index) => {
//                   if (index===order.items.length-1) {
//                     return item.name + " x " + item.quantity;
//                   }
//                   else{
//                     return item.name + " x " + item.quantity + ", ";
//                   }
//                 })}
//               </p>
//             </div>
//           </div>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Orders;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


