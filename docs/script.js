const button = document.getElementById("getDetails");
const details = document.getElementById("details");

button.addEventListener("click", BLEManager);

async function BLEManager() {

        // Request the Bluetooth device through browser
        const device = await navigator.bluetooth.requestDevice({
                filters: [
                {name: "Pixel 6 Pro"}
                ],
                optionalServices: ["battery_service", "device_information"],
        });
}
