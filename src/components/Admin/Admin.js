import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faPlus,faTasks } from '@fortawesome/free-solid-svg-icons'
import './Admin.css';

const Admin = () => {
    const [show, setShow] = useState(true)

    return (
        <div>
            <div class="sidebar">

                <Link onClick={() => setShow(true)}><FontAwesomeIcon icon={faTasks} /> Manage Product</Link>
                <br />
                <Link onClick={() => setShow(false)} > <FontAwesomeIcon icon={faPlus} /> Add product </Link>
                <br />
                <Link><FontAwesomeIcon icon={faEdit} /> Edit Product</Link>


            </div>

            <div class="content">

                {show && <ManageProduct></ManageProduct>}
                
                {
                    !show && <AddProduct></AddProduct>
                }

            </div>

        </div>
    );
};

export default Admin;