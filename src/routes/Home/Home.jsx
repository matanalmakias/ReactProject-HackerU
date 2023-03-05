import React from "react";
import Container from "react-bootstrap/Container";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <Container className="bg-light">
      <Products />
    </Container>
  );
};

export default Home;
