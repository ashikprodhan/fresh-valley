import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([]);
    console.log(orders);
    useEffect(()=>{
        fetch('https://stormy-escarpment-82288.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[orders])

    return (
        <div>
            <h5> you have {orders.length} orders </h5>
            {
                orders.map(order => <pre> {order.product?.name}   <strong> price </strong>  ${order.product?.price} <strong> Date:{(new Date(order.date)).toDateString('dd/MM/yyyy')} </strong> </pre> )
            }
        </div>
    );
};

export default Orders;