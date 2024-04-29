import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Stack } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container fluid style={{ height: "100%" }}>
        <Row>
          <Col sm={3} style={{ backgroundColor: "orange", padding: "10px" }}>
            <Stack gap={1}>
              <div className="bg-light border">First item</div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
            </Stack>
          </Col>
          <Col sm={9}></Col>
        </Row>
      </Container>
    </>
  );
}
