import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import {useDarkMode} from '../Store'



// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial)

export default function Scene({ setBg }) {
 
  const changeDarkMode = useDarkMode((state) => state.changeDarkMode)
  const darkMode = useDarkMode((state) => state.darkMode);

  const sphere = useRef()
  const light = useRef()

  const [down, setDown] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'none'
      : `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>'
        )}'), auto`
  }, [hovered])

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20
    light.current.position.y = state.mouse.y * 20
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, hovered ? state.mouse.x / 2 : 0, 0.2)
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
        0.2
      )
    }
  })

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: darkMode && !hovered ? 0.04 : 1,
      ambient: darkMode && !hovered ? 1.5 : 0.5,
      env: darkMode && !hovered ? 0.4 : 1,
      color: hovered ? '#E8B059' : darkMode ? '#202020' : 'white',
      config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
    },
    [darkMode, hovered, down]
  )

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight ref={light} position-z={-15} intensity={env} color="#F8C069" />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            changeDarkMode(!darkMode)
            setDown(false)
            // Toggle mode between dark and bright
            
            setBg({ background: !darkMode ? '#202020' : '#FFFBEB', fill: !darkMode ? '#FFFBEB' : '#202020' })
          }}>
          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} />
        </a.mesh>
        <Environment preset="warehouse" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={darkMode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  )
}
