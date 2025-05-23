import styled from "styled-components";
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";
import HeaderLadyImg from "../assets/images/HeaderLady.png";
import Star from "../assets/images/Star.svg";
import Work from "../assets/images/Work.png";
import TickSquare from "../assets/images/TickSquare.svg";
import Partners from "./Partners";

const StyledHeader = styled.header`
  background-color: var(--bg-light-green-color);
`;
const HeaderNavigation = styled.div`
  display: flex;
  height: 80px;
  padding: 5px 100px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

const SubHeader = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const HeaderLeft = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 37px;
  margin: 158px 28px 80px 100px;
`;
const HeaderTextContent = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const HeaderCTAButton = styled.button`
  display: flex;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: var(--green-color);
  color: var(--white-color);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  border: none;
`;
const HeaderRight = styled.div`
  background: url(${HeaderLadyImg}) no-repeat;
  position: relative;
`;
const H2 = styled.h2`
  width: 550px;
  color: var(--back-color);
  font-family: Poppins;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px; /* 130% */
`;

const Paragraph = styled.p`
  width: 472px;
  color: var(--back-color);
  font-family: "Sen", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SmallRectAngle = styled.div`
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
  border-radius: 2px;
  background: var(--bg-rectangle-green);
  background: ${(props) => `var(--${props.color})`};
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

const StyledIcon = styled.div`
  display: inline-flex;
  transform: ${(props) => `rotate(${props.deg}deg)`};
  padding: 14.222px;
  justify-content: center;
  align-items: center;
  gap: 7.111px;
  border-radius: 10.666px;
  background: ${(props) => `var(--${props.color})`};
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;
const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Get Started Button Clicked");
  };
  return (
    <StyledHeader>
      <HeaderNavigation>
        <Logo />
        <MainNavigation />
      </HeaderNavigation>
      <SubHeader>
        <HeaderLeft>
          <HeaderTextContent>
            <H2>Increase Your Customers Loyalty and Satisfaction</H2>
            <Paragraph>
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </Paragraph>
          </HeaderTextContent>
          <HeaderCTAButton onClick={handleClick}>Get Started</HeaderCTAButton>
        </HeaderLeft>
        <HeaderRight>
          <SmallRectAngle top="14" left="38" color="bg-rectangle-green" />
          <SmallRectAngle top="220" left="380" color="bg-rectangle-green" />
          <SmallRectAngle top="400" left="120" color="bg-rectangle-green" />
          <SmallRectAngle top="560" left="600" color="bg-rectangle-orange" />
          <SmallRectAngle top="80" left="380" color="bg-rectangle-orange" />
          <StyledIcon left="78" top="51" color="bg-rectangle-orange" deg="25">
            <img src={Star} alt="star icon" />
          </StyledIcon>
          <StyledIcon left="460" top="127" color="bg-rectangle-green" deg="0">
            <img src={TickSquare} alt="work icon" />
          </StyledIcon>
          <StyledIcon left="12" top="522" color="bg-rectangle-green" deg="0">
            <img src={Work} alt="tick icon" />
          </StyledIcon>
        </HeaderRight>
      </SubHeader>
      <Partners />
    </StyledHeader>
  );
};

export default Header;
