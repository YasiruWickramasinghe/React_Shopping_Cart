import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../Services/Features/Products/cartSlice";
import { useGetAllProductsQuery } from "../Services/Features/Products/productsApi";

import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 2vw 4vw;

  h2 {
    font-size: 4vw;
    font-weight: 400;
    text-align: center;
  }
`;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2vw;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1vw auto;
  padding: 1vw;
  border-radius: 1.5vw;
  width: 25vw;
  max-width: 100%;
  height: 40vw;
  box-shadow: -0.5vw -0.5vw 1vw rgba(255, 255, 255, 0.5),
    0.2vw 0.2vw 0.5vw rgba(94, 104, 121, 0.3);

  h3 {
    font-size: 2.5vw;
    font-weight: 400;
  }

  img {
    width: 80%;
    margin-top: 1vw;
    margin-left: auto;
    margin-right: auto;
  }

  button {
    width: 100%;
    height: 4vw;
    border-radius: 0.5vw;
    margin-top: 2vw;
    font-weight: 400;
    letter-spacing: 0.1vw;
    background-color: #4b70e2;
    color: #f9f9f9;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 2vw;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 2.5vw;
  }
`;

const Price = styled.span`
  font-size: 2vw;
  font-weight: 700;
`;

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <HomeContainer>
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <Products>
            {data &&
              data?.map((product) => (
                <Product key={product.id}>
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <Details>
                    <span>{product.desc}</span>
                    <Price>${product.price}</Price>
                  </Details>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </Product>
              ))}
          </Products>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </HomeContainer>
  );
};

export default Home;
