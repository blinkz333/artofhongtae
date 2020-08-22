
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { isMobile } from "react-device-detect";

// core components

function IndexHeader() {
  
  if(isMobile){
    return (
      <>
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header/mobileWall.jpg") + ")",
          }}
        >
          <div className="filter" />
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Art <br/> of Hongtae</h1>
              </div>
            </Container>
          </div>
          <div
            className="moving-clouds"
            style={{
              backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
            }}
          />
        </div>
      </>
    )
  }else{
    return (
      <>
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header/header4.jpg") + ")",
          }}
        >
          <div className="filter" />
          <div
            className="moving-clouds"
            style={{
              backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
            }}
          />
          
        </div>
      </>
    )
  }
}


export default IndexHeader;
