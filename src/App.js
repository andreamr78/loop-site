import "../src/sass/App.scss"
import Topsite from "./components/Topsite";
import Midsite from "./components/Midsite";
import BottomBar from "./components/BottomBar";
function App() {
  return (
    <div>
      <Topsite/>
      <Midsite/>
      <BottomBar/>
    </div>
  );
}

export default App;
