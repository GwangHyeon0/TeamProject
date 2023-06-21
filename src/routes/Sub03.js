import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';
import '../sub03.css';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sub03 = () => {

    return(
        <>
            <Container id="Sub03_container">
                <Row>
                    <Col className='Sub03_bar1'>자기 차량 주차위치</Col>
                </Row>

                <Row>
                    <Col className='Sub03_box1'>주차위치 안내 이미지</Col>
                </Row>

                <Row>
                    <Col className='Sub03_bar1'>입출차 기록</Col>
                </Row>

                <Row>
                    <Col className='Sub03_box1'>주차시간 안내 이미지</Col>
                </Row>

                <Row>
                    <Col className='Sub03_bar1'>사전결제</Col>
                </Row>

                <Row>
                    <Col className='Sub03_box2'></Col>
                    <Col className='Sub03_box2'></Col>
                    <Col className='Sub03_box2'></Col>
                </Row>

                <Row>
                    <Col>현금</Col>
                    <Col>카드</Col>
                    <Col>정액권</Col>
                </Row>
                
            </Container>
        </>
    )

}


export default Sub03;