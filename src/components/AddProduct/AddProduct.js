import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const [productImg, setProductImg] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const productInfo ={
           name:data.pdName,
           price:data.price,
           weight:data.weight,
           image:productImg
        };
        const url=`https://stormy-escarpment-82288.herokuapp.com/addProduct`;
        fetch(url,{
            method: 'POST', 
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify(productInfo)  
        })
        .then((response) => response.json())
         .then((json) => console.log(json));
            };

    const handleImageUpload=event =>{
        console.log(event.target.files[0]);
        const photoData= new FormData();
        photoData.set('key','db78350f6ebd70e767f7750fb1ac2fd3');
        photoData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
        photoData)
          .then(function (response) {
            setProductImg(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <h4>Add your favorite product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="">product name</label>
                <input name="pdName" defaultValue="" placeholder="enter product name" ref={register} />
              <br/> <label htmlFor="">price</label> 
               <input name="price" defaultValue=""placeholder="enter product price"  ref={register} />
              <br/> <label htmlFor="">weight</label> 
               <input name="weight" defaultValue=""placeholder="enter product weight"  ref={register} />
               <br/> 
               <input name="exampleRequired" type="file" onChange={handleImageUpload} />
               <br/> <input type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;