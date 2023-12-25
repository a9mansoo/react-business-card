import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){

    return(
        <Container className='about'>
            <Row>
                <h2>About</h2>
            <Col>
                Hi!
                I am passionate about DevOps, web development, Linux and automation tools/frameworks.
                I enjoy learning about new tools and frameworks and applying what I learn to new projects/ideas.
                I also have a pet rabbit that is passionate about eating, digging and being pet!
             </Col>
            </Row>
        </Container>
    );
}

export default About;