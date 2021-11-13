import React, { useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import CartItems from "../components/CartItems";
import { Modal } from "react-bootstrap";

import "./Cart.sass";

function Cart(props) {
    let cartItems = props.products.filter((product) => product.value > 0);

    const [show, setShow] = useState(false);
    const [p, setP] = useState({});

    function toggleModal(id) {
        let p = cartItems;
        for (let i = 0; i < p.length; i++) {
            if (p[i].id === id) {
                setP(p[i]);
                setShow(true);
            }
        }
    }

    function getCartView() {
        if (Boolean(cartItems.length)) {
            return (
                <>
                    {cartItems.map((product) => (
                        <CartItems
                            className="cart-items"
                            key={product.id}
                            id={product.id}
                            title={product.desc}
                            url={product.image}
                            value={product.value}
                            show={product.show}
                            changeQuantity={props.changeQuantity}
                            toggleModal={toggleModal}
                        ></CartItems>
                    ))}
                    <Link to="/checkout">
                        <button className="btn btn-primary">Check Out</button>
                    </Link>
                </>
            );
        }

        return (
            <>
                <p>{`There are ${cartItems.length} items in your cart.`}</p>
                <Link to="/">
                    <button className="btn btn-success">
                        Continue Shopping
                    </button>
                </Link>
            </>
        );
    }

    return (
        <div className="cart-container">
            <h3>Your Cart Items</h3>
            {getCartView()}

            <Modal
                show={show}
                onHide={() => {
                    setShow(false);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{p.desc}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={p.image} alt={p.title} />
                </Modal.Body>
                <Modal.Footer>Ratings: {p.ratings} / 5</Modal.Footer>
            </Modal>
        </div>
    );
}

export default Cart;
