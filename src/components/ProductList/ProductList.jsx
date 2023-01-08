import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  let { products, getProducts, deleteProduct } = useContext(productContext);

  let navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="d-flex">
      {products.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.brand}</Card.Title>
            <Card.Text style={{ fontSize: "20px" }}>
              {item.description}
            </Card.Text>
            <Card.Text style={{ fontSize: "30px" }}>{item.price}</Card.Text>
            <Button
              onClick={() => navigate(`/edit/${item.id}`)}
              className="w-50"
              variant="primary"
            >
              EDIT
            </Button>
            <Button
              onClick={() => deleteProduct(item.id)}
              className="w-50"
              variant="danger"
            >
              DELETE
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
