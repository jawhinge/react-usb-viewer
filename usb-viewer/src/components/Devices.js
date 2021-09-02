import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";

function Devices() {

    const devices = [{
            locationId: 0,
            vendorId: 0,
            productId: 0,
            deviceName: 'USB Root Hub',
            manufacturer: '(Standard USB Host Controller)',
            serialNumber: '',
            deviceAddress: 2
        },
        {
            locationId: 0,
            vendorId: 5824,
            productId: 1155,
            deviceName: 'Teensy USB Serial (COM3)',
            manufacturer: 'PJRC.COM, LLC.',
            serialNumber: '',
            deviceAddress: 11
        }
    ]


    return (
        <>
            {devices.map((device) => (<h3>{device.deviceName}</h3>))}
        </>
    );
}

export default Devices;