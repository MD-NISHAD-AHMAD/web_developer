import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const getData = (url) => {
  return axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
};

export const SingleUserPage = () => {
  const [data, setData] = useState({});
  const { productID } = useParams();

  const api = `https://fakestoreapi.com/products/${productID}`;

  useEffect(() => {
    getData(api)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [productID]);

  return (
    <div>
      <div
        key={data.id}
        style={{
          border: "2px solid #000",
          padding: "15px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          color: "#000",
        }}
      >
        <h4 style={{ textAlign: "center" }}>{data.id}</h4>

        <img
          src={data.image}
          alt="Products"
          style={{
            width: "210px",
            height: "auto",
            display: "block",
            margin: "auto",
          }}
        />

        <h3 style={{ textTransform: "capitalize" }}>
          Title: {data.title}
        </h3>

        <h3>Price: ${data.price}</h3>

        <h3 style={{ textTransform: "capitalize" }}>
          Category: {data.category}
        </h3>

        <p>
          <u style={{ padding: "11px 0" }}>Description</u>:{' '}
          {data.description}
        </p>
      </div>
    </div>
  );
};
