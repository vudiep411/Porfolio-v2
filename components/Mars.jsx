import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Mars = ({ position, handleAboutModal }) => {
    const [hovered, setHover] = useState(false)

    const colorMap = useLoader(TextureLoader, '/texture/8k_mars.jpg')
    const marsRef = useRef()

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        marsRef.current.rotation.y = hovered ? elapsedTime * 10 : elapsedTime / 4;
    });
    
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])
    
    return (
        <mesh 
            position={position}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            ref={marsRef}
            scale={1}
            onClick={handleAboutModal}
        >
            <sphereGeometry args={[0.5, 30, 30]}/>
            <meshStandardMaterial map={colorMap} />
        </mesh>
  )
}

export default Mars