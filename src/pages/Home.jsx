



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
      <Motivators className="component" />
      <Potentials className="component" />
      <Sponsor className="component" />
      <Events className="component" />
      <Footer className="component" />
    </>
  );
}

export default Home;


// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Navbar from "../components/Navbar";
// import Herosection from "../components/Herosection";
// import Coreteam from "../components/Coreteam";
// import Ourmissons from "../components/Ourmissons";
// import Motivators from '../components/Motivators';
// import Potentials from "../components/Potentials";
// import Sponsor from "../components/Sponsor";
// import Events from '../components/Events';
// import Footer from '../components/Footer';

// gsap.registerPlugin(ScrollTrigger);

// function Home() {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     sectionsRef.current.forEach((section, index) => {
//       if (!section || section.dataset.ignoreAnimation) return;
      
//       gsap.fromTo(
//         section,
//         { opacity: 0.2, scale: 1.2 },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 1.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: section,
//             start: index === 0 ? "top 25%" : "top 60%",
//             end: index === 0 ? "end end" : "center center",
//             scrub: 2,
//             toggleActions: "play none none reverse",
//             onUpdate: (self) => {
//               let focusIndex = sectionsRef.current.findIndex((s) => self.trigger === s);
              
//               sectionsRef.current.forEach((s, i) => {
//                 if (!s.dataset.ignoreAnimation) {
//                   if (index === 0 && window.scrollY < window.innerHeight * 0.35) {
//                     gsap.to(sectionsRef.current[0], { opacity: 1, scale: 1, duration: 1, ease: "power1.out" });
//                   } else if (i === focusIndex) {
//                     gsap.to(s, { opacity: 1, scale: 1, duration: 1, ease: "power1.out" });
//                   } else if (i < focusIndex) {
//                     gsap.to(s, { opacity: 0.2, scale: 0.8, duration: 1, ease: "power1.out" });
//                   } else {
//                     gsap.to(s, { opacity: 0.2, scale: 1.15, duration: 1, ease: "power1.out" });
//                   }
//                 }
//               });
//             }
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <>
//       <Navbar data-ignore-animation="true" />
//       <div className="w-full max-w-full px-4 sm:px-6 md:px-8">
//         {[Herosection, Coreteam, Ourmissons, Motivators, Potentials, Sponsor, Events].map((Component, index) => (
//           <div
//             key={index}
//             className="my-10 component sm:my-16 md:my-20"
//             ref={(el) => (sectionsRef.current[index] = el)}
//           >
//             <Component />
//           </div>
//         ))}
//       </div>
//       <Footer data-ignore-animation="true" />
//     </>
//   );
// }

// export default Home;
