import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText,image }) => {
    return (
        <div className="products-container">
            {/* {!innerPage && <div className="sec-heading">{headingText}</div>} */}
           
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {/* <img src={"process.env.REACT_APP_STRIPE_APP_DEV_URL" + image} alt="" width="300px" height="300px" /> */}
                {products?.data?.map((item) => (
                    // console.log(item.attributes)
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                        img={item.attributes.img.data.attributes}

                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
