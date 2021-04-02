import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {_id}=useParams();
    const [product, setProduct] = useState([])
    // console.log(_id);
    useEffect(()=>{
        fetch('https://stormy-escarpment-82288.herokuapp.com/products')
        .then(res =>res.json())
        .then(data => setProduct(data) )
    },[])
    const productDetail =product.find(pd => pd?._id ===_id);
/* newly added after check out */
    const handleCheckOut= ()=>{
            const newOrder ={...loggedInUser,product:productDetail ,date:new Date()}
            console.log(newOrder);
            fetch('https://stormy-escarpment-82288.herokuapp.com/addOrder',{
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify(newOrder)
            })
            .then(res =>res.json())
            .then(data => console.log(data) )
    }
    

    return (
        <div>
            {/* <h6> from check out page{_id}</h6>

             <h3>{productDetail?.name}</h3>
            <h4>{productDetail?.price}</h4>  */}
            <h5>Check out</h5>
            
            <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{productDetail?.name}</td>
      <td>1</td>
      <td>${productDetail?.price}</td>
    </tr>
    
    <tr>
    
      <td colspan="1">Total</td>
      <td colspan="1"></td>
      <td >${productDetail?.price}</td>
    </tr>
  </tbody>
</table>

<Link to="/orders" > <button  onClick={()=>handleCheckOut()}  type="button" className="btn btn-primary" >check out</button></Link> 



        
        </div>
    );
};

export default CheckOut;