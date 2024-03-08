import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Coreteam from "../components/Coreteam"
import Ourmissons from "../components/Ourmissons"
import Motivators from '../components/Motivators'
import Potentials from "../components/Potentials"

function Home() {

  return (
    <>
   
          <Navbar />
          <Herosection />
          <Coreteam />
          <Ourmissons />
          <Motivators />
          <Potentials/>
         
    </>
  );
}

export default Home;
