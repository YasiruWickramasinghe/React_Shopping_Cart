import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

import styled from "styled-components";

const Navbar = styled.nav`
  height: 10vh;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;

  a {
    text-decoration: none;
    color: white;
  }

  h2 {
    font-size: 4vw;
  }
`;

const Navbag = styled.div`
  display: flex;
  align-items: center;
`;

const BagQuantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5vw;
  width: 2.5vw;
  border-radius: 50%;
  background: yellow;
  font-size: 1.4vw;
  font-weight: 700;
  color: black;
  margin-left: 0.1vw;
`;

const NavBar = () => {
  // const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <Navbar>
      <Link to="/">
        <h2>OnlineShop</h2>
      </Link>
      <Link to="/cart">
        <Navbag>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <BagQuantity>
            <span>3</span>
            {/* <span>{cartTotalQuantity}</span> */}
          </BagQuantity>
        </Navbag>
      </Link>
    </Navbar>
  );
};

export default NavBar;
