import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';
import '../sub01.css';
import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect } from 'react';

const Sub01 = () =>{
   
    return (

        <div id="slideWrap">
         <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide id='slideBanner'>Slide 1</SwiperSlide>
            <SwiperSlide id='slideBanner'>Slide 2</SwiperSlide>
            <SwiperSlide id='slideBanner'>Slide 3</SwiperSlide>
            <SwiperSlide id='slideBanner'>Slide 4</SwiperSlide>
        </Swiper>
            <Container>
                <Row>
                    <Col className='bar1'>주차장 종류 - 형태</Col>
                </Row>

                <Row>
                    <Col className='bar1_box'>주차장 1_1</Col>
                    <Col className='bar1_box'>주차장 1_2</Col>
                </Row>
                
                <Row>
                    <Col className='bar1_box'>주차장 1_3</Col>
                    <Col className='bar1_box'>주차장 1_4</Col>
                </Row>

                <Row>
                    <Col className='bar1'>이용가능 차량</Col>
                </Row>

                <Row>
                    <Col className='bar1_box'>주차장 2_1</Col>
                    <Col className='bar1_box'>주차장 2_2</Col>
                </Row>
                
                <Row>
                    <Col className='bar1_box'>주차장 2_3</Col>
                    <Col className='bar1_box'>주차장 2_4</Col>
                </Row>

                <Row>
                    <Col className='bar2'>사전 정산부 위치</Col>
                    <Col className='bar2'>잔여주차 가능 대수</Col>
                </Row>

                <Row>
                    <Col className='bar2_box'>사전 정산부 위치 박스</Col>
                    <Col className='bar2_box'>잔여주차 가능 대수 박스</Col>
                </Row>

                <Row id="textBox">
                    <Col className='bar1'>이용 요금 감면 할인대상</Col>
                    <div id="textWrap">
                        <p>부랴부랴부랴~~~~</p>
                        <p>부랴부랴부랴~~~~</p>
                        <p>부랴부랴부랴~~~~</p>
                    </div>
                </Row>
                
            </Container>
        </div>
    );

};


export default Sub01;
