import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsList } from "../../data/products";
import { Button } from "react-bootstrap";

const ProductDetails = ({ item }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = ProductsList.find((item) => item.id === id);
  const { name, category, price, image, description } = product;

  return (
    <>
      <div className="bg-primary text-white card fs-4 p-4">
        <span>
          <h1 className="h1">{name}</h1>
        </span>
        <hr />
        <span>{description} </span>
        <span> {image} </span>
        <hr />
        <span>{price} </span>
        <span>{category} </span>
        <Button
          variant="light"
          className="fs-2 mt-3"
          onClick={() => navigate(-1)}
        >
          חזור
        </Button>{" "}
      </div>
    </>
  );
};

export default ProductDetails;
