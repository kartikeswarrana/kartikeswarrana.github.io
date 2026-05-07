// src/components/SolarSystem.jsx

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Planet({ radius, color, distance, speed }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;

    ref.current.position.x = Math.cos(t) * distance;
    ref.current.position.y = Math.sin(t) * distance;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function Orbit({ radius }) {
  return (
    <mesh rotation={[0, 0, 0]}>
      <ringGeometry args={[radius - 0.015, radius + 0.015, 200]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

export default function SolarSystem() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{
          position: [0, 0, 22],
          fov: 45,
        }}
      >
        {/* SUN */}
        <mesh>
          <sphereGeometry args={[1.6, 64, 64]} />
          <meshBasicMaterial color="yellow" />
        </mesh>

        {/* ORBITS */}
        <Orbit radius={3} />
        <Orbit radius={4.5} />
        <Orbit radius={6} />
        <Orbit radius={8} />
        <Orbit radius={11} />
        <Orbit radius={14} />
        <Orbit radius={17} />

        {/* MERCURY */}
        <Planet
          radius={0.15}
          color="gray"
          distance={3}
          speed={4.8}
        />

        {/* VENUS */}
        <Planet
          radius={0.28}
          color="#d9a066"
          distance={4.5}
          speed={3.5}
        />

        {/* EARTH */}
        <Planet
          radius={0.30}
          color="deepskyblue"
          distance={6}
          speed={3}
        />

        {/* MARS */}
        <Planet
          radius={0.20}
          color="red"
          distance={8}
          speed={2.4}
        />

        {/* JUPITER */}
        <Planet
          radius={0.95}
          color="#c9b08c"
          distance={11}
          speed={1.3}
        />

        {/* SATURN */}
        <Planet
          radius={0.80}
          color="#e5c97b"
          distance={14}
          speed={1}
        />

        {/* URANUS */}
        <Planet
          radius={0.50}
          color="#8fffff"
          distance={17}
          speed={0.7}
        />
      </Canvas>
    </div>
  );
}