import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatWeDo from "./WhatWeDo";
import Achievements from "./Achievements";
import Subscription from "./Subscription";

const MainLayout = styled.main``;

const AppLayout = () => {
  return (
    <MainLayout>
      <Header />
      <WhatWeDo />
      <Achievements />
      <Subscription />
      <Footer />
    </MainLayout>
  );
};

export default AppLayout;
