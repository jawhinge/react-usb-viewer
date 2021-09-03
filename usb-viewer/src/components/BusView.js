import Accordion from "react-bootstrap/Accordion";

function BusView(props) {
  //stole this from SO, don't ask me about it
  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  let buses = [];
  let busesTemp = groupBy(props.devices, "busNumber");
  for (const property in busesTemp) {
    buses.push({ busNumber: property, devices: busesTemp[property] });
  }

  return (
    <>
      {buses.map((bus) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Bus Number {bus.busNumber}</Accordion.Header>
            <Accordion.Body>
              {bus.devices.map((child) => (
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
                        <strong>Port: </strong>
                        {child.portNumbers[0]}
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
      ))}
    </>
  );
}

export default BusView;
