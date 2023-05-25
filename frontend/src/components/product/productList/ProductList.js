import React from 'react';
import "./ProductList.scss";
import { SpinnerImg } from '../../loader/Loader';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";


const ProductList = ({products, isLoading}) => {
    const shortenText =(text, n) => {
        if (text.length > n) {
            const shortenText = text.substring(0, n).
            concat("...")
            return shortenText
     }
        return text;
    }
    return (
        <div className='product-list'>
            <hr />
            <div className='table'>
                <div className='--flex-between --flex-dir-column'>
                    <span>
                        <h3>Iventory Items</h3>
                    </span>
                    <span>
                        <h3>Search Items</h3>
                    </span>
                </div>
            
            {isLoading && <SpinnerImg/>}
            <div className='table'>
                {!isLoading && products.length === 0 ? (
                    <p>No product found, please add one</p>
                ) : (
                  <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Value</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((product, index) => {
                                const {_id, name, category, price, quantity} = product
                                return (
                                    <tr key={_id}>
                                        <td>{index + 1}</td>
                                        <td>{shortenText(name, 16)}</td>
                                        <td>{category}</td>
                                        <td>{"$"}{price}</td>
                                        <td>{quantity}</td>
                                        <td>{"$"}{price * quantity}</td>

                                        <td className='icons'>
                                            <span>
                                                <AiOutlineEye size={25}
                                                color={"purple"}/>
                                            </span>
                                            <span>
                                                <FaEdit size={25}
                                                color={"green"}/>
                                            </span>
                                            <span>
                                                <FaTrashAlt size={25}
                                                color={"red"}/>
                                            </span>

                                        </td>


                                        
                                    </tr>

                                )
                            }
                        )}
                    </tbody>
                  </table>  
                ) }
            </div>

            </div>
        </div>
    )
}

export default ProductList;