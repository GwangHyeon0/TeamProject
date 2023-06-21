import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';
import '../sub02.css';
import { Link } from "react-router-dom";

// 배너
import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sub02 = () =>{

    return (
        <>
            <Container id='Sub02_container'>
                <Row>
                    <Col className='Sub02_box1'>관광지 이미지</Col>
                </Row>

                <Row>
                    <Col className='Sub02_bar1'>Title</Col>
                </Row>

                <Row>
                    <Col className='Sub02_box2'>이미지</Col>
                    <Col className='Sub02_box2'>이미지</Col>
                    <Col className='Sub02_box2'>이미지</Col>
                    <Col className='Sub02_box2'>이미지</Col>
                </Row>

                <Row>
                    <Col className='Sub02_box3'>소개1</Col>
                    <Col className='Sub02_box3'>소개2</Col>
                    <Col className='Sub02_box3'>소개3</Col>
                    <Col className='Sub02_box3'>소개4</Col>
                </Row>

                <Row>
                    <Col className='Sub02_bar1'>수원시 행사</Col>
                </Row>

                <Row>
                    <Carousel className='carousel2'>
                    <Carousel.Item interval={1000}>
                    <h3>First slide label</h3>
                        <p>Nulla vitae elit libero,<br /> a pharetra augue mollis interdum.</p>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <h3>Third slide label</h3>
                        <p>
                        Praesent commodo cursus magna, <br /> vel scelerisque nisl consectetur.
                        </p>
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                    
                    </Carousel.Item>

                    
                </Carousel>
                </Row>
            </Container>
        </>
    )

}


export default Sub02;