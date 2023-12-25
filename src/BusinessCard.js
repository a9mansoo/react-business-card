import ToggleButton from 'react-bootstrap/ToggleButton';
import About from "./About"
import Interests from "./Interests"
import Info from "./Info"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer'

function BusinessCard({darkMode, onClick}){
    return(
        <Container className="business-card">
            <Row>
                <Col>
            <header>
            <ToggleButton
            className="mb-2"
            type="checkbox"
            variant="outline-light"
            checked={darkMode}
            id="darkmode"
            outline="outline-light"
            onChange={onClick}
            >{darkMode ? "Disable" : "Enable"} Dark Mode</ToggleButton>
            <h1>My Digital Business Card</h1>
        </header>
        <main>
            <Info></Info>
            <About></About>
            <Interests></Interests>
        </main>
        <Footer className='footer'></Footer>
        </Col>
        </Row>
      </Container>
    );
}

export default BusinessCard;






