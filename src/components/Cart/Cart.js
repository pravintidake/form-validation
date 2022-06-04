import React from 'react'
import { useCart } from "react-use-cart";

const Cart = (props) => {
    const { addItem } = useCart();
    console.log(props.item)
    return (
        <>
            <div className="col-lg-4 col-md-12 col-sm-12" key={props.id}>
                <div className="card mt-5">
                    <div className="card-body">
                        <img src={props.image} alt={props.image} style={{ width: '100%', height: '200px' }} />
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <h6>{props.title}</h6>
                        <button onClick={() => addItem(props.item)} data-bs-toggle="modal" data-bs-target="#cartModal" className="btn btn-outline-primary"><i className="fa-solid fa-cart-plus"></i> Add Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart