import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Environment } from "@react-three/drei/core";

function IPad() {
  const { scene } = useGLTF("/ipad2.glb");
  scene.rotateY(Math.PI);
  useFrame(() => {});
  return <primitive object={scene} scale={0.08} />;
}

function IPad3D() {
  return (
    <div className="fixed inset-0">
      <Canvas>
        <Environment preset="city" />
        <ambientLight />
        <Suspense>
          <IPad />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default IPad3D;
