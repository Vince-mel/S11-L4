import { Card, Col, Row } from "react-bootstrap";
import singleElement from "../interfaces/fetchDatas";

const SingleCardArticle = ({ element }: { element: singleElement }) => {
  return (
    <Card className="d-flex flex-row my-2 shadow-lg">
      <Row>
        <Col className="col-2 d-flex align-items-center justify-content-center">
          <Card.Img src={element.image_url} className="shadow-lg px-2" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>{element.summary}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default SingleCardArticle;
