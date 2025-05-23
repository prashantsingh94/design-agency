import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 596px;
  padding: 20px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  border: 1px solid var(--black-color);

  input[type="text"] {
    width: 100%;
    padding: 2px 16px;
    color: var(--grey-color);
    font-family: "Sen", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: 0;
    border: none;
  }
`;

const Button = styled.button`
  /* display: flex;
  justify-content: center;
  align-items: center;
  gap: 8.108px; */
  position: absolute;
  right: 5px;
  bottom: 7px;
  height: 52.703px;
  padding: 8px 24px;
  color: var(--white-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 14px;
  background: var(--orange-color);
  cursor: pointer;
  border: none;
`;
const SubscriptionForm = () => {
  return (
    <Wrapper>
      <form>
        <input type="text" placeholder="Enter Your Email Adress" />
        <Button>Subscribe</Button>
      </form>
    </Wrapper>
  );
};

export default SubscriptionForm;
