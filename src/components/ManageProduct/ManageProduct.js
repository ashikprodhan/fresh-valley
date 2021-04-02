import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    useEffect(()=>{
        fetch('https://stormy-escarpment-82288.herokuapp.com/products')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[products])
    const handleDelete=id=>{
        console.log(id);
        fetch(`https://stormy-escarpment-82288.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res =>{
            if(res){
                alert('deleted successfully')
            }
        } )
        // .then(result =>{
        //     console.log('deleted successfully');
        // })

    }

    return (
        <div>
            <h5>Manage product</h5>
             <h6>Total product:{products.length} </h6>
             {
                 products.map(product=> <div> <p>{product.name} price{product.price}<button type="button" className="btn btn-success" ><FontAwesomeIcon icon={faEdit} /></button>  <button type="button" className="btn btn-danger" onClick={()=>handleDelete(`${product._id}`)} > <FontAwesomeIcon icon={faTrashAlt} />delete</button> </p> </div> )
             }

        </div>
    );
};

export default ManageProduct;