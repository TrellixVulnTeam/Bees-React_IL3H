import "./sass/App.scss";
import Bees from "./components/Bee";
import beeImg from "./images/bee.png";

function App() {
  return (
    <div className='App'>
      <Bees
        image={beeImg}
        name='Workers'
        minHealth={70}
        attackPlaceHolder={0}
      />
      <Bees image={beeImg} name='Drones' minHealth={50} />
      <Bees image={beeImg} name='The Queen' minHealth={20} />
    </div>
  );
}

export default App;
