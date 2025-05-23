import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import PageNotFound from './pages/404Page';
import GlobalStyle from './styles/GlobalStyles';
function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
