import './ThreeBackdrop.css';
import {Canvas, useFrame, useThree, extend} from '@react-three/fiber'

export function ThreeBackdrop() {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div className='canvas'>
      <Canvas orthographic camera={{ zoom:height*0.75}}>
        <mesh
          position={[0,0.75,0]}>
          <circleGeometry attach="geometry" args={[1,128]}/>
          <meshBasicMaterial attach="material" color="#6b586b"/>
          {/*<meshBasicMaterial attach="material" color="#ba18ba"/>*/}
        </mesh>
      </Canvas>
    </div>
  )
}