import React, { createContext, useEffect, useState } from "react";
import { ProductsList } from "../data/products";
import { v4 } from "uuid";
import { toast } from "react-toastify";
const StoreContext = createContext({
  images: [],
  products: [],
  categories: [],
  addProduct: () => {},
  setProducts: () => {},
});

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState(ProductsList);
  const localProducts = localStorage.getItem("products");
  useEffect(() => {
    if (localProducts === null) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  const addProduct = async (productObj) => {
    const newProduct = {
      id: v4(),
      name: productObj.name,
      price: productObj.price,
      description: productObj.description,
      image: productObj.image,
      category: productObj.category,
    };

    setProducts([...products, newProduct]);
    toast("המוצר התווסף בהצלחה.");
  };
  let images = [];
  let categories = [];
  for (let product of products) {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    } else if (!images.includes(product.images)) {
      images.push(product.image);
    }
  }

  return (
    <StoreContext.Provider
      value={{ setProducts, addProduct, images, categories, products }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
