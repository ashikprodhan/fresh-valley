
import React from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    // console.log(product);
    return (
        
            <div className="col-md-4">
            <Card >
            <Card.Img variant="top" src={product.image}  />
                <Card.Body>
                    <Card.Title>{product.name}-{product.weight}</Card.Title>
                    <Card.Text>
            
                      Price:$ {product.price}
                     </Card.Text>
             
                     <Link to={`/product/${product._id}`}   className="btn btn-primary">Buy now</Link> 
                </Card.Body>
            </Card>
           
         
             </div>
        
    );
};

export default Products;