import { useRef, useContext } from "react"
import React from "react"
import { Html, OrbitControls,useGLTF } from '@react-three/drei'
import { theContext } from "./App"
import './Experience.css'

const Experience = () => { 
    const chairGroup = useRef()
    const {nodes} = useGLTF('/GamingChair7.glb')
    const {
      colorArms, 
      colorArmPads, 
      colorBack, 
      colorBody, 
      colorCorner, 
      colorPillows, 
      colorLegs, 
      colorPole, 
      colorSeatCushion, 
      colorShell, 
      colorSideCushion, 
      colorWheels, 
    } = useContext(theContext)

    return <>
      <Html fullscreen="true">
        <span id="note">Drag to rotate, scroll to zoom.</span>
      </Html>
      <group ref={chairGroup} position-y={-2.4}>
        <mesh geometry={nodes.Arm.children[1].geometry}><meshMatcapMaterial color={colorArms}/></mesh>
        <mesh geometry={nodes.Arm.children[0].geometry}><meshMatcapMaterial color={colorArms}/></mesh>
        <mesh geometry={nodes.ArmPads.geometry}><meshMatcapMaterial color={colorArmPads}/></mesh>
        <mesh geometry={nodes.Back.children[0].geometry}><meshMatcapMaterial color={colorBack}/></mesh>
        <mesh geometry={nodes.Back.children[1].geometry}><meshMatcapMaterial color={colorBack}/></mesh>
        <mesh geometry={nodes.Body.children[0].geometry}><meshMatcapMaterial color={colorBody}/></mesh>
        <mesh geometry={nodes.Body.children[1].geometry}><meshMatcapMaterial color={colorBody}/></mesh>
        <mesh geometry={nodes.Body.children[2].geometry}><meshMatcapMaterial color={colorBody}/></mesh>
        <mesh geometry={nodes.Corner.geometry}><meshMatcapMaterial color={colorCorner}/></mesh>
        <mesh geometry={nodes.Pillows.children[0].geometry}><meshMatcapMaterial color={colorPillows}/></mesh>
        <mesh geometry={nodes.Pillows.children[1].geometry}><meshMatcapMaterial color={colorPillows}/></mesh>
        <mesh geometry={nodes.Legs.children[0].geometry}><meshMatcapMaterial color={colorLegs}/></mesh>
        <mesh geometry={nodes.Legs.children[1].geometry}><meshMatcapMaterial color={colorLegs}/></mesh>
        <mesh geometry={nodes.Pole.children[0].geometry}><meshMatcapMaterial color={colorPole}/></mesh>
        <mesh geometry={nodes.Pole.children[1].geometry}><meshMatcapMaterial color={colorPole}/></mesh>
        <mesh geometry={nodes.SeatCushion.children[0].geometry}><meshMatcapMaterial color={colorSeatCushion}/></mesh>
        <mesh geometry={nodes.SeatCushion.children[1].geometry}><meshMatcapMaterial color={colorSeatCushion}/></mesh>
        <mesh geometry={nodes.Shell.geometry}><meshMatcapMaterial color={colorShell}/></mesh>
        <mesh geometry={nodes.SideCushion.children[0].geometry}><meshMatcapMaterial color={colorSideCushion}/></mesh>
        <mesh geometry={nodes.SideCushion.children[1].geometry}><meshMatcapMaterial color={colorSideCushion}/></mesh>
        <mesh geometry={nodes.Wheels.children[0].geometry}><meshMatcapMaterial color={colorWheels}/></mesh>
        <OrbitControls maxDistance={7} minDistance={3}></OrbitControls>
      </group>
    </>
}

export default Experience