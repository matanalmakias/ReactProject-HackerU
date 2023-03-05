import React, { useContext, useState } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import ProductItem from "./ProductItem";
import { toast, ToastContainer } from "react-toastify";
import "./products.css";
import AddProduct from "./AddProduct";
const Products = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  // const { products } = useContext(StoreContext);
  const toggleAddProduct = () => setShowAddProduct((state) => !state);
  const products = JSON.parse(localStorage.getItem("products"));
  if (products === null) {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    return <>Loading, wait 2 seconds...... </>;
  }
  return (
    <>
      <div className="">
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
