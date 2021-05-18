import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { db } from "./services/firebase";
import AddProduct from "./AddProduct";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const subscriber = db.collection("products").onSnapshot((querySnapshot) => {
      const getProductsFromFirebase = [];
      querySnapshot.forEach((doc) => {
        getProductsFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setProducts(getProductsFromFirebase);
      setLoading(false);
    });
    return () => subscriber();
  }, [loading]);

  function addProduct(title, quantity) {
    const product = {
      title: title,
      quantity: parseInt(quantity),
    };
    db.collection("products").add(product);
  }

  function deleteProduct(key) {
    db.collection("products")
      .doc(key)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  function deleteAllProducts() {
    products.forEach((p) => {
      db.collection("products")
        .doc(p.key)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    });
  }

  if (loading) {
    return <h4>Loading product list from firebase!</h4>;
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Products</h2>
        <>
          {products.length > 0 ? (
            products.map((product) => (
              <ul>
                <li key={product.key}>
                  {product.title} {product.quantity}{" "}
                  <button
                    onClick={(event) => {
                      deleteProduct(product.key);
                    }}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            ))
          ) : (
            <h4>No products inside the list!</h4>
          )}
          <button
            onClick={() => {
              if (window.confirm("Are you sure you wish to the entire list?"))
                deleteAllProducts();
            }}
          >
            Delete All
          </button>
        </>
        <AddProduct addProduct={addProduct} />
      </header>
    </div>
  );
}

export default App;
