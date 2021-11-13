import React from "react";
import FacebookLogin from "react-facebook-login";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Checkout.sass";
import { useState } from "react";

function Checkout() {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    function responseFacebook(res) {
        console.log(res);
        setData(res);
        setPicture(res.picture.data.url);
        if (res.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    return (
        <>
            {!login && (
                <div className="checkout-container">
                    <h2>Sign in</h2>
                    <h4>Please login using one of the following</h4>

                    <form action="/post">
                        <div>
                            <label className="form-label" htmlFor="typeNameX-2">
                                Name
                            </label>
                            <input
                                type="email"
                                id="name"
                                className="form-control"
                            />
                        </div>
                        <div>
                            <label
                                className="form-label"
                                htmlFor="typeEmailX-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                            />
                        </div>
                        <button className="btn btn-success" type="submit">
                            Login
                        </button>
                    </form>
                    <div>
                        <FacebookLogin
                            appId="637489210597702"
                            autoLoad={false}
                            fields="name,email,picture"
                            scope="public_profile"
                            callback={responseFacebook}
                            icon="fa-facebook"
                        />
                    </div>
                </div>
            )}
            {login && (
                <div className="checkout-container">
                    <h2>Checkout</h2>

                    <h4>
                        <img
                            src={data.picture.data.url}
                            alt="placeholder"
                            width={50}
                            height={50}
                        />{" "}
                        Welcome back shopper!
                    </h4>
                    <p>Time to checkout?</p>
                </div>
            )}
        </>
    );
}

export default Checkout;
