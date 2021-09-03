import Accordion from "react-bootstrap/Accordion";

function FlatView(props) {
  return (
    <>
      {props.devices.map((device) => {
          return (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {device.deviceName} - At Port {device.portNumbers[0]}, Bus {device.busNumber}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <strong>Product ID: </strong>{" "}
                    {device.deviceDescriptor.idProduct}
                  </p>
                  <p>
                    <strong>Vendor ID: </strong>
                    {device.deviceDescriptor.idVendor}
                  </p>
                  <p>
                    <strong>Bus: </strong>
                    {device.busNumber}
                  </p>
                  <p>
                    <strong>Port: </strong>
                    {device.portNumbers[0]}
                  </p>
                  <p>
                    <strong>Descriptor: </strong>
                    {device.manufacturer}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
      })}
    </>
  );
}

export default FlatView;
