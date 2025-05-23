import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ArrowIcon from "../assets/images/arrowright.png";
const StyledMainNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    list-style: none;
  }
  ul li a {
    text-decoration: none;
    color: var(--black-color);
    font-size: 16px;
  }

  .login-link {
    display: flex;
    width: 93px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid var(--green-color);
  }
  .register {
    display: flex;
    width: 105px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: var(--green-color);
    color: var(--white-color);
  }
  .service-link {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
const MainNavigation = () => {
  return (
    <StyledMainNav>
      <ul>
        <li>
          <NavLink to="/services" className="service-link">
            Services <img src={ArrowIcon} alt="arrow icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="login-link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="register">
            Register
          </NavLink>
        </li>
      </ul>
    </StyledMainNav>
  );
};

export default MainNavigation;
