import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./routes/homepage/homepage.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Contact from "./routes/contact/contact.component";
import Header from "./components/header/header.component";
import Checkout from "./routes/checkout/checkout.component";

import { auth } from "./utils/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <Routes>
                <Route path="/" element={<Header currentUser={this.state.currentUser} />}>
                    <Route index element={<Homepage />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="shop/*" element={<Shop />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        );
    }
}

export default App;
