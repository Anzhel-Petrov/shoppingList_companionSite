import React, { useState } from "react";

function AddProduct(props) {
  const { addProduct } = props;
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  const [titleErr, setTitleErr] = useState({});
  const [quantErr, setDescErr] = useState({});

  const formValidation = () => {
    const titleErr = {};
    const quantErr = {};
    let isValid = true;

    if (!title.trim()) {
      titleErr.titleErrNone = "Title cannot be empty";
      isValid = false;
    }

    if (!quantity.trim()) {
      quantErr.descErrNone = "Quantity cannot be empty";
      isValid = false;
    }

    setTitleErr(titleErr);
    setDescErr(quantErr);
    return isValid;
  };

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
      {Object.keys(titleErr).map((key) => {
        return <div style={{ color: "red" }}>{titleErr[key]}</div>;
      })}
      <input
        type="number"
        placeholder="Enter the quantity of the product"
        onChange={(event) => {
          setQuantity(event.target.value);
        }}
      />
      {Object.keys(quantErr).map((key) => {
        return <div style={{ color: "red" }}>{quantErr[key]}</div>;
      })}
      <button
        onClick={(event) => {
          // event.preventDefault();
          const isValid = formValidation();
          if (isValid) {
            addProduct(title, quantity);
            setTitle("");
            setQuantity("");
          }
        }}
      >
        {" "}
        Add Product{" "}
      </button>
    </>
  );
}

export default AddProduct;
