import Accordion from "react-bootstrap/Accordion";

function HubView(props) {
  return (
    <>
      {props.devices.map((device) => {
        if (device.isHub === true)
          return (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {device.deviceName} - At Port {device.portNumbers}, Bus
                  {device.busNumber}
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
                    {device.portNumbers}
                  </p>
                  <p>
                    <strong>Descriptor: </strong>
                    {device.manufacturer}
                  </p>
                  {device.children.map((child) => (
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{child.deviceName}</Accordion.Header>
                        <Accordion.Body>
                          <p>
                            <strong>Product ID: </strong>{" "}
                            {child.deviceDescriptor.idProduct}
                          </p>
                          <p>
                            <strong>Vendor ID: </strong>
                            {child.deviceDescriptor.idVendor}
                          </p>
                          <p>
                            <strong>Bus: </strong>
                            {child.busNumber}
                          </p>
                          <p>
                            <strong>Port: </strong>
                            {child.portNumbers[0]} - {child.portNumbers[1]}
                          </p>
                          <p>
                            <strong>Descriptor: </strong>
                            {child.manufacturer}
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        if (device.isHub === false && device.isChild === false)
          return (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {device.deviceName} - At Port {device.portNumbers}, Bus{" "}
                  {device.busNumber}
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
                    {device.portNumbers}
                  </p>
                  <p>
                    <strong>Descriptor: </strong>
                    {device.manufacturer}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        return true;
      })}
    </>
  );
}

export default HubView;
