import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  let { oneProduct, getOneProduct, updateProduct } = useContext(productContext);

  let { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setImage(oneProduct.image);
      setBrand(oneProduct.brand);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
    }
  }, [oneProduct]);

  // В данном случае , handleValues - отвечает за сохранение измененного объекта
  function handleValues() {
    let editedProduct = {
      image,
      brand,
      description,
      price,
      id: Date.now(),
    };
    updateProduct(id, editedProduct);
  }

  return (
    <div>
      <h1>EDIT PRODUCT</h1>
      <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="image"
        // Обязательно указать value в inpute , чтобы стянуть старые данные и изменить их
        value={image}
      />
      <input
        onChange={(e) => setBrand(e.target.value)}
        type="text"
        placeholder="brand"
        value={brand}
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="description"
        value={description}
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="price"
        value={price}
      />
      <button onClick={handleValues}>save</button>
    </div>
  );
};

export default EditProduct;
