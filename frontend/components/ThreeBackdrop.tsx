"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function ObjectShard() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.16;
    ref.current.rotation.y += delta * 0.22;
  });
  return (
    <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.65}>
      <mesh ref={ref} position={[1.7, 0.1, 0]} scale={[1.35, 1.35, 1.35]}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshTransmissionMaterial color="#d6c3a5" roughness={0.35} thickness={0.5} transmission={0.55} distortion={0.12} />
      </mesh>
    </Float>
  );
}

export function ThreeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[4, 4, 4]} intensity={2.2} />
        <ObjectShard />
      </Canvas>
    </div>
  );
}
