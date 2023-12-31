function ProgressBar({ audioRef, currentTime }) {
  const duration = audioRef?.current?.duration / 60;

  const formatedDuration = duration
    .toString()
    .split(".")
    .join(":")
    .substring(0, 4);

  const formatedTime = (currentTime / 60)
    .toString()
    .substring(0, 4)
    .split(".")
    .join(":");

  // console.log(audioRef?.current?.currentTime / 60);

  return (
    <div className="w-full flex flex-row gap-3 items-center">
      {/* Current Time */}
      <p className="text-zinc-500">{currentTime ? formatedTime : "0:00"}</p>
      {/* Progress */}
      <div className="w-full h-2 bg-zinc-500/25 rounded-full overflow-hidden flex items-center">
        <progress
          max={audioRef?.current?.duration}
          className="w-full"
          value={currentTime}
        ></progress>
      </div>
      {/* Song Duration */}
      <p className="text-zinc-500">{formatedDuration}</p>
    </div>
  );
}

export default ProgressBar;
