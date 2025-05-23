import styled from "styled-components";
import SubscriptionForm from "./SubscriptionForm";

const Wrapper = styled.section`
  display: flex;
  padding: 91px 422px 137px 422px;
  justify-content: center;
  align-items: center;
`;

const SubscriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: relative;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const TopTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

const H3 = styled.h3`
  color: var(--green-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const H4 = styled.h4`
  width: 495px;
  color: var(--black-color);
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

const Text = styled.p`
  color: var(--grey-color);
  text-align: center;
  font-family: "Sen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const Subscription = () => {
  return (
    <Wrapper>
      <SubscriptionBox>
        <TextContainer>
          <TopTextBox>
            <H3>SUBSCRIBE</H3>
            <H4>Subscribe to get the latest news about us</H4>
            <Text>
              Please drop your email below to get daily update about what we do
            </Text>
          </TopTextBox>
        </TextContainer>
        <SubscriptionForm />
      </SubscriptionBox>
    </Wrapper>
  );
};

export default Subscription;
