
import Herosection from './components/Herosection';
import Coreteam from './components/Coreteam';
import Motivators from './components/Motivators';


function App() {

  return (
    <>
      <h1 className="text-center text-white text-3xl font-bold">
        ABIT-WEBSITE
      </h1>
      {/* <Herosection /> */}
      <Coreteam />
      <Motivators />
    </>
  );
}

export default App;
