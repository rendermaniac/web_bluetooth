const button = document.getElementById("getDetails");
const details = document.getElementById("details");

button.addEventListener("click", BLEManager);

async function BLEManager() {

        const device = await navigator.bluetooth.requestDevice({
                filters: [{
    services: ["0x68"]
  }],
                optionalServices: ["battery_service", "device_information"],
        });
}
