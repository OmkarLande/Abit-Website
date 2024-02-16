

import Herosection from './components/Herosection';
import Navbar from './components/Navbar'

import Herosection from './components/Herosection';
import Coreteam from './components/Coreteam';
import Motivators from './components/Motivators';
import Ourmissons from './components/Ourmissons'
import Potentials from './components/Potentials';


function App() {

  return (
    <>
    <Navbar />
      <h1 className="text-center text-white text-3xl font-bold">
        ABIT-WEBSITE
      </h1>

      <Herosection/>
      

      <Herosection />
      <Coreteam />
      <Ourmissons/>
      <Motivators />
      <Potentials/>

    </>
  );
}

export default App;
