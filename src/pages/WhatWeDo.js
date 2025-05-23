import styled from "styled-components";
import activityIcon from "../assets/images/Activity.png";
import heartIcon from "../assets/images/Heart.png";
import workIcon from "../assets/images/Work_black.png";
import vectorIcon from "../assets/images/Vector.png";

const StyledSection = styled.section`
  display: flex;
  padding: 67px 105px 143px 105px;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const TopTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;
const H2 = styled.h2`
  color: var(--green-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const Text = styled.p`
  width: 495px;
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BottomTextContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 45px;
`;

const Card = styled.div`
  display: flex;
  width: 380px;
  height: 415px;
  padding: 50px 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 43px;
  border-radius: 30px;
  background: var(--white-color);
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;
const CardTitle = styled.div`
  color: var(--white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const CardContent = styled.div`
  color: var(--black-color);
  font-family: "Sen", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CardIcon = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: var(--bg-light-green-color);
`;
const LearnMore = styled.div`
  display: flex;
  padding: 15px 20px;
  align-items: center;
  gap: 10px;
  color: var(--black-color);
  font-family: "Sen", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const WhatWeDo = () => {
  return (
    <StyledSection>
      <Container>
        <TopTextContent>
          <H2>What we do</H2>
          <Text>We provide the Perfect Solution to your business growth</Text>
        </TopTextContent>
        <BottomTextContent>
          <Card>
            <CardBody>
              <CardIcon>
                <img src={activityIcon} alt="activity icon" />
              </CardIcon>
              <CardTitle>Grow Your Business</CardTitle>
              <CardContent>
                We help identify the best ways to improve your business
              </CardContent>
            </CardBody>
            <LearnMore>
              Learn More{" "}
              <img
                src={vectorIcon}
                width="16px"
                height="14px"
                alt="learn more icon"
              />
            </LearnMore>
          </Card>
          <Card>
            <CardBody>
              <CardIcon>
                <img src={heartIcon} alt="heart icon" />
              </CardIcon>
              <CardTitle>Improve brand loyalty</CardTitle>
              <CardContent>
                We help identify the best ways to improve your business
              </CardContent>
            </CardBody>
            <LearnMore>
              Learn More{" "}
              <img
                src={vectorIcon}
                width="16px"
                height="14px"
                alt="learn more icon"
              />
            </LearnMore>
          </Card>
          <Card>
            <CardBody>
              <CardIcon>
                <img src={workIcon} alt="work icon" />
              </CardIcon>
              <CardTitle>Improve Business Model</CardTitle>
              <CardContent>
                We help identify the best ways to improve your business
              </CardContent>
            </CardBody>
            <LearnMore>
              Learn More{" "}
              <img
                src={vectorIcon}
                width="16px"
                height="14px"
                alt="learn more icon"
              />
            </LearnMore>
          </Card>
        </BottomTextContent>
      </Container>
    </StyledSection>
  );
};

export default WhatWeDo;
