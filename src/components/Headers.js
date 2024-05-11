import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; // Import Button from react-bootstrap
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Headers = () => {
  const { carts } = useSelector((state) => state.allCart);
  const { logout, isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <>
      <Navbar style={{ height: "60px", background: "black", color: "white", display:"flex" }}>
        <Container className="d-flex justify-content-between align-items-center">
          <NavLink to="/" className="text-decoration-none text-light">
            <h3 className="text-light mb-0">Smart Canteen</h3>
          </NavLink>

          <div className="d-flex align-items-center">
            <NavLink to="/cart" className="text-decoration-none text-light mx-2">
              <div id="ex4">
                <span className="p1 fa-stack fa-2x has-badge" data-count={carts.length}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
              </div>
            </NavLink>

            {isAuthenticated ? (
              <>
                <p className="mb-0 me-2">{user.name}</p>
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </Button>
              </>
            ) : (
              <Button variant="outline-light" style={{marginLeft: "10px"}} onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
