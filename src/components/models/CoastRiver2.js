/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function CoastRiver2(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/coast-v2.gltf')
  return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0.12, 0, -0.06]} rotation={[Math.PI / 2, 0, -Math.PI]}>
          <group position={[0.12, -0.06, 0]} rotation={[Math.PI / 2, 0, -Math.PI]}>
            <mesh material={materials.GrayMam} geometry={nodes.Extrude1_1.geometry} />
          </group>
          <group position={[0.12, -0.06, 0]} rotation={[Math.PI / 2, 0, -Math.PI]}>
            <mesh material={materials.GrayMam} geometry={nodes.Extrude2_1.geometry} />
          </group>
          <group position={[0.12, -0.06, 0]} rotation={[Math.PI / 2, 0, -Math.PI]}>
            <mesh material={materials.GrayMam} geometry={nodes.Extrude3_1.geometry} />
          </group>
          <group position={[0.12, -0.06, 0]} rotation={[Math.PI / 2, 0, -Math.PI]}>
            <mesh material={materials.GrayMam} geometry={nodes.Extrude4_1.geometry} />
          </group>
          <group position={[0.12, -0.06, 0]} rotation={[Math.PI / 2, 0, -Math.PI]}>
            <mesh material={materials.GrayMam} geometry={nodes.Extrude5_1.geometry} />
          </group>
          <group position={[0.12, -0.06, -0.01]} rotation={[Math.PI / 2, 0, -Math.PI]}>
            <mesh material={materials.GrayMam} geometry={nodes.Extrude6_1.geometry} />
          </group>
        </group>
        <mesh material={materials.BlueMat} geometry={nodes.sea.geometry} />
      </group>
  )
}

useGLTF.preload('/coast-v2.gltf')
