
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

import Typist from 'react-typist';

function SectionAboutMe() {
  return (
    <>
      <div className="main">
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">About Me</h2>
            <Row>
              <Col md="12">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="author">
                        <CardTitle tag="h4">Konthorn Taecholarn (Hongtae)</CardTitle>
                      </div>
                    <Typist>
                      <p className="card-description text-center">
                        เริ่มวาดรูปเล่นตามผนังบ้านตั้งเเต่ 2 ขวบ <br/>
                        พอ 4 ขวบ เเม่กะพ่อพาไปเรียนกับครูสังคม ทองมี <br/>
                        พอ 5 ขวบ ได้รางวัลวาดรูปที่โน่นที่นี่บ้างประปราย <br/>
                        พอ 8 ขวบ ไปสอนวาดรุปออกทีวีกับครูสังคม <br/>
                        พอ 11 ขวบ รายการเลิกจ้าง <br/>
                        พอ 18 ขวบ เริ่มสอนความถนัด'ถาปัด ให้น้องๆ <br/>
                        พอ 21 ขวบ สอนวาดรุปจริงจังให้ น้องๆ เพื่อนๆ พี่ๆ ที่สนใจ <br/>
                        พอ 22 ขวบ มาช่วยอาจารย์สอนน้องปีหนึ่งวาดสีน้ำ ทั้งในเเละนอกสถานที่ <br/>
                        พอ 23 ขวบ ลองทำหัวโขน วาดสีน้ำ sketch อย่างบ้าคลั่ง <br/>
                        พอ 24 ขวบ ออกเเบบเเละวางภาพรวมงานเเต่งงาน เขียนหนังสือ เเละวาดภาพประกอบ <br/>
                        พอ 25 ขวบ เป็นวิทยากร พิธีกร เเละครูสอนวาดรูปทั่วไป อย่างต่อเนื่อง <br/>
                        พอ....ก่อนละกัน^^
                      </p>
                    </Typist>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionAboutMe;
