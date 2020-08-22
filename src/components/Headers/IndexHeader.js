
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
                <div className="fog-low">
                  <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
                <div className="fog-low right">
                  <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
              </div>
              {/* <h2 className="presentation-subtitle text-center">
                Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
              </h2> */}
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

  }
  // if(isMobile){
  //   return
  //   (
  //     <>
  //     <div
  //         className="page-header section-dark"
  //         style={{
  //           backgroundImage:
  //             "url(" + require("assets/img/header/mobileWall.jpg") + ")",
  //         }}
  //       >
  //         <div className="filter" />
  //         <div className="content-center">
  //           <Container>
  //             <div className="title-brand">
  //               <h1 className="presentation-title">Art of Hongtae</h1>
  //               <div className="fog-low">
  //                 <img alt="..." src={require("assets/img/fog-low.png")} />
  //               </div>
  //               <div className="fog-low right">
  //                 <img alt="..." src={require("assets/img/fog-low.png")} />
  //               </div>
  //             </div>
  //             {/* <h2 className="presentation-subtitle text-center">
  //               Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
  //             </h2> */}
  //           </Container>
  //         </div>
  //         <div
  //           className="moving-clouds"
  //           style={{
  //             backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
  //           }}
  //         />
          
  //       </div>
  //   </>
  //   )
    
  // }else{
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
          <div className="content-center">
            <Container>
              <div className="title-brand">
                {/* <h1 className="presentation-title">Paper Kit React</h1> */}
                <div className="fog-low">
                  <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
                <div className="fog-low right">
                  <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
              </div>
              {/* <h2 className="presentation-subtitle text-center">
                Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
              </h2> */}
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
    );
  }

  
// }

export default IndexHeader;
