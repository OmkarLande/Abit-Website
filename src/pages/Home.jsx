import { useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Coreteam from "../components/Coreteam"
import Ourmissons from "../components/Ourmissons"
import Motivators from '../components/Motivators'
import Potentials from "../components/Potentials"
import Sponsor from "../components/Sponsor"
import Events from '../components/Events';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    // Define animation timeline
    const tl = gsap.timeline();

    // Set initial state
    tl.set('.component', { opacity: 0, scale: 0.8, filter: 'blur(8px)' });

    // Animation sequence
    tl.to('.component', { duration: 1, opacity: 1, scale: 1, filter: 'blur(0px)' });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on component mount

  return (
    <>
      <Navbar className="component" />
      <Herosection className="component" />
      <Coreteam className="component" />
      <Ourmissons className="component" /> 
      {/* <Motivators className="component" />
      <Potentials className="component" />
      <Sponsor className="component" /> 
      <Events className="component" />
       <Footer className="component" /> */}
    </>
  );
}

export default Home;
