"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Shape({ position, color, size, speed, offset }: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.x = initialPos.x + Math.sin(t * 0.5) * 0.5;
    ref.current.position.y = initialPos.y + Math.cos(t * 0.7) * 0.5;
    ref.current.position.z = initialPos.z + Math.sin(t * 0.3) * 0.3;
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.15}
        wireframe
        distort={0.2}
        speed={2}
      />
    </mesh>
  );
}

function TorusShape({ position, color, size }: {
  position: [number, number, number];
  color: string;
  size: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.1;
    ref.current.rotation.y = clock.getElapsedTime() * 0.15;
    ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.3) * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[size, size * 0.2, 16, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.08} />
    </mesh>
  );
}

function Scene() {
  const shapes: { position: [number, number, number]; color: string; size: number; speed: number; offset: number }[] = useMemo(() => [
    { position: [-4, 2, -5], color: "#00d4ff", size: 0.6, speed: 0.4, offset: 0 },
    { position: [5, -1, -4], color: "#7c3aed", size: 0.8, speed: 0.3, offset: 2 },
    { position: [-3, -2, -3], color: "#f59e0b", size: 0.5, speed: 0.5, offset: 1 },
    { position: [4, 3, -6], color: "#00d4ff", size: 0.4, speed: 0.6, offset: 3 },
    { position: [0, -3, -5], color: "#7c3aed", size: 0.7, speed: 0.2, offset: 4 },
  ], []);

  const torusShapes: { position: [number, number, number]; color: string; size: number }[] = useMemo(() => [
    { position: [-5, -2, -8], color: "#00d4ff", size: 1.2 },
    { position: [5, 2, -10], color: "#7c3aed", size: 1.5 },
    { position: [0, 4, -12], color: "#f59e0b", size: 1.0 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#00d4ff" />
      {shapes.map((s, i) => (
        <Shape key={i} {...s} />
      ))}
      {torusShapes.map((s, i) => (
        <TorusShape key={i + 100} {...s} />
      ))}
    </>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
        <Scene />
      </Canvas>
    </div>
  );
}
