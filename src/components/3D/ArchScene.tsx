import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/** A single architectural column */
function Column({ position, height = 4, radius = 0.08 }: {
  position: [number, number, number];
  height?: number;
  radius?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[radius, radius, height, 16]} />
      <meshStandardMaterial
        color="#1a1a1a"
        roughness={0.85}
        metalness={0.1}
      />
    </mesh>
  );
}

/** Horizontal slab */
function Slab({ position, size }: {
  position: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color="#1f1e1d"
        roughness={0.9}
        metalness={0.05}
      />
    </mesh>
  );
}

/** A wall element */
function Wall({ position, size, rotation = [0, 0, 0] }: {
  position: [number, number, number];
  size: [number, number, number];
  rotation?: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color="#252320"
        roughness={0.95}
        metalness={0.02}
      />
    </mesh>
  );
}

/** A staircase fragment */
function Steps({ position, count = 6 }: {
  position: [number, number, number];
  count?: number;
}) {
  const steps = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      position: [0, i * 0.15, i * 0.25] as [number, number, number],
      size: [1.2, 0.12, 0.3] as [number, number, number],
    }));
  }, [count]);

  return (
    <group position={position}>
      {steps.map((step, i) => (
        <mesh key={i} position={step.position}>
          <boxGeometry args={step.size} />
          <meshStandardMaterial
            color="#201f1d"
            roughness={0.88}
            metalness={0.08}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Grid of thin lines on the ground plane */
function ArchGrid() {
  const lines = useMemo(() => {
    const arr: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = -10; i <= 10; i += 2) {
      arr.push([
        new THREE.Vector3(i, 0, -10),
        new THREE.Vector3(i, 0, 10),
      ]);
      arr.push([
        new THREE.Vector3(-10, 0, i),
        new THREE.Vector3(10, 0, i),
      ]);
    }
    return arr;
  }, []);

  return (
    <group>
      {lines.map((points, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <mesh key={i}>
            <primitive object={geometry} attach="geometry" />
            <lineBasicMaterial color="#1a1a1a" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}


export default function ArchScene({ mouseX = 0, mouseY = 0 }: {
  mouseX?: number;
  mouseY?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    targetRotation.current.y = mouseX * 0.08;
    targetRotation.current.x = mouseY * 0.03;

    groupRef.current.rotation.y +=
      (targetRotation.current.y - groupRef.current.rotation.y) * delta * 1.5;
    groupRef.current.rotation.x +=
      (targetRotation.current.x - groupRef.current.rotation.x) * delta * 1.5;
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Ground grid */}
      <ArchGrid />

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial
          color="#0e0e0e"
          roughness={0.95}
          metalness={0}
        />
      </mesh>

      {/* Column grid — 3x3 */}
      {[-3, 0, 3].map((x) =>
        [-2, 2].map((z) => (
          <Column
            key={`col-${x}-${z}`}
            position={[x, 2, z]}
            height={4}
            radius={0.06}
          />
        ))
      )}

      {/* Elevated slab */}
      <Slab position={[0, 4, 0]} size={[10, 0.15, 6]} />

      {/* Lower slab / platform */}
      <Slab position={[-1, 0.5, -1]} size={[5, 0.1, 4]} />

      {/* Walls */}
      <Wall position={[-5, 2, 0]} size={[0.12, 4, 6]} />
      <Wall position={[3, 1.5, -3]} size={[4, 3, 0.12]} />

      {/* Floating wall fragment */}
      <Wall
        position={[2, 3, 2]}
        size={[2.5, 1.5, 0.08]}
        rotation={[0, 0.3, 0]}
      />

      {/* Staircase */}
      <Steps position={[-3.5, 0.5, 1]} count={8} />

      {/* Light shaft marker — thin vertical */}
      <mesh position={[1.5, 2, -1]}>
        <boxGeometry args={[0.02, 4, 0.02]} />
        <meshStandardMaterial
          color="#C4B5A3"
          emissive="#C4B5A3"
          emissiveIntensity={0.3}
          roughness={0.5}
        />
      </mesh>

      {/* Ambient lighting */}
      <ambientLight intensity={0.15} />
      <directionalLight
        position={[8, 12, 5]}
        intensity={0.8}
        castShadow
        color="#f5f0eb"
      />
      <directionalLight
        position={[-5, 8, -3]}
        intensity={0.3}
        color="#c4b5a3"
      />

      {/* Point light inside the structure */}
      <pointLight
        position={[0, 2.5, 0]}
        intensity={0.4}
        color="#f5f0eb"
        distance={8}
        decay={2}
      />

      {/* Subtle volumetric light shaft */}
      <spotLight
        position={[1.5, 6, -1]}
        angle={0.15}
        penumbra={0.8}
        intensity={1.2}
        color="#f5f0eb"
        target-position={[1.5, 0, -1]}
        castShadow
      />
    </group>
  );
}
