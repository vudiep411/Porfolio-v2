import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import fontJson from './font.json'

extend({ TextGeometry })

const ThreeDText = ({ text, position }) => {
    const font = new FontLoader().parse(fontJson);

    return (
        <mesh position={position}>
            <textGeometry 
                args={[text, {font, size: 0.2, height: 0.08}]} 
            />
            <meshStandardMaterial color="green" />
        </mesh>
    );
}

export default ThreeDText