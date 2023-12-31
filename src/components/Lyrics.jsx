import { Songs } from "../data/Songs";
import { useSelector } from "react-redux";

function Lyrics() {
  const CurrentSong = useSelector((state) => state.SongSlice.CurrentSong);

  const CurrentLyrics = Songs[CurrentSong]?.lyrics;

  return (
    <aside className="flex flex-col gap-5 bg-zinc-800 shadow-lg p-4 rounded-lg h-[477px] overflow-y-scroll w-96 pb-6">
      <header className="flex items-center">
        <h1 className="font-semibold text-2xl">Lyrics</h1>
      </header>
      <section className="w-full">
        {CurrentLyrics ? (
          <p className="text-left leading-9">{CurrentLyrics}</p>
        ) : (
          <span>This song doesn´t have a lyrics</span>
        )}
      </section>
    </aside>
  );
}

export default Lyrics;
