import { contextBridge } from "electron";

if (!process.contextIsolated) {
  throw new Error("contextIsolation is disabled");
}

try {
  contextBridge.exposeInMainWorld("context", {
    // Expose APIs to renderer process
  });
} catch (error) {
  console.error(error);
}
