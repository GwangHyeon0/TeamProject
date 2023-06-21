import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';
import '../header.css';

import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';



import { AiOutlineCar, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsPersonCircle, BsQrCode } from 'react-icons/bs';



const Header = () => {
    
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container id="navWrap"  fluid>
            <Navbar className='logo'>
            <Link to="/Main" className='logo_main'>
              <img src={process.env.PUBLIC_URL + "/img/logo2.png"} width="100%" alt="logo2" />
            </Link>
            </Navbar>
            <Navbar.Toggle id="toggle" aria-controls={`offcanvasNavbar-expand-${expand}`}>
              </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton id='off_header'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <p id='logo'>주차돼지</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body id="bodyWrap">
              <Nav id='body_nav' className=" flex-grow-1 pe-3">
                <h2 id='login_please' to="">로그인해 주세요 </h2>
                <Link id='real_login'>
                  <button>로그인 또는 회원가입</button>
                </Link>
                  <Link id='link_Home' to="">
                    <span>내 차량 등록</span>  <AiOutlineCar className='car' />
                    </Link>
                  <div className='myPageWrap'>
                    <div className='PageWrap_left'>
                      <Link id="mypage" to="/Sub03">
                        <p>
                          <BsPersonCircle className='person' />
                          <strong>복광현</strong>
                          <em>200P</em>
                        </p>
                      </ Link>

                      <div id="mypage2">
                        <p>
                          <BsQrCode className='qr' />
                        </p>
                      </ div>
                    </div>
                  </div>
            
                  <img src={process.env.PUBLIC_URL + "/img/pigg.png"} width="75%" alt="listImg1" />

                  

              </Nav>

                <Container id="hd_cont" className='cf'>
                    <Row>
                      <Col className='cont_box'>
                        <Link>
                          
                        </Link>
                      </Col>

                      <Col className='cont_box'>
                        
                      </Col>

                      <Col className='cont_box'>

                      </Col>

                      <Col className='cont_box'>

                      </Col>
                    </Row>
                </Container>

                <Container id="hd_cont2">
                    <Row className='cont2_row'>
                      <Col className='cont_box2'>
                        <Link className='intro'>결제내역</Link>
                      </Col>
                    </Row>

                    <Row className='cont2_row'>
                      <Col className='cont_box2'>
                        <Link className='intro'>내 정보</Link>
                      </Col>
                    </Row>

                    <Row className='cont2_row'>
                      <Col className='cont_box2'>
                        <Link className='intro'>제휴 문의</Link>
                      </Col>
                    </Row>

                    <Row className='cont2_row'>
                      <Col className='cont_box2'>
                        <Link className='intro'>새 주차장 알려주기</Link>
                      </Col>
                    </Row>

                    <Row className='cont2_row'>
                      <Col className='cont_box2'>
                        <Link className='intro'>공지사항</Link>
                      </Col>
                    </Row>

                    <Row className='cont2_row'>
                      <Col className='cont_box2'>
                        <Link className='intro'>설정</Link>
                      </Col>
                    </Row>
                </Container>

                <Container id="hd_cont3">
                    <Row className='cont3_row'>
                      <Col className='cont_box3'>
                        <Link className='intro2'>
                          <p>내가 예약한 주차면에 다른 차가..?</p>
                          <p>주차된 차량의 예약 여부를 확인해보세요.</p>
                          <img src={process.env.PUBLIC_URL + "/img/mobile.png"} width="18%" alt="mobile" />
                        </Link>
                      </Col>
                    </Row>
                </Container>

                <Container id="hd_cont4">
                    <Row className='cont5_row'>
                      <Col className='cont_box4'>
                        <Link className='intro3'>
                          <AiOutlineQuestionCircle /> 이용안내 및 문의하기
                        </Link>
                      </Col>
                    </Row>
                </Container>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );

}

export default Header;