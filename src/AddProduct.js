import React, { useState } from "react";

function AddProduct(props) {
  const { addProduct } = props;
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <>
      <h3>Add a product to the list</h3>
      <input
        type="text"
        placeholder="Enter the name of the product"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />

      <input
        type="number"
        placeholder="Enter the quantity of the product"
        onChange={(event) => {
          setQuantity(event.target.value);
        }}
      />

      <button
        onClick={(event) => {
          addProduct(title, quantity);
          setTitle("");
          setQuantity("");
        }}
      >
        {" "}
        Add Product{" "}
      </button>
    </>
  );
}

export default AddProduct;
