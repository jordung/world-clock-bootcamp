import React from "react";
import Clock from "./Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WorldClock extends React.Component {
  render() {
    return (
      <Container fluid>
        {this.props.clockData.map((item) => (
          <Row key={item}>
            <Col>{item.split("/")[1].replace("_", " ")}</Col>
            <Col>
              <Clock timeZone={item} />
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default WorldClock;
