
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import disney from "../../components/jsGallry/disney"

// reactstrap components
import {
  Container,
  Button
} from "reactstrap";

import Gallery from 'react-grid-gallery';
import Typist from 'react-typist';

import { isMobile } from "react-device-detect";

function Disney() {
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
                  <h2 className="title">ตัวร้ายดิสนีย์ตัวโปรดทั้ง 11 ตัว</h2>
                  <p className="description">
                  11 favorite Disney villains
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
                images={disney}
                enableImageSelection={false}
                margin={30}
                rowHeight={350}/>
                </div>
              </center>
              <Button
                    className="btn-round ml-1"
                    color="danger"
                    href="/index"
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
                  <h2 className="title">ตัวร้ายดิสนีย์ตัวโปรดทั้ง 11 ตัว</h2>
                  <p className="description">
                  11 favorite Disney villains
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
                images={disney}
                enableImageSelection={false}
                margin={30}
                rowHeight={550}/>
                </div>
              </center>
              <Button
                    className="btn-round ml-1"
                    color="danger"
                    href="/index"
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

export default Disney;
