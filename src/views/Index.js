
import React , {useState} from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionRamakien from "views/index-sections/SectionRamakien.js";
import SectionDisney from "views/index-sections/SectionDisney.js"
import SectionThaibook from "views/index-sections/SectionThaibook.js"
import SectionLongka from "views/index-sections/SectionLongka.js"
import SectionAboutme from "views/index-sections/SectionAboutMe.js";

import {FaArrowCircleUp} from 'react-icons/fa';

function Index() {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 1000){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};

window.addEventListener('scroll', checkScrollTop)

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionRamakien />
        <SectionDisney />
        <SectionThaibook/>
        <SectionLongka/>
        <SectionAboutme />
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
