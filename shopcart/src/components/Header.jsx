import {
    faRegistered,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./Header.sass";

function Header(props) {
    return (
        <header>
            <Link to="/">
                <h2>
                    Shop 2 <FontAwesomeIcon icon={faRegistered} />
                    eact
                </h2>
            </Link>
            <span>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} /> {props.cartCount}{" "}
                    items
                </Link>
            </span>
        </header>
    );
}

export default Header;
