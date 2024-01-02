import React, { useEffect, useContext,Suspense,lazy } from "react";
import "./Home.scss";
// import Banner from "./Banner/Banner";

// import Category from "./Category/Category";
// import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
const Category = lazy(()=>import('./Category/Category'));
const Banner = lazy(()=>import('./Banner/Banner'));
const Products = lazy(()=>import('../Products/Products'));

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    };

    return (
        <div>
           <Suspense fallback={"Banner is loading ..."}>
           <Banner />
                   </Suspense>
          
            <div className="main-content">
                <div className="layout">
            <div className="sec-heading">POPULAR CATEGORY</div>
            <Suspense fallback={"Category is loading....."}>
            {!!categories ? <Category categories={categories} />  : 'Category show here but server is down'}
 </Suspense>
                   
                   <Suspense fallback={"Products is loading..."}>
                   <div className="sec-heading">Popular Products</div>     
                       {!!Products ? <Products  products={products} />  : 'Category show here but server is down'}
                     
                   </Suspense>
                  
                </div>
            </div>
        </div>
    );
};

export default Home;
