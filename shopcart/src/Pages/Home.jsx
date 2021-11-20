import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../components/Product";
import { Modal } from "react-bootstrap";

function Home(props) {
    const [show, setShow] = useState(false);
    const [p, setP] = useState({});

    function toggleModal(id) {
        let p = props.products;
        for (let i = 0; i < p.length; i++) {
            if (p[i].id === id) {
                setP(p[i]);
                setShow(true);
            }
        }
    }
    console.log(props.products);
    return (
        <>
            {props.products.map((product) => {
                return (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.desc}
                        url={product.image}
                        value={product.value}
                        price={product.price}
                        rating={product.ratings}
                        show={product.show}
                        changeQuantity={props.changeQuantity}
                        toggleModal={toggleModal}
                    ></Product>
                );
            })}
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
        </>
    );
}

export default Home;
