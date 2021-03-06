import React from 'react';
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, Button } from 'mdbreact';
import '../../styles/carousel.css';

const CarouselRiders = ({ option = 0 }) => {
  if (option === 2) {
      return (
        <Container>
        <Carousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem>
          <CarouselInner>
            <Row>
              <CarouselItem itemId="1">
                <Col md="4">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
              </CarouselItem>
              <CarouselItem itemId="2">
                <Col md="4">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
  return null;
}

export default CarouselRiders;
