import axios from "axios";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

import HubView from "./HubView";
import BusView from "./BusView";
import FlatView from "./FlatView";
import TypeView from "./TypeView";



function Devices(props) {

  const [devices, setDevices] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:1337/getDevices")
      .then((res) => {
        setDevices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (!listening) {
      const events = new EventSource("http://localhost:1337/events");

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        setDevices(parsedData);
      };
      setListening(true);
    }
  }, [listening, devices]);

  let view;

  if (props.viewType === 'hub') {
    view = <HubView devices={devices}></HubView>
  }
  if (props.viewType === 'type') {
    view = <TypeView devices={devices}></TypeView>
  }
  if (props.viewType === 'bus') {
    view = <BusView devices={devices}></BusView>
  }
  if (props.viewType === 'flat') {
    view = <FlatView devices={devices}></FlatView>
  }

  return (
    <Container>
      <Row>
        <Col>
          <Alert key="primary" variant="primary">
            Your USB Devices are listed below. You can toggle view types from the navbar.
          </Alert>
          {view}
        </Col>
      </Row>
    </Container>
  );
}

export default Devices;
