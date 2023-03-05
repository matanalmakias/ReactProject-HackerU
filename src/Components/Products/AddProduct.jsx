import React, { useContext, useState } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import { Button, Form } from "react-bootstrap";
import "./products.css";
const AddProduct = () => {
  const [nameInput, setNameInput] = useState();
  const [descriptionInput, setDescriptionInput] = useState();
  const [priceInput, setPriceInput] = useState();
  const [categoryInput, setCategoryInput] = useState();
  const [imageInput, setImageInput] = useState();
  const { addProduct, images, categories } = useContext(StoreContext);
  let newProduct = {
    name: nameInput,
    description: descriptionInput,
    price: priceInput,
    image: imageInput,
    category: categoryInput,
  };

  return (
    <div
      dir="rtl"
      className=" p-1 m-1 card justify-content-center d-flex flex-column"
    >
      <Form onSubmit={() => addProduct(newProduct)}>
        <input
          required
          className="form-control p-1"
          onChange={(e) => setNameInput(e.target.value)}
          type="text"
          placeholder="כותרת מוצר"
        />
        <input
          required
          className="form-control p-1"
          onChange={(e) => setDescriptionInput(e.target.value)}
          type="text"
          placeholder="תיאור מוצר"
        />
        <input
          required
          className="form-control p-1"
          onChange={(e) => setPriceInput(e.target.value)}
          type="number"
          placeholder="מחיר מוצר"
        />
        <select
          required
          className="form-control p-1"
          onChange={(e) => setCategoryInput(e.target.value)}
        >
          <option value="">בחר קטגוריה</option>
          {categories.map((category) => (
            <option>{category}</option>
          ))}
        </select>

        <select
          required
          className="form-control p-1"
          onChange={(e) => setImageInput(e.target.value)}
        >
          <option value="">בחר סמל</option>
          {images.map((image) => (
            <option>{image}</option>
          ))}
        </select>
        <Button className="bbutton" type="submit">
          הוסף מוצר
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
