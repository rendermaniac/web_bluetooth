const button = document.getElementById("getDetails");
const details = document.getElementById("details");

button.addEventListener("click", BLEManager);

async function BLEManager() {

        // Request the Bluetooth device through browser
        let manufacturerData = [{
        companyIdentifier: 0x00e0, /* Google */
        dataPrefix: new Uint8Array([0x01, 0x02]),
        }];
        const device = await navigator.bluetooth.requestDevice({
                filters: [{ manufacturerData }],
                optionalServices: ["battery_service", "device_information"],
        });
}
