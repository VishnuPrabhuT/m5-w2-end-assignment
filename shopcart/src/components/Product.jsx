import { useState } from "react";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Product.sass";

function Product(props) {
    return (
        <>
            <div className="product">
                <div className="left">
                    <h5>{props.title}</h5>
                    <img
                        src={props.url}
                        alt={props.title}
                        onClick={() => {
                            props.toggleModal(props.id);
                        }}
                    />
                </div>
                <div className="buttons">
                    <button
                        onClick={(e) =>
                            props.changeQuantity(props.id, props.value + 1)
                        }
                    >
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                    <button
                        onClick={(e) =>
                            props.changeQuantity(props.id, props.value - 1)
                        }
                    >
                        <FontAwesomeIcon icon={faMinusCircle} />
                    </button>
                </div>
                <div className="right">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        name="quantity"
                        type="text"
                        onChange={(e) =>
                            props.changeQuantity(props.id, e.target.value)
                        }
                        value={props.value}
                    />
                </div>
            </div>
        </>
    );
}

export default Product;
