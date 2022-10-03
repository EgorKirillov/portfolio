import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {IParallax} from "tsparticles-engine/types/Options/Interfaces/Interactivity/Events/IParallax";
import {InteractivityDetect} from "tsparticles-engine/types/Enums/InteractivityDetect";


export const Part = () => {
  const particlesInit = useCallback(async (engine: any) => {
    
    await loadFull(engine);
  }, []);
  
  
  return (
    <Particles
      id={"tsparticles"}
      init={particlesInit}
      style = {{"zIndex": -1}}
      options={{
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
        // },
        fpsLimit: 60,
      /*  interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
              
            },
            onHover: {
              enable: true,
              mode: "bubble",
                         },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 70,
              duration: 1,
            },
            bubble:{
              distance:80,
              size: 10,
              duration: 0.2,
            }
            
          },
        },*/
        // duration: 6000,
        pauseOnOutsideViewport: true,
        particles: {
          zIndex:{
            opacityRate: -100,
            velocityRate: -100,
            sizeRate: -100,
            value:-100,
          },

          color: {
            value: "#80B8E0",
          },
          
          links: {
            color: "#557A95",
            distance: 600,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 200,
            },
            value: 3,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            value: {min: 1, max: 3},
          },
        },
        // detectRetina: true,
        
  
      }}
    />
  );
};