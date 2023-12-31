import { useSelector } from "react-redux";
import { Songs } from "../data/Songs";
import { Bands } from "../data/Bands";

function Band() {
  const CurrentSong = useSelector((state) => state.SongSlice.CurrentSong);

  const SongBand = Songs[CurrentSong]?.band;

  const Band = Bands.find((b) => b.name === SongBand);

  return (
    <article className="flex flex-row items-center justify-center gap-5 bg-zinc-800 shadow-lg p-4 rounded-lg min-w-96 max-w-96 h-[220px]">
      <picture className="w-20 aspect-auto object-cover rounded-full">
        <img
          src={Band?.picture}
          className="rounded-full"
          alt={`${Band?.name} Picture`}
        />
      </picture>
      <p className="text-xl font-medium text-zinc-400">{Band?.name}</p>
    </article>
  );
}

export default Band;
