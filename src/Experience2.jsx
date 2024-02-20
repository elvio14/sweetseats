import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {useLoader} from '@react-three/fiber'
import React from "react"
import { Html,OrbitControls,useGLTF } from '@react-three/drei'

//extend({OrbitControls, Html})

const Experience = () => { 
    //const {camera, gl} = useThree()
    const chairGroup = useRef()
    const {nodes} = useGLTF('/GamingChair7.glb')

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

    const statesMap = {
      arms: setColorArms,
      armpads: setColorArmPads,
      back: setColorBack,
      body: setColorBody,
      corner: setColorCorner,
      pillows: setColorPillows,
      legs: setColorLegs,
      pole: setColorPole,
      seatcushion: setColorSeatCushion,
      shell: setColorShell,
      sidecushion: setColorSideCushion,
      wheels: setColorWheels
    }

    const changeColor = (event, part) => {
      const newColor = event.target.value
      if(statesMap[part]){
        statesMap[part](newColor)
      }else{
        console.error(`States map ${part} error.`)
      }
    }

    return <>
      <Html fullscreen="true">
        <div id="customizer">
          <span style={{color:'yellow'}}>Choose your colors!</span><br/>
          <input id="Arms" type="color" value={colorArms} onChange={(event) => changeColor(event, 'arms')}></input><label htmlFor="Arms">Arms</label><br/>
          <input id="ArmPads" type="color" value={colorArmPads} onChange={(event) => changeColor(event, 'armpads')}></input><label htmlFor="ArmPads">Arm Pads</label><br/>
          <input id="back" type="color" value={colorBack} onChange={(event) => changeColor(event, 'back')}></input><label htmlFor="back">Back</label><br/>
          <input id="Body" type="color" value={colorBody} onChange={(event) => changeColor(event, 'body')}></input><label htmlFor="Body">Body</label><br/>
          <input id="Corner" type="color" value={colorCorner} onChange={(event) => changeColor(event, 'corner')}></input><label htmlFor="Corner">Corner</label><br/>
          <input id="Pillows" type="color" value={colorPillows} onChange={(event) => changeColor(event, 'pillows')}></input><label htmlFor="Pillows">Pillows</label><br/>
          <input id="Legs" type="color" value={colorLegs} onChange={(event) => changeColor(event, 'legs')}></input><label htmlFor="Legs">Legs</label><br/>
          <input id="Pole" type="color" value={colorPole} onChange={(event) => changeColor(event, 'pole')}></input><label htmlFor="Pole">Pole</label><br/>
          <input id="SeatCushion" type="color" value={colorSeatCushion} onChange={(event) => changeColor(event, 'seatcushion')}></input><label htmlFor="SeatCushion">SeatCushion</label><br/>
          <input id="Shell" type="color" value={colorShell} onChange={(event) => changeColor(event, 'shell')}></input><label htmlFor="Shell">Shell</label><br/>
          <input id="SideCushion" type="color" value={colorSideCushion} onChange={(event) => changeColor(event, 'sidecushion')}></input><label htmlFor="SideCushion">SideCushion</label><br/>
          <input id="Wheels" type="color" value={colorWheels} onChange={(event) => changeColor(event, 'wheels')}></input><label htmlFor="Wheels">Wheels</label><br/>
        </div>
        <h3 className="non-selectable">Scroll to zoom, Left Mouse Button to orbit.</h3>
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
        <OrbitControls maxDistance={7} minDistance={3}></OrbitControls>
      </group>

    </>
}

export default Experience