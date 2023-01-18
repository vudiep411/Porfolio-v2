import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Jupiter = ({ position, handleEducationModal }) => {
    const [hovered, setHover] = useState(false)

    const colorMap = useLoader(TextureLoader, '/texture/8k_jupiter.jpg')
    const jupiterRef = useRef()

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        jupiterRef.current.rotation.y = hovered ? elapsedTime * 10 : elapsedTime / 2;
    });
    
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh 
            position={position}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            ref={jupiterRef}
            scale={1}
            onClick={handleEducationModal}
        >
            <sphereGeometry args={[0.5, 30, 30]}/>
            <meshStandardMaterial map={colorMap} />
        </mesh>
  )
}

export default Jupiter