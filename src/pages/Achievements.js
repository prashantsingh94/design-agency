import styled from "styled-components";
import ProjectPlanImg from "../assets/images/project-plan.png";
import RatingImg from "../assets/images/rating.png";
import RaiseImg from "../assets/images/raise.png";
import TimelineImg from "../assets/images/timeline.png";
const Wrapper = styled.section`
  display: flex;
  //width: 100%;
  height: 420px;
  justify-content: center;
  align-items: center;
  background: var(--bg-achievement-color);
`;

const Box = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-right: 1px solid rgba(196, 196, 196, 0.5);
`;

const IMG = styled.img`
  width: 70px;
  height: 70px;
`;
const Text = styled.p`
  color: var(--black-color);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--green-color);
  font-family: "Sen", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 60px; /* 150% */
`;
const Achievements = () => {
  return (
    <Wrapper>
      <Box>
        <IMG src={ProjectPlanImg} alt="project plan img" />
        <Text>Completed Projects</Text>
        <Counter>100 +</Counter>
      </Box>
      <Box>
        <IMG src={RatingImg} alt="rating img" />
        <Text>Customer Satisfaction</Text>
        <Counter>20 %</Counter>
      </Box>
      <Box>
        <IMG src={RaiseImg} alt="raise img" />
        <Text>Raised by Clients</Text>
        <Counter>$10M</Counter>
      </Box>
      <Box>
        <IMG src={TimelineImg} alt="timeline img" />
        <Text>Years in Business</Text>
        <Counter>2 Yrs</Counter>
      </Box>
    </Wrapper>
  );
};

export default Achievements;
