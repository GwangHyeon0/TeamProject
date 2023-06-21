import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';
import '../sub04.css';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sub04 = () =>{

    return(
        <>
            <Container id="Sub04_container">
                <Row>
                    <Col className='Sub04_box1'>
                        <span>Login</span>
                        <span>Join us</span>
                        <p>로그인해 주세요.</p>
                    </Col>
                </Row>

                <Row>
                    <Col className='Sub04_bar1'>공지사항</Col>
                </Row>

                <Row>
                    <Col className='Sub04_box2'>공지사항 박스</Col>
                    <div id="textWrap">
                    <p>공지사항~~~~</p>
                    <p>공지사항~~~~</p>
                    <p>공지사항~~~~</p>
                    </div>
                </Row>

                <Row>
                    <Col className='Sub04_bar1'>고객의 소리</Col>
                </Row>

                <Row>
                    <Col className='Sub04_box2'>고객의 소리 박스</Col>
                </Row>

                <Row>
                    <Col className='Sub04_bar1'>1:1문의하기 (자주묻는질문)</Col>
                </Row>

                <Row>
                    <Col className='Sub04_box3'>자주묻는질문</Col>
                    <Col className='Sub04_box3'>자주묻는질문</Col>
                    <Col className='Sub04_box3'>자주묻는질문</Col>
                </Row>
            </Container>
        </>
    )

}


export default Sub04;