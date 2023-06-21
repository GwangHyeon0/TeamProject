
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';
import '../footer.css';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { BsQrCode } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';





const Footer = () => {

    return(
        <>
            <Container id='footerWrap'>
                <Row>
                    <Col className='footer'>
                        <Link className='fot_logo'>
                            <AiFillHome />
                        </Link>
                    </Col>
                    <Col className='footer'>
                        <Link className='fot_logo'>
                            <BsQrCode />
                        </Link>
                    </Col>
                    <Col className='footer'>
                    <Link className='fot_logo'>
                        <FaMapMarkerAlt />
                    </Link>
                    </Col>
                    <Col className='footer'>
                        <Link className='fot_logo'>
                            <AiFillStar />
                        </Link>
                    </Col>
                    <Col className='footer'>
                        <Link className='fot_logo'>
                            <IoMdPerson />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
};


export default Footer;
