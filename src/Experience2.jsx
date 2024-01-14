import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef, useState, Suspense, useMemo, useEffect, require } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {useLoader} from '@react-three/fiber'
import React from "react"
import * as THREE from "three"
import { Html, CameraControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
// extend({OrbitControls, Html})

const Experience = () => { 
    const {camera, gl} = useThree()
    const chairGroup = useRef()
    const {nodes} = useGLTF('/GamingChair7.glb')
    console.log(nodes)

    const [colorArms, setColorArms] = useState('0xff00ff')
    const [colorArmPads, setColorArmPads] = useState('0xff00ff')
    const [colorBack, setColorBack] = useState('0xff00ff')
    const [colorBody, setColorBody] = useState('0xff00ff')
    const [colorCorner, setColorCorner] = useState('0xff00ff')
    const [colorPillows, setColorPillows] = useState('0xff00ff')
    const [colorLegs, setColorLegs] = useState('0xff00ff')
    const [colorPole, setColorPole] = useState('0xff00ff')
    const [colorSeatCushion, setColorSeatCushion] = useState('0xff00ff')
    const [colorShell, setColorShell] = useState('0xff00ff')
    const [colorSideCushion, setColorSideCushion] = useState('0xff00ff')
    const [colorWheels, setColorWheels] = useState('0xff00ff')

    // useMemo(()=>{
    //   setColor(0xffffff)
    // },[])

    const changeColorArms = (event) =>{
      const newColor = event.target.value
      setColorArms(newColor)
    }
    const changeColorArmPads = (event) =>{
      const newColor = event.target.value
      setColorArmPads(newColor)
    }
    const changeColorBack = (event) =>{
      const newColor = event.target.value
      setColorBack(newColor)
    }
    const changeColorBody = (event) =>{
      const newColor = event.target.value
      setColorBody(newColor)
    }
    const changeColorCorner = (event) =>{
      const newColor = event.target.value
      setColorCorner(newColor)
    }
    const changeColorPillows = (event) =>{
      const newColor = event.target.value
      setColorPillows(newColor)
    }
    const changeColorLegs = (event) =>{
      const newColor = event.target.value
      setColorLegs(newColor)
    }
    const changeColorPole = (event) =>{
      const newColor = event.target.value
      setColorPole(newColor)
    }
    const changeColorSeatCushion = (event) =>{
      const newColor = event.target.value
      setColorSeatCushion(newColor)
    }
    const changeColorShell = (event) =>{
      const newColor = event.target.value
      setColorShell(newColor)
    }
    const changeColorSideCushion = (event) =>{
      const newColor = event.target.value
      setColorSideCushion(newColor)
    }
    const changeColorWheels = (event) =>{
      const newColor = event.target.value
      setColorWheels(newColor)
    }

    return <>
      <Html fullscreen="true">
        <div id="customizer">
          <span style={{color:'yellow'}}>Choose your colors!</span><br/>
          <input id="Arms" type="color" value={colorArms} onChange={changeColorArms}></input><label htmlFor="Arms">Arms</label><br/>
          <input id="ArmPads" type="color" value={colorArmPads} onChange={changeColorArmPads}></input><label htmlFor="ArmPads">Arm Pads</label><br/>
          <input id="back" type="color" value={colorBack} onChange={changeColorBack}></input><label htmlFor="back">Back</label><br/>
          <input id="Body" type="color" value={colorBody} onChange={changeColorBody}></input><label htmlFor="Body">Body</label><br/>
          <input id="Corner" type="color" value={colorCorner} onChange={changeColorCorner}></input><label htmlFor="Corner">Corner</label><br/>
          <input id="Pillows" type="color" value={colorPillows} onChange={changeColorPillows}></input><label htmlFor="Pillows">Pillows</label><br/>
          <input id="Legs" type="color" value={colorLegs} onChange={changeColorLegs}></input><label htmlFor="Legs">Legs</label><br/>
          <input id="Pole" type="color" value={colorPole} onChange={changeColorPole}></input><label htmlFor="Pole">Pole</label><br/>
          <input id="SeatCushion" type="color" value={colorSeatCushion} onChange={changeColorSeatCushion}></input><label htmlFor="SeatCushion">SeatCushion</label><br/>
          <input id="Shell" type="color" value={colorShell} onChange={changeColorShell}></input><label htmlFor="Shell">Shell</label><br/>
          <input id="SideCushion" type="color" value={colorSideCushion} onChange={changeColorSideCushion}></input><label htmlFor="SideCushion">SideCushion</label><br/>
          <input id="Wheels" type="color" value={colorWheels} onChange={changeColorWheels}></input><label htmlFor="Wheels">Wheels</label><br/>
        </div>
        <h3>Scroll to zoom, Left Mouse Button to orbit.</h3>
      </Html>
      <group ref={chairGroup} position-y={-1.3}>
      <mesh geometry={nodes.Arm.children[1].geometry}>            <meshMatcapMaterial color={colorArms}/> </mesh>
      <mesh geometry={nodes.Arm.children[0].geometry}>            <meshMatcapMaterial color={colorArms}/> </mesh>
      <mesh geometry={nodes.ArmPads.geometry}>                    <meshMatcapMaterial color={colorArmPads}/> </mesh>
      <mesh geometry={nodes.Back.children[0].geometry}>           <meshMatcapMaterial color={colorBack}/></mesh>
      <mesh geometry={nodes.Back.children[1].geometry}>           <meshMatcapMaterial color={colorBack}/></mesh>
      <mesh geometry={nodes.Body.children[0].geometry}>           <meshMatcapMaterial color={colorBody}/></mesh>
      <mesh geometry={nodes.Body.children[1].geometry}>           <meshMatcapMaterial color={colorBody}/></mesh>
      <mesh geometry={nodes.Body.children[2].geometry}>           <meshMatcapMaterial color={colorBody}/></mesh>
      <mesh geometry={nodes.Corner.geometry}>                     <meshMatcapMaterial color={colorCorner}/></mesh>
      <mesh geometry={nodes.Pillows.children[0].geometry}>        <meshMatcapMaterial color={colorPillows}/></mesh>
      <mesh geometry={nodes.Pillows.children[1].geometry}>        <meshMatcapMaterial color={colorPillows}/></mesh>
      <mesh geometry={nodes.Legs.children[0].geometry}>           <meshMatcapMaterial color={colorLegs}/></mesh>
      <mesh geometry={nodes.Legs.children[1].geometry}>           <meshMatcapMaterial color={colorLegs}/></mesh>
      <mesh geometry={nodes.Pole.children[0].geometry}>           <meshMatcapMaterial color={colorPole}/></mesh>
      <mesh geometry={nodes.Pole.children[1].geometry}>           <meshMatcapMaterial color={colorPole}/></mesh>
      <mesh geometry={nodes.SeatCushion.children[0].geometry}>    <meshMatcapMaterial color={colorSeatCushion}/></mesh>
      <mesh geometry={nodes.SeatCushion.children[1].geometry}>    <meshMatcapMaterial color={colorSeatCushion}/></mesh>
      <mesh geometry={nodes.Shell.geometry}><meshMatcapMaterial/> <meshMatcapMaterial color={colorShell}/></mesh>
      <mesh geometry={nodes.SideCushion.children[0].geometry}>    <meshMatcapMaterial color={colorSideCushion}/></mesh>
      <mesh geometry={nodes.SideCushion.children[1].geometry}>    <meshMatcapMaterial color={colorSideCushion}/></mesh>
      <mesh geometry={nodes.Wheels.children[0].geometry}>         <meshMatcapMaterial color={colorWheels}/></mesh>

      <CameraControls></CameraControls>
    </group>

    </>
}


export default Experience