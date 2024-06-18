import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-800 text-white h-screen">
        <h1 className="my-11 text-3xl">Search your favorite Pokémon</h1>
        <Search />
      </div>
    </>
  );
}

export default App;
