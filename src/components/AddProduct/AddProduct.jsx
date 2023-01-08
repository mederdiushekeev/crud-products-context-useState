import React, { useContext, useState } from "react";
import { productContext } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  let { addProduct } = useContext(productContext);

  function handleValues() {
    let newProduct = {
      image,
      brand,
      description,
      price,
      id: Date.now(),
    };
    addProduct(newProduct);
  }

  return (
    <div>
      <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="image"
      />
      <input
        onChange={(e) => setBrand(e.target.value)}
        type="text"
        placeholder="brand"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="description"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="price"
      />
      <button onClick={handleValues}>add product</button>
    </div>
  );
};

export default AddProduct;
