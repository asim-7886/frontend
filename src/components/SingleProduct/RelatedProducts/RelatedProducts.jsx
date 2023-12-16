import React from "react";
import useFetch from "../../../hooks/useFetch";
import Product from "../../Products/Products";

const RelatedProducts = ({ img, productId, products,image }) => {
    const { data } = useFetch(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${img}&pagination[start]=0&pagination[limit]=4`
    );

    return (
        <div className="related-products">
            {/* <Products products={data} image={img} /> */}
            
            {/* {img.map((item) => (
                    // console.log(item.attributes) */}
                    <img alt="img"  src={"http://192.168.0.12:1337" + img } height="300px" width="300px"/>
                {/* ))} */}



        </div>
    );
};

export default RelatedProducts;
