'use client'

import { useAtom } from "jotai";
import VideoController from "./VideoController";
import { videourl } from "@/lib/test";
import { useRef, RefObject } from "react";

export default function PlayerView() {
  const [videopath, setvideopath] = useAtom(videourl)

  const videoref = useRef<HTMLVideoElement>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/*vidoe viewport*/}
      <div className="bg-slate-900 h-lvh w-full flex justify-center items-center">
        {videopath == ""? (
          <div className="text-white text-center">Select a video to play</div>
        ) : (   
          <video ref={videoref} className="w-full h-full" data-state="hidden">
            <source src={videopath} type="video/mp4" />
            Video format not supported
          </video>
        )}
      </div>

      {/*video controller*/}
      <VideoController vidref={videoref as RefObject<HTMLVideoElement>} />
    </div>
  );
}
