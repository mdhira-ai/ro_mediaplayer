import VideoController from "./VideoController";

export default function PlayerView() {
  return (
    <div className="flex flex-col max-h-dvh">
      {/*vidoe viewport*/}
      <div className="bg-slate-900 h-dvh flex justify-center items-center">
        <span>No video</span>
      </div>

      {/*video controller*/}
      <VideoController />
    </div>
  );
}
