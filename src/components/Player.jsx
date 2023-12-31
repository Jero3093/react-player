import { useState, useRef, useEffect } from "react";
import { Songs } from "../data/Songs";
import {
  IoPlayForwardSharp,
  IoPlayBackSharp,
  IoPauseOutline,
  IoPlay,
} from "react-icons/io5";
import ProgressBar from "./ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { SongSlice } from "../redux/SongSlice";

function Player() {
  const [AutoPlay, setAutoPlay] = useState(false);

  const CurrentSong = useSelector((state) => state.SongSlice.CurrentSong);

  const [CurrentTime, setCurrentTime] = useState();

  const audioRef = useRef(null);

  const dispatch = useDispatch();

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setAutoPlay(true);
    } else {
      audioRef.current.pause();
      setAutoPlay(false);
    }
  };

  useEffect(() => {
    if (audioRef.current?.ended) {
      if (Songs.length < CurrentSong + 1) {
        dispatch(SongSlice.actions.resetSongs());
        setAutoPlay(false);
      } else {
        dispatch(SongSlice.actions.setNextSong());
      }
    }
  }, [audioRef.current?.ended]);

  if (AutoPlay) {
    setInterval(() => {
      setCurrentTime(audioRef?.current?.currentTime);
    }, 1000);
  }

  if (Songs.length < CurrentSong + 1) {
    console.log("limit");
    dispatch(SongSlice.actions.resetSongs());
    setAutoPlay(false);
  }

  return (
    <aside className="flex flex-col gap-5 bg-zinc-800 shadow-md p-3 rounded-lg w-96 h-auto col-span-1">
      <audio
        src={Songs[CurrentSong].song}
        autoPlay={AutoPlay}
        ref={audioRef}
      ></audio>
      <div className="flex flex-row gap-2">
        <picture>
          <img
            src={Songs[CurrentSong].cover}
            alt={`Cover of ${Songs[CurrentSong].song}`}
            className="w-24 h-24 rounded-md"
          />
        </picture>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-2xl font-medium truncate max-w-[250px]">
            {Songs[CurrentSong].name}
          </h2>
          <h3 className="text-xl text-zinc-400 truncate max-w-[250px]">
            {Songs[CurrentSong].band}
          </h3>
        </div>
      </div>
      <ProgressBar audioRef={audioRef} currentTime={CurrentTime} />
      <div className="flex flex-row gap-7 self-center">
        <button onClick={() => dispatch(SongSlice.actions.setPreviousSong())}>
          <IoPlayBackSharp className="w-8 h-8" />
        </button>
        <button onClick={togglePlay}>
          {AutoPlay ? (
            <IoPauseOutline className="w-9 h-9" />
          ) : (
            <IoPlay className="w-9 h-9" />
          )}
        </button>
        <button onClick={() => dispatch(SongSlice.actions.setNextSong())}>
          <IoPlayForwardSharp className="w-8 h-8" />
        </button>
      </div>
    </aside>
  );
}

export default Player;
