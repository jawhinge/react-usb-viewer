const usbDetect = require("usb-detection");
var usb = require("usb");
const express = require("express");
const app = express();
const port = 1337;
const cors = require("cors");

app.use(cors());
app.use(express.json());

let clients = [];
let facts = [];

function eventsHandler(request, response, next) {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };

  response.writeHead(200, headers);

  const data = `data: ${JSON.stringify(facts)}\n\n`;

  response.write(data);

  const clientId = Date.now();

  const newClient = {
    id: clientId,
    response,
  };

  clients.push(newClient);

  request.on("close", () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter((client) => client.id !== clientId);
  });
}

app.get("/events", eventsHandler);

app.get("/getDevices", (req, res) => {
    res.json(currentlyConnected);
});


function sendEventsToAll(devices) {
  clients.forEach((client) =>
    client.response.write(`data: ${JSON.stringify(devices)}\n\n`)
  );
}

async function updateDevices(devices) {
  return sendEventsToAll(devices);
}

function holUp(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

let currentlyConnected = [];

usbDetect.startMonitoring();

usbDetect.on("change", () => {
  updateDevices();
});

async function updateDevices(callback) {
  await holUp(1);
  currentlyConnected = [];
  let currentlyConnectedTemp = usb.getDeviceList();
  for (const device of currentlyConnectedTemp) {
    let devicePid = device.deviceDescriptor.idProduct;
    let deviceVid = device.deviceDescriptor.idVendor;
    let usbDetectInfo = await usbDetect.find(deviceVid, devicePid);
    if (usbDetectInfo.length > 0) {
      device.deviceName = usbDetectInfo[0].deviceName;
      device.manufacturer = usbDetectInfo[0].manufacturer;
      device.serialNumber = usbDetectInfo[0].serialNumber;
      currentlyConnected.push(device);
    }
  }
  return sendEventsToAll(currentlyConnected);
}

updateDevices(function (devices) {
  console.log("Initial update...");
});

app.listen(port, () => {
  console.log(`USB Viewer Server listening at http://localhost:${port}`);
});
