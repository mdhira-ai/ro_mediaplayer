"use client";

import {
  FastForward,
  LibraryBig,
  Maximize2,
  Play,
  Rewind,
  Square,
  Volume,
  Volume2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "@/components/ui/slider";
import { handleOpenLibrary } from "@/lib/test";

export default function VideoController() {
  return (
    <div className="bg-slate-600 h-20 flex flex-row  px-2 justify-between items-center">
      <Button variant="ghost" size="icon">
        <Rewind />
      </Button>

      <Button variant="ghost" size="icon">
        <Play />
      </Button>

      <Button variant="ghost" size="icon">
        <Square />
      </Button>

      <Button variant={"ghost"} size={"icon"}>
        <FastForward />
      </Button>

      {/*<div className="bg-amber-100 w-80 h-2 rounded-2xl"></div>*/}
      <Slider
        defaultValue={[75]}
        max={100}
        step={1}
        className="mx-auto  max-w-xl px-2 "
      />
      <div>
        <span>20:14:15</span>
      </div>

      <div className="flex flex-row px-5 justify-center items-center gap-2">
        <Button variant={"ghost"} size={"icon"}>
          <Volume />
        </Button>

        {/*<div className="bg-amber-100 w-20 h-2 rounded-2xl"></div>*/}
        <Slider
          defaultValue={[75]}
          max={100}
          step={1}
          className="mx-auto  max-w-xs w-20"
        />
        <Button variant={"ghost"} size={"icon"}>
          <Volume2 />
        </Button>
      </div>

      <Button variant={"ghost"} size={"icon"} onClick={handleOpenLibrary}>
        <LibraryBig />
      </Button>

      <Button variant={"ghost"} size={"icon"}>
        <Maximize2 />
      </Button>
    </div>
  );
}
