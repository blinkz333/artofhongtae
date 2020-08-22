
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import ramakien from "../../components/jsGallry/ramakien"

// reactstrap components
import {
  Container,
  Button
} from "reactstrap";

import Gallery from 'react-grid-gallery';
import Typist from 'react-typist';

import { isMobile } from "react-device-detect";

function Ramakien() {
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
                <h2 className="title">รามเกียรติ์ - Redraw</h2>
                <p className="description">
                Ramakien - Redraw
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
              images={ramakien}
              enableImageSelection={false}
              margin={30}
              rowHeight={450}/>
              </div>
            </center>
            <Button
                  className="btn-round ml-1"
                  color="danger"
                  href="https://blinkz333.github.io/art_of_hongtae/#/"
                  outline
                >
                  กลับ
            </Button>
          </div>
        </div>
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
                <h2 className="title">รามเกียรติ์ - Redraw</h2>
                <p className="description">
                Ramakien - Redraw
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
              images={ramakien}
              enableImageSelection={false}
              margin={30}
              rowHeight={550}/>
              </div>
            </center>
            <Button
                  className="btn-round ml-1"
                  color="danger"
                  href="https://blinkz333.github.io/art_of_hongtae/#/"
                  outline
                >
                  กลับ
            </Button>
          </div>
        </div>
       <DemoFooter />
      </>
    )

  }
}

export default Ramakien;
