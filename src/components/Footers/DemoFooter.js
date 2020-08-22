/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer style={{background:"#000"}} className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, For Fans Arts of Hongtae{" "}
              <i className="fa fa-heart heart" /> by blinkzrpn
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
