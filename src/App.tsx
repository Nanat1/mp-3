import Home from "./components/Index.tsx";
import Education from "./components/Education.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Portfolio from "./components/Portfolio.tsx";
import Contact from "./components/Contact.tsx";

import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";

import styled from "styled-components";
import {Route, Routes, RouterProvider, createBrowserRouter} from "react-router";

const AllWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #f3f3f3;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    h1, h2, h3, h4, h5, p{
        margin: 10px;
    }
`;

const PageWrapper = styled.div`
    max-width: 75%;
    margin: 0 auto;
    font-family: "Times New Roman", Times, serif;
    @media screen and (max-width: 1000px){
        font-size: calc(8px + 1vw);
        
    }
    @media screen and (max-width: 750px){
        max-width: 90%;
        margin: 0 auto;
        
    }
`;

const Container = styled.div`
    display: flex;
    @media screen and (max-width: 750px){
        display: block;
    }
`;

function Root() {
  return (
      <AllWrapper>
          <PageWrapper>
              <Header />
              <Container>
                  <Nav />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/edu" element={<Education />} />
                      <Route path="/exp" element={<Experience />} />
                      <Route path="/proj" element={<Projects />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/ref" element={<Contact />} />
                  </Routes>
              </Container>
              <Footer />
          </PageWrapper>
      </AllWrapper>
  )
}

const router = createBrowserRouter([{path: "*", Component: Root}]);

export default function App() {
    return <RouterProvider router={router} />;
}
