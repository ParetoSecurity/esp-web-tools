import { SerialLaunchButton } from "./serial-launch-button";
import "./serial-provision-dialog";

export const startProvisioning = async (button: SerialLaunchButton) => {
  let port: SerialPort | undefined;
  try {
    port = await navigator.serial.requestPort();
  } catch (err: any) {
    if ((err as DOMException).name === "NotFoundError") {
      return;
    }
    alert(`Error: ${err.message}`);
    return;
  }

  if (!port) {
    return;
  }

  await port.open({ baudRate: 115200 });

  const el = document.createElement("improv-wifi-serial-provision-dialog");
  el.port = port;
  el.addEventListener(
    "closed",
    () => {
      port!.close();
    },
    { once: true }
  );
  document.body.appendChild(el);
};
