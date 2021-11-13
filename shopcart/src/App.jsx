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
            ratings: "4",
        },
        {
            id: 2,
            image: "/products/iwatch.jpg",
            desc: "Apple iWatch",
            value: 0,
            ratings: "2",
        },
        {
            id: 3,
            image: "/products/mug.jpg",
            desc: "Unique Mug",
            value: 0,
            ratings: "4.5",
        },
        {
            id: 4,
            image: "/products/wallet.jpg",
            desc: "Mens Wallet",
            value: 0,
            ratings: "5",
        },
    ];

    const [cartCount, setCartCount] = useState(0);
    const [products, setProducts] = useState(prods);

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

    return (
        <>
            <Router>
                <div className="shop-cart">
                    <Header cartCount={cartCount} />
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
