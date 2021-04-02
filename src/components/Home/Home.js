import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Products from '../Products/Products';

// const products = [
//     {
//         name: 'Marks Full Cream Milk Powder ',
//         pic: 'image 32.png',
//         weight:'300gm',
//         price:'22'
//     },
//     {
//         name: 'Moushum Bay Leaves',
//         pic: 'image 33.png'
//         ,
//         weight:'333gm',
//         price:'10'
//     },
//     {
//         name: 'Onion Local',
//         pic: 'image 34.png',
//         weight:'1kg',
//         price:'12'
//     },
//     {
//         name: 'Rashid Minicate Rice',
//         pic: 'image 35.png',
//         weight:'50kg',
//         price:'1233'
//     },
//     {
//         name: 'Omera LPG Refill ',
//         pic: 'image 36.png',
//         weight:'12kg',
//         price:'509'
//     },
//     {
//         name: 'Bombay Sweets Mr.Twist',
//         pic: 'image 37.png',
//         weight:'25gm',
//         price:'15'
//     }
// ]

const Home = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    useEffect(()=>{
        fetch('https://stormy-escarpment-82288.herokuapp.com/products')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <Container >
           
           
               
            
        
         
           {
                products.length === 0 && <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border" role="status">
                        {/* <span className="visually-hidden">Loading...</span> */}
                    </div>
                </div>
            }
            <div className="row">
            {
                products.map(product => <Products key={product._id} product={product} ></Products> )
            }
       
            </div>
           
        
            
               
           
        </Container>
    );
};

export default Home;