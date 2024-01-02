import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CheckOut from './components/CheckOut/CheckOut'
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
// import { Checkbox } from "@mui/material";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/checkout" element={<CheckOut />} />
                    <Route path="/product/:id" element={<SingleProduct  />} />
                </Routes>
                {/* <Newsletter /> */}
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
