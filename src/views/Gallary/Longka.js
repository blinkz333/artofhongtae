
import React , {useState} from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import longka from "../../components/jsGallry/longka"

// reactstrap components
import {
  Container,
  Button
} from "reactstrap";

import Gallery from 'react-grid-gallery';
import Typist from 'react-typist';

import { isMobile } from "react-device-detect";
import {FaArrowCircleUp} from 'react-icons/fa';


function Longka() {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 1000){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

const scrollTop = () =>{
    window.scrollTo({top: 800, behavior: 'smooth'});
};

window.addEventListener('scroll', checkScrollTop)

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

 
  if(isMobile){

    return (
        <>
          <IndexNavbar />
          <IndexHeader />
          <div className="main">
            <div className="section section-dark text-center">
              <Container>
              <Typist>
                  <h2 className="title">ขีดขิน ลงกา อโยธยา REMIX</h2>
                  <p className="description">
                  Kishkindha Longka Ayothaya Remix
                  </p>
                </Typist>
              </Container>
              <center>
              <div style={{
                        display: "block",
                        minHeight: "1px",
                        width: "auto",
                        overflow: "auto"}}>
                    <Gallery
                images={longka}
                enableImageSelection={false}
                margin={30}
                rowHeight={350}/>
                </div>
              </center>
              <Button
                    className="btn-round ml-1"
                    color="danger"
                    href="https://blinkz333.github.io/artofhongtae/#/"
                    outline
                  >
                    กลับ
              </Button>
            </div>
          </div>
          <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        <DemoFooter />
        </>
      )

  }else{
    
    return (
        <>
          <IndexNavbar />
          <IndexHeader />
          <div className="main">
            <div className="section section-dark text-center">
              <Container>
              <Typist>
                    <h2 className="title">ขีดขิน ลงกา อโยธยา REMIX</h2>
                  <p className="description">
                  Kishkindha Longka Ayothaya Remix
                  </p>
                </Typist>
              </Container>
              <center>
              <div style={{
                        display: "block",
                        minHeight: "1px",
                        width: "auto",
                        overflow: "auto"}}>
                    <Gallery
                images={longka}
                enableImageSelection={false}
                margin={30}
                rowHeight={550}/>
                </div>
              </center>
              <Button
                    className="btn-round ml-1"
                    color="danger"
                    href="https://blinkz333.github.io/artofhongtae/#/"
                    outline
                  >
                    กลับ
              </Button>
            </div>
          </div>
          <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        <DemoFooter />
        </>
      )

  }
}

export default Longka;
