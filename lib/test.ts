import { WebviewWindow } from "@tauri-apps/api/webviewWindow";

// this is the bestway to open new window
export const handleOpenLibrary = async () => {
  try {
    const libraryWindow = new WebviewWindow("libpage", {
      url: "/libpage",
      title: "Library",
    });

    libraryWindow.once("tauri://created", () => {
      console.log("Library window created");
    });

    libraryWindow.once("tauri://error", (e) => {
      if (e.payload == "a webview with label `libpage` already exists") {
        libraryWindow.setFocus();
      } else {
        console.error("Failed to create library window:", e);
      }
    });
  } catch (error) {
    console.error("Error opening library window:", error);
  }
};
