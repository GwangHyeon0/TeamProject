import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';
import '../main.css';
import Carousel from 'react-bootstrap/Carousel';
import { Route, Routes } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect } from 'react';
import { useState } from 'react';

const Main = () => {
//state를 이용하여 초기 인트로페이지가 보여지도록 true로 설정
let [intro,setIntro] =useState(true);

useEffect(()=>{
  //setTimeout()함수를 이용하여 타이머 설정하기
  let time = setTimeout(() => {
    setIntro(false); //3초후에 인트로 감추기
  }, 3000);
  console.log(2); //타이머가 제거된 후 코드가 실행되는지 콘솔에서 확인
  return() => {
    //기존 타이머 제거
    console.log(1); //콘솔확인
    clearTimeout(time);//위 타이머가 실행되기 전 기존 타이머 제거하고 다시 시작.
  }
});

  //스크립트 파일 읽어오기
  const new_script = src => { 
    return new Promise((resolve, reject) => { 
      const script = document.createElement('script'); 
      script.src = src; 
      script.addEventListener('load', () => { 
        resolve(); 
      }); 
      script.addEventListener('error', e => { 
        reject(e); 
      }); 
      document.head.appendChild(script); 
    }); 
  };

  useEffect(() => { 
    //카카오맵 스크립트 읽어오기
    const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e7f423d6d535e80b4eff617901bafaae');
    
    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => { 
      console.log('script loaded!!!');  
      const kakao = window['kakao']; 
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = { 
          center: new kakao.maps.LatLng(37.26364776184275, 127.02867421022185), //좌표설정
          level: 3 
        }; 
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(37.26364776184275, 127.02867421022185); 
        const marker = new kakao.maps.Marker({ 
          position: markerPosition
        }); 
        marker.setMap(map); 
      });   
    }); 
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    
  return(
    <>
         

           <div id="bannerWrap">
           <Container>
              <Row>
                <Col className='searchBox'>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      id="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <BiSearchAlt2 className='search2' />
                  </Form>
                </Col>
              </Row>
             
      <Row>
     
          <Col className='slideBox slideBox1'>
            <div id="map" className='map' />
            
          </Col>
      </Row>
      <div id="box1Wrap">
        <div className='box1'>이미지</div>
        <div className='box1'>이미지</div>
        <div className='box1'>이미지</div>
        <div className='box1'>이미지</div>
      </div>
      <Row id="section02Wrap">
        
        <Swiper
            spaceBetween={0}
            slidesPerView={2}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide id="box2">
              <Link to="/" className='box2_a1'>
                <p>성대 환승 &#40;구&#41;</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide id="box2">
              <Link to="/" className='box2_a2'>
              <p>세류역환승</p>
           
              </Link>
            </SwiperSlide>
            <SwiperSlide id="box2">
              <Link to="/" className='box2_a3'>
              <p>수원시청 별관</p>
           
              </Link>
            </SwiperSlide>

            <SwiperSlide id="box2">
              <Link to="/" className='box2_a4'>
              <p>수원시청 제2부설</p>
           
              </Link>
            </SwiperSlide>

            <SwiperSlide id="box2">
              <Link to="/" className='box2_a5'>
              <p>영화동 공영지하</p>
           
              </Link>
            </SwiperSlide>

            <SwiperSlide id="box2">
              <Link to="/" className='box2_a6'>
              <p>영통 공영</p>
           
              </Link>
            </SwiperSlide>

            <SwiperSlide id="box2">
              <Link to="/" className='box2_a7'>
              <p>영통구청 부설</p>
           
              </Link>
            </SwiperSlide>

            <SwiperSlide id="box2">
              <Link to="/" className='box2_a8'>
              <p>영통도서관</p>
           
              </Link>
            </SwiperSlide>

            <SwiperSlide id="box2">
              <Link to="/" className='box2_a9'>
              <p>신대호수</p>
           
              </Link>
            </SwiperSlide>

            <SwiperSlide id="box2">
              <Link to="/" className='box2_a10'>
              <p>연무동 공영</p>
           
              </Link>
            </SwiperSlide>
         
    </Swiper>
   
      </Row>
      <Row className='box3Wrap'>
        <Col>
        <Carousel>

      <Carousel.Item className='box3'>
        <Link to="/" className='box2_a1'>
           
           </Link>
      </Carousel.Item>

      <Carousel.Item className='box3'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>

      <Carousel.Item className='box3'>

          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </Carousel.Item>

    </Carousel>
        </Col>
      </Row>
      <Row className='contentWrap'>
        <h3>CONTENTS</h3>
        <Col className='content'>CONTENT1</Col>
        <Col className='content'>CONTENT2</Col>
        <Col className='content'>CONTENT3</Col>
      </Row>
    </Container>
        </div>
          </>  
  )

}




export default Main;