import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import android from "./images/android.svg";
import AndroidIcon from "@mui/icons-material/Android";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const App = () => {
  return (
    <div style={{ backgroundColor: "#203354", height: "100vh" }}>
      <Container style={{ height: "100vh" }}>
        <Row className="h-100 d-flex align-items-center">
          <Col className="text-center">
            <h1 style={{ color: "white" }}>Indian Sign Language Detector</h1>
            <a href="http://praveenreddy.tech">
              <p style={{ color: "white" }}>
                Download For Android <AndroidIcon fontSize="medium" />{" "}
                <Button variant="contained">Download</Button>
              </p>
            </a>
            <p>App is Still under Development</p>
          </Col>
          <Col className="text-center">
            <img
              style={{ width: "40vh", height: "85vh" }}
              src={require("./images/islv0.1.0.png")}
              alt={"ISL"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
