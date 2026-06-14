import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { openPath, openUrl, revealItemInDir } from "@tauri-apps/plugin-opener";
import { open } from "@tauri-apps/plugin-dialog";
import { convertFileSrc } from "@tauri-apps/api/core";
import { atom } from "jotai";
// this is the bestway to open new window

export const videourl = atom("");

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

export async function opendialog(setvideopath: (path: string) => void) {
  setvideopath("");

  const file = await open({
    multiple: false,
    directory: false,
    filters: [
      {
        name: "select video",
        extensions: ["mp4", "mp3"],
      },
    ],
  });

  if (file) {
    // Use Tauri's convertFileSrc to safely convert file path to accessible URL
    const fileUrl = convertFileSrc(file);
    setvideopath(fileUrl);
    console.log(fileUrl);
  }
}
