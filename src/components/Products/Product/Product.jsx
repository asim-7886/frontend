import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id, }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img alt='img'
                
                    src={"https://1372-103-150-207-38.ngrok-free.app" + data.img.data[0].attributes.url }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">Rs: {data.price}</span>
            </div>
        </div>
    );
};

export default Product;
