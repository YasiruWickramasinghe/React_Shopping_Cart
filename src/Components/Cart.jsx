import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../Services/Features/Cart/cartSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartContainer = styled.div`
  padding: 2rem 4rem;

  h2 {
    font-weight: 400;
    font-size: 3vw;
    text-align: center;
  }
`;
const Titles = styled.div`
  margin: 2vw 0 1vw 0;

  display: grid;
  align-items: center;
  grid-template-columns: auto 15vw 15vw 15vw;
  column-gap: 0.5vw;

  h3 {
    font-size: 1.4vw;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const CartItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 15vw 15vw 15vw;
  column-gap: 0.5vw;

  border-top: 0.1vw solid rgb(187, 187, 187);
  padding: 1vw 0;
`;

const ProductTitle = styled.h3`
  padding-left: 0.5vw;
`;

const ProductTotal = styled.h3`
  padding-right: 0.5vw;
  justify-self: right;
`;

const CartProduct = styled.div`
  display: flex;

  img {
    width: 10vw;
    height: 10vw;
    max-width: 100%;
    margin-right: 1vw;
  }
  h3 {
    font-weight: 400;
    font-size: 1.8vw;
  }

  p {
    font-weight: 400;
    font-size: 1.5vw;
  }
  button {
    border: none;
    outline: none;
    margin-top: 0.7vw;
    cursor: pointer;
    background: none;
    color: gray;
    font-size: 1.5vw;

    &:hover {
      color: black;
    }
  }
`;
const CartProductPrice = styled.div`
  font-size: 1.8vw;
`;

const CartProductQuantity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 10vw;
  max-width: 100%;
  border: 0.5px solid rgb(177, 177, 177);
  border-radius: 0.5vw;
  font-size: 1.8vw;

  button {
    border: none;
    outline: none;
    background: none;
    padding: 1.5vw 2vw;
    cursor: pointer;
    font-size: 1.5vw;
  }
`;

const Count = styled.div`
  padding: 1.5vw 0;
`;

const CartProductTotalPrice = styled.div`
  padding-right: 0.5vw;
  justify-self: right;
  font-weight: 700;
  font-size: 1.8vw;
`;

const StartShoppping = styled.div`
  margin-top: 1vw;
  a {
    color: gray;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 0.5vw;
  }
`;
const ContinueShoppping = styled.div`
  margin-top: 1vw;

  a {
    color: gray;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 0.5vw;
    font-size: 1.5vw;
  }
`;

const CartEmpty = styled.div`
  font-size: 2vw;
  margin-top: 2vw;
  color: rgb(84, 84, 84);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgb(187, 187, 187);
  padding-top: 2vw;
`;

const ClearButton = styled.button`
  width: 13vw;
  height: 4vw;
  border-radius: 0.5vw;
  font-weight: 400;
  letter-spacing: 1.15px;
  border: 0.5px solid rgb(177, 177, 177);
  color: gray;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5vw;
`;
const CartCheckout = styled.div`
  width: 27vw;
  max-width: 100%;

  p {
    font-size: 1.4vw;
    font-weight: 200;
    margin: 0.5vw 0;
  }
  button {
    width: 100%;
    height: 4vw;
    border-radius: 0.5vw;
    font-weight: 400;
    letter-spacing: 1.15px;
    background-color: #4b70e2;
    color: #f9f9f9;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.4vw;
  }
`;
const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2vw;
`;
const Amount = styled.span`
  font-weight: 700;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <CartEmpty>
          <p>Your cart is currently empty</p>
          <StartShoppping>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2vw"
                height="2vw"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </StartShoppping>
        </CartEmpty>
      ) : (
        <div>
          <Titles>
            <ProductTitle>Product</ProductTitle>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <ProductTotal>Total</ProductTotal>
          </Titles>
          <div>
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <CartItem key={cartItem.id}>
                  <CartProduct>
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </CartProduct>
                  <CartProductPrice>${cartItem.price}</CartProductPrice>
                  <CartProductQuantity>
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <Count>{cartItem.cartQuantity}</Count>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </CartProductQuantity>
                  <CartProductTotalPrice>
                    ${cartItem.price * cartItem.cartQuantity}
                  </CartProductTotalPrice>
                </CartItem>
              ))}
          </div>
          <CartSummary>
            <ClearButton onClick={() => handleClearCart()}>
              Clear Cart
            </ClearButton>
            <CartCheckout>
              <Subtotal>
                <span>Subtotal</span>
                <Amount>${cart.cartTotalAmount}</Amount>
              </Subtotal>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <ContinueShoppping>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </ContinueShoppping>
            </CartCheckout>
          </CartSummary>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
