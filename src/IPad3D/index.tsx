import { Canvas } from "@react-three/fiber";

function IPad3D() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas>
        <color attach="background" args={["#000000"]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default IPad3D;
