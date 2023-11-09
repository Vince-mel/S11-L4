import { useEffect, useState } from "react";
import singleElement from "../interfaces/fetchDatas";
import { Col, Container, Row } from "react-bootstrap";
import SingleCardArticle from "./SingleCardArticle";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [fetchData, setFetchData] = useState<singleElement[]>([]);
  const myFetch = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((data) => {
        setFetchData(data.results);
      })
      .catch((err) => console.log("errore: ", err));
  };
  useEffect(() => {
    myFetch();
  }, []);

  return (
    <Container>
      <Row>
        {fetchData.map((singleElement) => {
          return (
            <Col
              key={singleElement.id}
              className="d-flex align-items-center col-12"
            >
              <Link className="nav-link" to={`/detail/${singleElement.id}`}>
                <SingleCardArticle element={singleElement} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default LandingPage;
