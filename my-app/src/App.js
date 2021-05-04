import "./sass/App.scss";
import Bees from "./components/Bee";
import AttackBtn from "./components/AttackBtn";
import workerImage from "./images/worker.png";
import droneImage from "./images/drone.png";
import queenImage from "./images/queen.png";

function App() {
  return (
    <div className='App'>
      <Bees image={workerImage} name='Workers' minHealth={70} />
      <Bees image={droneImage} name='Drones' minHealth={50} />
      <Bees image={queenImage} name='The Queen' minHealth={20} />
      <AttackBtn />
    </div>
  );
}

export default App;
