import { Suspense, memo, MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Environment } from "@react-three/drei/core";
import { Group } from "three";

function IPad({ iPadmodelRef }: { iPadmodelRef: MutableRefObject<Group | undefined> }) {
  const { scene } = useGLTF("/ipad.glb");
  scene.rotateX(-Math.PI * 0.48);
  scene.position.z = -5;
  return <primitive ref={iPadmodelRef} object={scene} scale={0.08} />;
}

function IPad3D({ iPadmodelRef }: { iPadmodelRef: MutableRefObject<Group | undefined> }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        {/* <Environment preset="city" /> */}
        <ambientLight />
        <Suspense>
          <IPad iPadmodelRef={iPadmodelRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default memo(IPad3D);
