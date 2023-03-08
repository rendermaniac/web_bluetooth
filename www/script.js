const button = document.getElementById("getDetails");
const details = document.getElementById("details");

button.addEventListener("click", async () => {
    try {
    } catch(err) {
      console.error(err);
      alert("An error occured while fetching device details");
    }
  });

// Request the Bluetooth device through browser
const device = await navigator.bluetooth.requestDevice({
    optionalServices: ["battery_service", "device_information"],
    acceptAllDevices: true,
  });