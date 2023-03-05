import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import PrudoctUpdate from "./PrudoctUpdate";
import { toast, ToastContainer } from "react-toastify";
const ProductItem = ({ item }) => {
  const [product, setProduct] = useState({ ...item });
  const [showItem, setShowItem] = useState(true);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);
  const navigate = useNavigate();
  let { name, id, category, price, image, description } = product;

  const editProduct = (productObj) => {
    setProduct((prevState) => {
      const newState = { ...prevState };
      for (const [key, value] of Object.entries(productObj)) {
        if (value !== null && key in newState) {
          newState[key] = value;
        }
      }
      return newState;
    });
  };

  const updateProduct = async (productObj) => {
    try {
      await editProduct(productObj);
      toast("המוצר עודכן בהצלחה.");
    } catch (err) {
      console.error(err);
    }
  };
  const toggleShowProduct = async () => {
    setShowUpdateProduct((state) => !state);
  };
  const deleteProduct = async () => {
    setShowItem((state) => !state);
  };
  return (
    <div key={item.id} className={showItem ? "" : "hide_class"}>
      <div key={name} className="fs-5 ProductsList card shadow border p-3 mb-3">
        <span className="fs-4">{name} </span>
        <hr /> <span>{description}</span>
        <br />
        {image}
        <hr />
        <span>{price}</span>
        <span>{category}</span>
        <button
          className="btn btn-primary fs-4 mt-3"
          onClick={() => {
            navigate(`/product/${id}`, { id: id });
          }}
        >
          לפרטים
        </button>
        <p onClick={() => toggleShowProduct()} className="bbutton">
          עריכה
        </p>
        <p onClick={() => deleteProduct()} className="bbutton2">
          מחיקה
        </p>
        <div className={showUpdateProduct ? "" : "hide_class"}>
          <PrudoctUpdate editProduct={updateProduct} product={item} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
