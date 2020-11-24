import React from "react";

// reactstrap components
import { 
  Button, 
  Container, 
  Row, 
  Col , 
  Card,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption, 
} from "reactstrap";

  import { Zoom } from 'react-slideshow-image';

// core components

function SectionLongka() {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const items = [
    {
      src: require("assets/img/LongkaEx1.jpg"),
    },
    {
      src: require("assets/img/LongkaEx2.jpg"),
    },
    {
      src: require("assets/img/LongkaEx3.jpg"),
    },
  ];

  const images = [
    require("assets/img/LongkaEx1.jpg"),
    require("assets/img/LongkaEx2.jpg"),
    require("assets/img/LongkaEx3.jpg")
  ];

  const zoomOutProperties = {
    indicators: false,
    scale: 0.4
  }

  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="4" md="12">
              <h2 className="title">ขีดขิน ลงกา อโยธยา REMIX</h2>
              <p className="description">
              Kishkindha Longka Ayothaya Remix
              </p>
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                href="https://blinkz333.github.io/artofhongtae/#/longka"
                outline
              >
                View Gallary
              </Button>
            </Col>
            <Col lg="8" md="12">
            <Card className="page-carousel">
                {/* <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel> */}
                 <Zoom {...zoomOutProperties}>
                  {images.map((each, index) => (
                  <div key={index} style={{width: "100%"}}>
                      <img style={{ objectFit: "cover", width: "100%" }} src={each} />
                  </div>
                  ))}
                </Zoom>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLongka;
