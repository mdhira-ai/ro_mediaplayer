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
import { handleOpenLibrary, opendialog, videourl } from "@/lib/test";
import {  useSetAtom } from "jotai";
import React from "react";


interface props {
  vidref: React.RefObject<HTMLVideoElement>
}

export default function VideoController({vidref}: props) {

  const setvideopath = useSetAtom(videourl)

  const handeplay = () => vidref.current?.play()




  return (
    <div className="bg-slate-600 h-20 absolute bottom-0 right-0 left-0 flex flex-row  px-2 justify-between items-center">
      <Button variant="ghost" size="icon">
        <Rewind />
      </Button>

      <Button onClick={handeplay} variant="ghost" size="icon">
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

      <Button variant={"ghost"} size={"icon"} onClick={() => opendialog(setvideopath)}>
        <LibraryBig />
      </Button>

      <Button variant={"ghost"} size={"icon"}>
        <Maximize2 />
      </Button>
    </div>
  );
}
