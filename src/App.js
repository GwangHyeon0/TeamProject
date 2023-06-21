import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './font.css';
import Carousel from 'react-bootstrap/Carousel';
import { Route, Routes } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

import jQuery from 'jquery';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* 컴포넌트 */
import Main from './routes/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Sub01 from './routes/Sub01';
import Sub02 from './routes/Sub02';
import Sub03 from './routes/Sub03';
import Sub04 from './routes/Sub04';

import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  
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


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div className="App">

      {/* 헤더 */}
      <Header />
      <div>
                {
                  //참일때 인트로가 보여지도록
                  intro === true ? (
                    <div className='introWrap'>
                      <h1>인트로페이지</h1>
                    </div>
                  ) : null
                }
              </div>

      {/* 라우트 */}
      <Routes>
        <Route path='/'
          element={
          <>
            
          </>
          }
        />

        <Route path='/Main' element={<Main />}  />
        <Route path='/Sub01' element={<Sub01 />}  />
        <Route path='/Sub02' element={<Sub02 />}  />
        <Route path='/Sub03' element={<Sub03 />}  />
        <Route path='/Sub04' element={<Sub04 />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
