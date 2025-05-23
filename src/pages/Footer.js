import styled from "styled-components";
import { NavLink } from "react-router-dom";
import facebookImg from "../assets/images/facebook.png";
import twitterImg from "../assets/images/twitter.png";
import linkedInImg from "../assets/images/linkedin.png";
import instagramImg from "../assets/images/instagram.png";
const StyledFooter = styled.footer`
  background-color: var(--bg-footer-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: "Sen", sans-serif;
`;

const FooterLogo = styled.div`
  color: var(--black-color);
  font-size: 39.2px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 19.6px;
`;
const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 106px;
  margin-top: 57px;
  margin-bottom: 29px;
  /* border: 1px solid red; */

  .footer-text {
    width: 328px;
    color: var(--black-color);
    font-family: "Sen", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
  }

  .social-icons {
    display: flex;
    align-items: flex-start;
    gap: 15.307px;
  }
`;

const InstaGramSocialIcon = styled.div`
  display: flex;
  padding: 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: var(--green-color);
`;

const CopyRightText = styled.div`
  color: var(--color-balck);
  /* font-family: "Sen", sans-serif; */
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 88px;
  margin-left: 10px;
`;

const SecondColumn = styled.div`
  margin-top: 95px;
  /* border: 1px solid pink; */
  margin-left: 329px;

  h4 {
    color: var(--color-black);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 16px;
  }
`;

const ThirdColumn = styled.div`
  margin-top: 93px;
  margin-left: 200px;

  h4 {
    color: var(--color-black);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 26px;
  }

  p {
    width: 300px;
    color: var(--black-color);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const StyledFooterNav = styled.nav`
  ul {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    list-style-type: none;
  }

  li a {
    text-decoration: none;
    color: var(--black-color);
    font-family: "Sen", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const FooterNavigation = () => {
  return (
    <StyledFooterNav>
      <ul>
        <li>
          <NavLink to="#">Services</NavLink>
        </li>
        <li>
          <NavLink to="#">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="#">About Us </NavLink>
        </li>
        <li>
          <NavLink to="#">Contact Us</NavLink>
        </li>
      </ul>
    </StyledFooterNav>
  );
};
const Footer = () => {
  return (
    <StyledFooter>
      <FirstColumn>
        <FooterLogo>WEB LOGO</FooterLogo>
        <div className="footer-text">
          Some footer text about the Agency. Just a little description to help
          people understand you better
        </div>
        <div className="social-icons">
          <img src={facebookImg} alt="facebook social icon" />
          <img src={twitterImg} alt="twitter social icon" />
          <img src={linkedInImg} alt="linkedin social icon" />
          <InstaGramSocialIcon>
            <img src={instagramImg} alt="instagram social icon" />
          </InstaGramSocialIcon>
        </div>
        <CopyRightText>Copyright Design Agency 2024</CopyRightText>
      </FirstColumn>
      <SecondColumn>
        <h4>Quick Links</h4>
        <FooterNavigation />
      </SecondColumn>
      <ThirdColumn>
        <h4>Address</h4>
        <p>
          Design Agency Head Office. Airport Road
          <br /> United Arab Emirate
        </p>
      </ThirdColumn>
    </StyledFooter>
  );
};

export default Footer;
