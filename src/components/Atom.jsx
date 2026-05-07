import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Nucleus() {
  const meshRef = useRef()

  useFrame(() => {
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />

      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={1.5}
      />
    </mesh>
  )
}

function Electron({
  radius,
  speed,
  offset,
  rotation
}) {
  const electronRef = useRef()

  useFrame(({ clock }) => {
    const t =
      clock.getElapsedTime() * speed + offset

    const x = radius * Math.cos(t)
    const z = radius * Math.sin(t)

    electronRef.current.position.set(x, 0, z)
  })

  return (
    <group rotation={rotation}>
      <mesh ref={electronRef}>
        <sphereGeometry args={[0.12, 32, 32]} />

        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
        />
      </mesh>
    </group>
  )
}

function OrbitRing({ radius, rotation }) {
  const points = []

  for (let i = 0; i <= 100; i++) {
    const angle = (i / 100) * Math.PI * 2

    points.push(
      new THREE.Vector3(
        radius * Math.cos(angle),
        0,
        radius * Math.sin(angle)
      )
    )
  }

  const geometry =
    new THREE.BufferGeometry().setFromPoints(points)

  return (
    <line rotation={rotation}>
      <bufferGeometry attach="geometry" {...geometry} />

      <lineBasicMaterial color="#ffffff" />
    </line>
  )
}

export default function Atom() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />

        <pointLight
          position={[10, 10, 10]}
          intensity={2}
        />

        <Nucleus />

<OrbitRing
  radius={2}
  rotation={[1, 0, 0]}
/>

<OrbitRing
  radius={2}
  rotation={[1, 0, (2 * Math.PI) / 3]}
/>

<OrbitRing
  radius={2}
  rotation={[1, 0, (4 * Math.PI) / 3]}
/>


<Electron
  radius={2}
  speed={1}
  offset={0}
  rotation={[1, 0, 0]}
/>

<Electron
  radius={2}
  speed={1.2}
  offset={2}
  rotation={[1, 0, (2 * Math.PI) / 3]}
/>

<Electron
  radius={2}
  speed={1.5}
  offset={4}
  rotation={[1, 0, (4 * Math.PI) / 3]}
/>



        <OrbitControls enableRotate={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
