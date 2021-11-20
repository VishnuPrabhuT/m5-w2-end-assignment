import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

import "./App.sass";
import Checkout from "./Pages/Checkout";

function App() {
    let prods = [
        {
            id: 1,
            image: "/products/cologne.jpg",
            desc: "Unisex Cologne",
            value: 0,
            price: 5,
            ratings: "4",
        },
        {
            id: 2,
            image: "/products/iwatch.jpg",
            desc: "Apple iWatch",
            value: 0,
            price: 20,
            ratings: "2",
        },
        {
            id: 3,
            image: "/products/mug.jpg",
            desc: "Unique Mug",
            value: 0,
            price: 10,
            ratings: "4.5",
        },
        {
            id: 4,
            image: "/products/wallet.jpg",
            desc: "Mens Wallet",
            value: 0,
            price: 15,
            ratings: "5",
        },
    ];

    const [cartCount, setCartCount] = useState(0);
    const [products, setProducts] = useState(prods);
    const [sorts, setSorts] = useState({ lowest: -1, normal: 0, highest: 1 });

    function changeQuantity(id, quantity) {
        let p = products;
        for (let i = 0; i < p.length; i++) {
            if (p[i].id === id) {
                p[i].value = Number(quantity) < 0 ? 0 : Number(quantity);
            }
        }
        setProducts(p);

        let sum = products.reduce((s, product) => {
            return product.value + s;
        }, 0);

        setCartCount(sum < 0 ? 0 : sum);
    }

    function sort(key) {
        let prods = Array.from(products);
        prods.sort((a, b) => a.id - b.id);

        switch (key) {
            case "lowest":
                prods.sort((a, b) => {
                    return a.price - b.price;
                });
                break;
            case "highest":
                prods.sort((a, b) => {
                    return b.price - a.price;
                });
                break;
            case "normal":
                prods.sort((a, b) => {
                    return a.id - b.id;
                });
                break;
        }

        // console.log(prods);
        setProducts(prods);
    }

    return (
        <>
            <Router>
                <div className="shop-cart">
                    <Header cartCount={cartCount} />
                    <div className="sorter">
                        <label htmlFor="sorts">Sort Price By: </label>{" "}
                        <select
                            name="sorts"
                            id="sorts"
                            onChange={(e) => {
                                sort(
                                    e.target.selectedOptions[0].getAttribute(
                                        "k"
                                    )
                                );
                            }}
                        >
                            {Object.keys(sorts).map((s) => {
                                return (
                                    <option key={s} k={s} value={sorts[s]}>
                                        {s}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <Routes>
                        <Route
                            path="/cart"
                            element={
                                <Cart
                                    cartCount={cartCount}
                                    products={products}
                                    changeQuantity={changeQuantity}
                                />
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <Home
                                    cartCount={cartCount}
                                    products={products}
                                    changeQuantity={changeQuantity}
                                />
                            }
                        />
                        <Route
                            path="/checkout"
                            element={
                                <Checkout
                                    cartCount={cartCount}
                                    products={products}
                                    changeQuantity={changeQuantity}
                                />
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
