import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CartItems.sass";

function CartItems(props) {
    return (
        <div className="cart-items">
            <div className="left">
                <img
                    src={props.url}
                    alt={props.title}
                    onClick={() => {
                        props.toggleModal(props.id);
                    }}
                />
                <h5>{props.title}</h5>
            </div>

            <div className="right">
                <label htmlFor="quantity">Quantity: {props.value}</label>
            </div>
        </div>
    );
}

export default CartItems;
