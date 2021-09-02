const usbDetect = require('usb-detection');
const drivelist = require('drivelist');
var usb = require('usb')

const si = require('systeminformation');


// promises style - new since version 3
si.usb().then(data => {
    console.log(data)
    let usefulData = data.filter(function (el) {
        return el.type === 'Device'||
               el.type === 'Hub'
      });
    console.log(usefulData);

})
  .catch(error => console.error(error));




// let usbList = [];

// usbDetect.startMonitoring();

// usbDetect.on('add', async function(device) { 
//     console.log('add', device); 
//     let newDevice = usb.findByIds(device.vendorId, device.productId);
//     console.log(newDevice);
//     const drives = await drivelist.list();
//     drives.forEach((drive) => {
//       console.log(drive);
//     });});

// usbDetect.on('remove', () => {

// });

