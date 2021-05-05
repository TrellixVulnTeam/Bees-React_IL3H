import "./sass/App.scss";
import Bees from "./components/Bee";

function App() {
  const beeInitialValues = {
    attackNumber: Math.trunc(Math.random() * 100) + 1,
    initialScore: 100,
  };

  return (
    <div className='App'>
      <Bees initialValues={beeInitialValues} name='Workers' minHealth={70} />
      <Bees initialValues={beeInitialValues} name='Drones' minHealth={50} />
      <Bees initialValues={beeInitialValues} name='The Queen' minHealth={20} />
    </div>
  );
}

export default App;
