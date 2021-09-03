import Accordion from "react-bootstrap/Accordion";

function TypeView(props) {
  //stole this from SO, don't ask me about it
  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  let types = [];
  let typesTemp = groupBy(props.devices, "manufacturer");
  for (const property in typesTemp) {
    types.push({ type: property, devices: typesTemp[property] });
  }

  return (
    <>
      {types.map((type) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Device Type - {type.type}</Accordion.Header>
            <Accordion.Body>
              {type.devices.map((child) => (
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

export default TypeView;
