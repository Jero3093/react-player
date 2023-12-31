import "./App.css";
import Band from "./components/Band";
import Lyrics from "./components/Lyrics";
import Player from "./components/Player";
import Playlist from "./components/Playlist";

function App() {
  return (
    <main className="flex flex-col gap-4 min-h-screen justify-center md:flex-row items-center p-4">
      <div className="flex flex-col gap-4">
        <Player />
        <Playlist />
      </div>
      <div className="flex flex-col gap-4">
        <Lyrics />
        <Band />
      </div>
    </main>
  );
}

export default App;
