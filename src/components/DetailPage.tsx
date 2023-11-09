import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import singleElement from "../interfaces/fetchDatas";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

type id = {
  id: string;
};

const DetailPage = () => {
  const [myData, setData] = useState<singleElement | null>(null);
  const params = useParams<id>();

  const detailedFetch = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error while getting fetches datas");
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log("Error: ", err));
  };
  useEffect(() => {
    detailedFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {myData && (
        <Container>
          <Card className="shadow-lg mt-2 bg-light">
            <Row className="d-flex flex-column align-items-center justify-content-center">
              <Col className="col-8 mt-2">
                <Card.Img src={myData.image_url} className="shadow-lg" />
              </Col>

              <Col className="px-5 ">
                <Card.Body>
                  <Card.Title className=" d-flex flex-column px-3 fw-bold pt-1 pb-5">
                    <div className="fs-1 text-center">{myData.title}</div>
                    <div className="w-100 text-end fw-normal fst-italic text-secondary d-flex justify-content-end fs-6">
                      <div className="smaller">
                        Created: {myData.published_at.slice(11, 16)} in data:
                        {myData.published_at.slice(0, 10)}
                      </div>
                      <div className="smaller mx-1"></div>
                    </div>
                  </Card.Title>
                  <Card.Text className="pt-3 d-flex flex-column justify-content-center align-items-center">
                    {myData.summary}
                    <Link to={myData.url}>
                      <Button
                        variant="transparent"
                        className="shadow-lg border-1 border-warning my-2 shadow-lg rounded"
                      >
                        Check the original article from:
                        <span className="fst-italic fw-bold">
                          {myData.news_site}
                        </span>
                      </Button>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      )}
    </div>
  );
};
export default DetailPage;
