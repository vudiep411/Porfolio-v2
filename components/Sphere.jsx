import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

const Projects = ({position, color, hoverColor}) => {
    const [hovered, setHover] = useState(false)
    const ref = useRef()

    useFrame((state, delta) => (ref.current.rotation.x += delta))

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

  return (
    <mesh
        position={position}
        ref={ref} 
        rotation={[Math.PI / 2, 0, 0]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
    >
        <sphereGeometry args={[0.5, 30, 30]} />
        <meshStandardMaterial color={hovered ? hoverColor : color} transparent/>
    </mesh>
  )
}

export default Projects