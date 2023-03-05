import React, { useContext, useState } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import ProductItem from "./ProductItem";
import { toast, ToastContainer } from "react-toastify";
import "./products.css";
import AddProduct from "./AddProduct";
const Products = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const { setProducts } = useContext(StoreContext);

  const [sortedBy, setSortedBy] = useState(null);
  const toggleAddProduct = () => setShowAddProduct((state) => !state);
  const products = JSON.parse(localStorage.getItem("products"));
  if (products === null) {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    return <>Loading, wait 2 seconds...... </>;
  }
  const sortProducts = (sortBy) => {
    let sortedProducts = [...products];
    if (sortBy === "category") {
      sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === "price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    setSortedBy(sortBy);
    setProducts(sortedProducts);
  };
  return (
    <>
      <div className="">
        <p className="text-black fw-bold">מיין לפי</p>
        <div className="justify-content-center d-flex flex-row">
          <p onClick={() => sortProducts("category")} className="w-50 bbutton">
            קטגוריה
          </p>
          <p onClick={() => sortProducts("price")} className="w-50 bbutton">
            מחיר
          </p>
        </div>
        <hr />
        <p onClick={() => toggleAddProduct()} className="bbutton">
          הוסף מוצר
        </p>
        {products?.map((item, index) => (
          <div key={index}>
            <div key={index} className={showAddProduct ? "" : "hide_class"}>
              <AddProduct item={item} />{" "}
            </div>
            <ProductItem key={item.id} item={item} />{" "}
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};
export default Products;
