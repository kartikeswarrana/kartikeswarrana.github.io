import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function Orbit({ rotation, speed, offset }) {
  const electronRef = useRef()

  useFrame(({ clock }) => {
    const t =
      clock.getElapsedTime() * speed + offset

    const a = 2.2
    const b = 0.9

    electronRef.current.position.x = a * Math.cos(t)
    electronRef.current.position.y = b * Math.sin(t)
  })

  return (
    <group rotation={rotation}>
      {/* Orbit Line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 200]} />

        <meshBasicMaterial color="white" />
      </mesh>

      {/* Electron */}
      <mesh ref={electronRef}>
        <sphereGeometry args={[0.09, 32, 32]} />

        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}

function Nucleus() {
  return (
    <mesh>
      <sphereGeometry args={[0.35, 64, 64]} />

      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={1}
      />
    </mesh>
  )
}

export default function Atom() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1} />

        <Nucleus />

        <Orbit
          rotation={[0, 0, 0]}
          speed={1}
          offset={0}
        />

        <Orbit
          rotation={[0, 0, Math.PI / 3]}
          speed={1.2}
          offset={2}
        />

        <Orbit
          rotation={[Math.PI / 2, 0, Math.PI / 6]}
          speed={0.8}
          offset={4}
        />

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}
