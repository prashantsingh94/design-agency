import styled from "styled-components";
import googleImg from "../assets/images/logos_google.png";
import trelloImg from "../assets/images/Trello-logo-blue 1.png";
import mondayImg from "../assets/images/logos_monday.png";
import notionImg from "../assets/images/Notion.png";
import slackImg from "../assets/images/Slack.png";
const PartnerSection = styled.section`
  display: flex;
  height: 120px;
  padding: 0px 143.07px 0px 115px;
  justify-content: space-evenly;
  align-items: center;
  flex-shrink: 0;
  background: var(--bg-partner-color);
  margin-bottom: 34px;
`;

const Partners = () => {
  return (
    <PartnerSection>
      <img src={googleImg} alt="Google partner img" />
      <img src={trelloImg} alt="Google partner img" />
      <img src={mondayImg} alt="Google partner img" />
      <img src={notionImg} alt="Google partner img" />
      <img src={slackImg} alt="Google partner img" />
    </PartnerSection>
  );
};

export default Partners;
