import React from "react";
import { ErrorBoundary } from "react-error-boundary";

// ErrorFallback component
const ErrorFallback = ({ error }) => {
  return (
    <div>
      <h3>Oops! Something went wrong.</h3>
      <p>{error.message}</p>
    </div>
  );
};

// Product component
const Product = ({ name, price }) => {
  if (!name || !price) {
    throw new Error("Invalid product data");
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

// Parent component where ErrorBoundary is used
const App = () => {
  const product = {
    name: "",
    price: "$999"
  };

  return (
    <div>
      <h1>Product Details</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Product name={product.name} price={product.price} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
