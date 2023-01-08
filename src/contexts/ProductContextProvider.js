import axios from "axios";
import React, { createContext, useState } from "react";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  let API = " http://localhost:8000/products";

  const [products, setProducts] = useState([]);

  const [oneProduct, setOneProduct] = useState(null);

  //!  === ADD PRODUCT ===

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  //!  === GET PRODUCTS ===

  async function getProducts() {
    let { data } = await axios.get(API);
    setProducts(data);
  }

  //!  === DELETE PRODUCT ===

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  //!  === GET ONE PRODUCT ===

  async function getOneProduct(id) {
    let { data } = await axios.get(`${API}/${id}`);
    setOneProduct(data);
  }

  //! === UPDATE PRODUCT ===

  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }

  let values = {
    addProduct,
    products,
    getProducts,
    deleteProduct,
    oneProduct,
    getOneProduct,
    updateProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
