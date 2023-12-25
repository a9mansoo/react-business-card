import logo from './hahaha.jpg';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from "./About"
import Interests from "./Interests"
import Info from "./Info"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer'
import DarkModeToggle from './DarkModeToggle';
import { useMediaQuery } from "react-responsive";


function App() {
  const [darkMode, setDarkMode] = useState(true)

  const setPreference = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isDarkMode) => setDarkMode(!isDarkMode)
  );

  const onChange = () => {
    setDarkMode(!darkMode);
  }

  return (
    <main className="app">
    <Container className="business-card">
            <Row>
                <Col>
            <header>
              <DarkModeToggle onChange={onChange} darkMode={darkMode}/>
            <h1>Business Card</h1>
        </header>
        <main>
            <Info logo={logo}></Info>
            <About></About>
            <Interests></Interests>
        </main>
        <Footer className='footer-dark'></Footer>
        </Col>
        </Row>
      </Container>
      </main>
  );
}

export default App;
