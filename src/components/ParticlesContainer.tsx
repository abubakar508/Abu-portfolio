'use client';

//import react & useCalbakc
import React, { useCallback} from 'react'

// import loadFull from tsparticles
import { loadFull } from 'tsparticles'

// import particles
import { Particles } from 'react-tsparticles'

//import engine from ts-particles-engine
import { Engine } from 'tsparticles-engine';

const ParticlesContainer = () => {
    // init
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles className=' w-full h-screen absolute' id='tsparticles' init={particlesInit} loaded={particlesLoaded} 
    options={{
        fullScreen: {enable: false},
        background: {
            color: {
                value: ''
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: 'push',
                },
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 90,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: '#7f1cfc'
            },
            links: {
                color: '#6519c6',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce'
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 150,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: {min: 1, max: 5}
            },
        },
        detectRetina: true,
    }}
    />
  )
}

export default ParticlesContainer