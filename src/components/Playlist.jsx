import { Songs } from "../data/Songs";
import { GoDotFill } from "react-icons/go";

function Playlist() {
  return (
    <aside className="flex flex-col gap-5 bg-zinc-800 shadow-lg p-4 rounded-lg min-w-96 max-w-96 h-[477px] overflow-y-scroll">
      <header className="flex flex-row items-center gap-3">
        <h1 className="font-semibold text-2xl">Playlist</h1>
        <GoDotFill className="text-zinc-400 w-2 h-2" />
        <h1 className="font-semibold text-xl">{Songs.length} Songs</h1>
      </header>
      <ul className="flex flex-col items-center gap-2">
        {Songs.map((item) => {
          return (
            <li
              className="flex flex-row items-center gap-3 w-full hover:bg-zinc-600/25 p-2 rounded-md cursor-pointer"
              key={item.id}
            >
              <picture>
                <img
                  src={item.cover}
                  alt={`Cover of ${item.song}`}
                  className="w-14 h-14 rounded-md"
                />
              </picture>
              <div className="flex flex-col items-start gap-2">
                <p className="text-lg truncate max-w-[250px]">{item.name}</p>
                <p className="text-base truncate max-w-[250px] text-zinc-500">
                  {item.band}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Playlist;
