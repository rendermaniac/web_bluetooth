const button = document.getElementById("getDetails");
const details = document.getElementById("details");

button.addEventListener("click", BLEManager);

async function BLEManager() {

        const device = await navigator.bluetooth.requestDevice({
                acceptAllDevices:true,
                optionalServices: ["device_information"],
        });
}
