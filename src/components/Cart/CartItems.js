import React from 'react'
import { useCart } from "react-use-cart";

const CartItems = (item) => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    const buy = () => {
        alert("Order Placed");
    };

    return (
        <>
            <div className="modal" tabIndex="1" id="cartModal">
                <div className="modal-dialog modal-lg">
                    {!isEmpty ? <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">All Cart Item</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-light m-0">
                                <tbody>
                                    {items.map(({ id, title, img, price, quantity, }, index) => {
                                        return (
                                            <tr key={index} className="text-center">
                                                <td>
                                                    <img src={img} alt={img} style={{ height: "6rem" }} />
                                                </td>
                                                <td>{title}</td>
                                                <td><i class="fa-solid fa-indian-rupee-sign"></i>{price}</td>
                                                <td>
                                                    <button
                                                        onClick={() =>
                                                            updateItemQuantity(id, quantity - 1)
                                                        }
                                                        className="btn btn-info ms-2"
                                                    >
                                                        {" "}
                                                        <i class="fa-solid fa-minus"></i>{" "}
                                                    </button>
                                                    <span className="p-2 fw-bold">  {quantity}</span>
                                                    <button
                                                        onClick={() =>
                                                            updateItemQuantity(id, quantity + 1)
                                                        }
                                                        className="btn btn-info ms-2"
                                                    >
                                                        {" "}
                                                        <i class="fa-solid fa-plus"></i>{" "}
                                                    </button>

                                                </td>
                                                <td>
                                                    <button
                                                        onClick={() => removeItem(id)}
                                                        className="btn btn-danger ms-2"
                                                    >
                                                        {" "}
                                                        <i class="fa-solid fa-trash"></i> Remove{" "}
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="col-auto ms-auto mx-5 mt-4 d-flex justify-content-around">
                                <h5> Total price: <i class="fa-solid fa-indian-rupee-sign"></i>{cartTotal}</h5>
                                <h5 className="modal-title">Cart Items : <strong>{totalUniqueItems}</strong></h5>
                                <h5 className="modal-title">Total Items : <strong>{totalItems}</strong></h5>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <div className="col-auto mb-2">
                                <button onClick={() => emptyCart()} className="btn btn-danger ms-2">
                                    Clear Cart
                                </button>
                                <button onClick={buy} className="btn btn-primary ms-2">
                                    Buy Now{" "}
                                </button>
                            </div>
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div> : <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">All Cart Items</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">Empty Cart</div>
                        <div className="modal-footer">
                            <div className="col-auto mb-2">
                                <button className="btn btn-danger ms-2" data-bs-dismiss="modal" aria-label="Close">
                                    Close Cart
                                </button>
                            </div>
                        </div>
                    </div>}

                </div>
            </div>
        </>
    )
}

export default CartItems