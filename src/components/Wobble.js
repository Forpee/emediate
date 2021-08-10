import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/web";


import Scene from "./Scene";
export default function Wobble() {
  const [{ background }, set] = useSpring(
    { background: "#FFFBEB", fill: "#202020" },
    []
  );
  return (
    <a.main style={{ background }}>
      <div className="h-screen relative">
      <img alt='' src='/pl.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64  z-10 pointer-events-none'></img>
        <Canvas className="canvas" dpr={[1, 2]}>
          <Scene setBg={set} />
       
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </a.main>
  );
}
