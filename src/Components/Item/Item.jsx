import React, { useState } from "react";

const Item = ({ index, element, setCartCount, cartcount }) => {
  const [status, setStatus] = useState(true);
  const addProduct = () => {
    setStatus(false);
    setCartCount((cartcount) => cartcount + 1);
  };
  const removeProduct = () => {
    setStatus(true);
    setCartCount((cartcount) => cartcount - 1);
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{element.name}</h5>
            <strong>{element.price}</strong><br/>
            {element.desc}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {status ? (
              <a
                className="btn btn-outline-dark mt-auto" href="#" target="_top"
                onClick={addProduct}
              >
                Add to cart
              </a>
            ) : (
              <a
                className="btn btn-outline-dark mt-auto" href="#" target="_top"
                onClick={removeProduct}
              >
                Remove from cart
              </a>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
