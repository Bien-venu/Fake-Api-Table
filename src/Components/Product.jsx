import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const data = async () => {
      const prodData = await (
        await fetch("https://fakestoreapi.com/products")
      ).json();
      setProduct(prodData);
    };
    data();
  }, []);

  const handle = (id) => {
    setProduct(product.filter((item)=>item.id !== id))
  };

  return (
    <>
      <div className="table">
        <h1>Here is table of {product.length} Product</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th style={{ width: "5rem" }}></th>
              <th>Image</th>
              <th style={{ width: "5rem" }}></th>
              <th>Category</th>
              <th style={{ width: "5rem" }}></th>
              <th style={{ width: "45rem" }}>Description</th>
              <th style={{ width: "5rem" }}></th>
              <th>Price</th>
              <th style={{ width: "5rem" }}></th>
              <th style={{ width: "5rem" }}>Delete</th>
              <th></th>
            </tr>
          </thead>
          {product.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td></td>
                <td>
                  <img src={item.image} alt="" width="100" />
                </td>
                <td></td>
                <td>{item.category} </td>
                <td></td>
                <td>{item.description}</td>
                <td></td>
                <td>{item.price}</td>
                <td></td>
                <td>
                  <Button className="btn" onClick={() => handle(item.id)}>
                    Delete
                  </Button>
                </td>
                <td></td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default Product;
