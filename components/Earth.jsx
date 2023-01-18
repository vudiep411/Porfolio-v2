import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from "three"

const Earth = ({ position, handleProjectModal }) => {
  const colorMap = useLoader(TextureLoader, '/texture/8k_earth_daymap.jpg')
  const specularMap = useLoader(TextureLoader, '/texture/8k_earth_specular_map.jpg')
  const normalMap = useLoader(TextureLoader, '/texture/8k_earth_normal_map.jpg')
  const cloudMap = useLoader(TextureLoader, '/texture/8k_earth_clouds.jpg')

  const [hovered, setHover] = useState(false)
  const earthRef = useRef()
  const cloudsRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = hovered ? elapsedTime * 10 : elapsedTime / 6;
    cloudsRef.current.rotation.y = hovered ? elapsedTime * 10 : elapsedTime / 6;
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <>
      <mesh ref={cloudsRef} position={position} onClick={handleProjectModal}>
        <sphereGeometry args={[0.5, 30, 30]}/>     
        <meshPhongMaterial map={cloudMap} opacity={0.4} depthWrite={true} transparent={true} size={THREE.DoubleSide}/>   
      </mesh>
      <mesh 
        position={position}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        ref={earthRef}
        scale={1}
      >
        <sphereGeometry args={[0.5, 30, 30]}/>
        <meshPhongMaterial specular={specularMap}/>
        <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
      </mesh>
    </>
  )
}

export default Earth