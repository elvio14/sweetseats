import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef, useState, Suspense, useMemo } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import React from "react"
import { MeshBasicMaterial } from "three"

extend({OrbitControls})

const GLTFModelLoad = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url)
  const meshGroupRef = useRef()

  // gltf.scene.traverse((child)=>{
  //   if (child.isMesh){
  //    child.material = new MeshBasicMaterial({color:0xff0000})
  //   }
  // })

  const findMeshByName = (name, parent) => {
    if (parent.userData.name === name) {
      return parent
    }

    for (const child of parent.children) {
      const result = findMeshByName(name, child)
      if (result) {
        return result
      }
    }

    return null
  };

  const armMesh = findMeshByName('ARM_', gltf.scene)
  console.log(armMesh)
  console.log(gltf.scene)

  // if (desiredMesh) {
  //   // Perform operations on the desired mesh
  //   desiredMesh.material = new MeshBasicMaterial({ color: 'red' }); // Example: Assign a new material
  //   desiredMesh.position.set(0, 0, 0); // Example: Change the position
  // }
  return <primitive object={gltf.scene} ref={meshGroupRef} />
}

const Experience = () => { 
    const {camera, gl} = useThree()
    const models = [
      { id: 1, url: '/chairPartsGLTF/arm.glb'},
      { id: 2, url: '/chairPartsGLTF/armPads.glb'},
      { id: 3, url: '/chairPartsGLTF/back.glb'},
      { id: 4, url: '/chairPartsGLTF/body.glb'},
      { id: 5, url: '/chairPartsGLTF/corner.glb'},
      { id: 6, url: '/chairPartsGLTF/headPillow.glb'},
      { id: 7, url: '/chairPartsGLTF/legs.glb'},
      { id: 8, url: '/chairPartsGLTF/pole.glb'},
      { id: 9, url: '/chairPartsGLTF/seatCushion.glb'},
      { id: 10, url: '/chairPartsGLTF/seatPillow.glb'},
      { id: 11, url: '/chairPartsGLTF/shell.glb'},
      { id: 12, url: '/chairPartsGLTF/sideCushion.glb'},
      { id: 13, url: '/chairPartsGLTF/wheels.glb'}
    ]



    return <>
    <orbitControls args={[camera, gl.domElement]}/>

    <group scale={2.5} position-y={-1}>
      <Suspense fallback={null}>
        {models.map((model)=>(
          <GLTFModelLoad key={model.id} url={model.url}/>
        ))}
      </Suspense>
    </group>
    </>
}

export default Experience