import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../contexts/StoreContext";

const PrudoctUpdate = ({ editProduct, product }) => {
  const [titleInput, setTitleInput] = useState(null);
  const [descriptionInput, setDescriptionInput] = useState(null);
  const [priceInput, setPriceInput] = useState(0);
  const { id } = useParams();
  const { products } = useContext(StoreContext);
  let newProduct = {
    name: titleInput,
    description: descriptionInput,
    price: priceInput,
  };
  return (
    <div
      dir="rtl"
      className="m-1 gap-2 p-1 justify-content-center d-flex flex-column"
    >
      <input
        onChange={(e) => setTitleInput(e.target.value)}
        className="fw-bold text-center form-control p-1 w-100"
        type="text"
        placeholder="ערוך כאן את כותרת המוצר"
      />

      <input
        onChange={(e) => setDescriptionInput(e.target.value)}
        className="fw-bold text-center form-control p-1 w-100"
        type="text"
        placeholder="ערוך כאן את תיאור המוצר"
      />
      <input
        onChange={(e) => setPriceInput(e.target.value)}
        className="fw-bold text-center form-control p-1 w-100"
        type="number"
        placeholder="ערוך את מחיר המוצר"
      />
      <p className="bbutton" onClick={() => editProduct(newProduct)}>
        שלח
      </p>
    </div>
  );
};

export default PrudoctUpdate;
