import axios from "axios";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

function Devices() {
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
        console.log(event);
        const parsedData = JSON.parse(event.data);
        setDevices(parsedData);
      };
      setListening(true);
    }
  }, [listening, devices]);

  return (
    <Container>
      <Row>
        <Col>
          {devices.map((device) => (
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{device.deviceName}</Accordion.Header>
                <Accordion.Body>
                  <p><strong>Product ID: </strong> {device.deviceDescriptor.idProduct}</p>
                  <p><strong>Vendor ID: </strong>{device.deviceDescriptor.idVendor}</p>
                  <p><strong>Manufacturer: </strong>{device.manufacturer}</p>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Devices;
