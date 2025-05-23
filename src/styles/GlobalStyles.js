import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
   --black-color: #000000;
   --green-color: #20B15A;
   --orange-color: #F55F1D;
   --white-color: #FFFFFF;
   --grey-color: #8B8B8B;
   --bg-light-green-color: #D7F5DC;
   --bg-partner-color: #F8FFF9;
   --bg-rectangle-green: #48B774;
   --bg-rectangle-orange: #FF8345;
   --bg-achievement-color: #FAFFFB;
   --bg-footer-color: #00CA72;
  }

  *, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
  font-family: "Poppins", serif;
  }
`;

export default GlobalStyle;
