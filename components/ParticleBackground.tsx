


// // 'use client'

// // import { useRef, useMemo } from 'react'
// // import { Canvas, useFrame } from '@react-three/fiber'
// // import { Points, PointMaterial } from '@react-three/drei'
// // import * as THREE from 'three'

// // function Particles() {
// //   const ref = useRef<THREE.Points>(null)

// //   const geometry = useMemo(() => {
// //     const positions = new Float32Array(2000 * 3)
// //     for (let i = 0; i < 2000; i++) {
// //       const x = (Math.random() - 0.5) * 10
// //       const y = (Math.random() - 0.5) * 10
// //       const z = (Math.random() - 0.5) * 10
// //       positions.set([x, y, z], i * 3)
// //     }
// //     const geom = new THREE.BufferGeometry()
// //     geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
// //     return geom
// //   }, [])

// //   useFrame((_, delta) => {
// //     if (ref.current) {
// //       ref.current.rotation.x -= delta / 10
// //       ref.current.rotation.y -= delta / 15
// //     }
// //   })

// //   return (
// //     <Points ref={ref} geometry={geometry} frustumCulled={false}>
// //       <PointMaterial
// //         transparent
// //         color="#3b82f6"
// //         size={0.005}
// //         sizeAttenuation
// //         depthWrite={false}
// //         opacity={0.6}
// //       />
// //     </Points>
// //   )
// // }

// // export default function ParticleBackground() {
// //   return (
// //     <div className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
// //       <Canvas camera={{ position: [0, 0, 5] }}>
// //         <Particles />
// //       </Canvas>
// //     </div>
// //   )
// // }



'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const ref = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geom
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <points ref={ref} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        transparent
        color="#3b82f6"
        size={0.05} 
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </points>
  )
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  )
}


