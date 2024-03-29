import React from "react"
import { useState, useContext, useEffect } from "react"
import { theContext } from "./App"
import './Panel.css'

const Panel = () => {

  const {
      colorArms, setColorArms,
      colorArmPads, setColorArmPads,
      colorBack, setColorBack,
      colorBody, setColorBody,
      colorCorner, setColorCorner,
      colorPillows, setColorPillows,
      colorLegs, setColorLegs,
      colorPole, setColorPole,
      colorSeatCushion, setColorSeatCushion,
      colorShell, setColorShell,
      colorSideCushion, setColorSideCushion,
      colorWheels, setColorWheels
  } = useContext(theContext)
  const parts =
  ['arms', 'armpads', 'back', 'body',
   'corner', 'pillows', 'legs', 'pole',
   'seatcushion', 'shell', 'sidecushion', 'wheels']
  
  const statesMap = {
      [parts[0]]: setColorArms,
      [parts[1]]: setColorArmPads,
      [parts[2]]: setColorBack,
      [parts[3]]: setColorBody,
      [parts[4]]: setColorCorner,
      [parts[5]]: setColorPillows,
      [parts[6]]: setColorLegs,
      [parts[7]]: setColorPole,
      [parts[8]]: setColorSeatCushion,
      [parts[9]]: setColorShell,
      [parts[10]]: setColorSideCushion,
      [parts[11]]: setColorWheels
    }

  const changeColor = (event, part) => {
    const newColor = event.target.value
    if(statesMap[part]){
      statesMap[part](newColor)
    }else{
      console.error(`States map ${part} error.`)
    }
  }
  //PRESETS
  const [presets, setPresets] = useState([])
  const updatePresets = () => {
    const newPresets = []
    for(let i = 0; i < sessionStorage.length; i++){
      const key = sessionStorage.key(i)
      const value = sessionStorage.getItem(key)
      if(value !== null){
        try{
          const parsed = JSON.parse(value)
          newPresets.push({key: key, name: parsed.name, array: parsed.array})
        } catch (err){
          console.error(err.message)
        }
        
      }
    }
    setPresets(newPresets)
  }
  const [nameExists, setNameExists] = useState(false)
  const handleSelectItem = (id, key) => {
    const items = document.getElementsByClassName(id)
    if(items){
      for(const item of items){
        item.classList.remove(id)
      }
    }
    const found = document.getElementById(key)
    found.classList.add(id)
  }
  const saveColorSet = (setName) => {
    setNameExists(false)
    const foundName = presets.find(preset => preset.key === setName)
    if (foundName) {
      console.log('Found name, set name exists to true')
      setNameExists(true)
    }else {
      const statesArray = [
        colorArms, colorArmPads, colorBack, colorBody,
        colorCorner, colorPillows, colorLegs, colorPole,
        colorSeatCushion, colorShell, colorSideCushion, colorWheels]
      
      const object = {name: setName, array: statesArray}
      const objStr = JSON.stringify(object)
      
      sessionStorage.setItem(setName, objStr)
      
      updatePresets()
      console.log(`Saved preset ${setName}`)
      setSavePreset(false)
    }
  }
  const applyColors = (colorsData) => {
    for(let i = 0; i < 12; i++ ){
      const color = colorsData[i]
      statesMap[parts[i]](color)
    }
  }
  //INITIAL DESIGNS
  const initializeMint = () => {
    const color_1 = "#5caaab"
    const color_2 = "#258580"
    const color_3 = "#ccffff"
    const color_4 = "#409696"
    const colorArrayMint = 
    [
      color_1, color_2, color_1, color_4,
      color_1, color_3, color_2, color_4,
      color_1, color_2, color_3, color_3
    ]

    const object_1 = {name: 'Mint', array: colorArrayMint}
    const object_1_str = JSON.stringify(object_1)
    sessionStorage.setItem('Mint', object_1_str)
    console.log('Mint inited!')
  }
  const initializeChili = () => {
    const color_5 = "#de4d18"
    const color_6 = "#ad3323"
    const color_7 = "#fffceb"
    const color_8 = "#b83518"

    const colorArrayChili = 
    [
      color_5, color_6, color_5, color_8,
      color_5, color_7, color_6, color_8,
      color_5, color_6, color_7, color_7
    ]

    const object_2 = {name: 'Chili', array: colorArrayChili}
    const object_2_str = JSON.stringify(object_2)

    sessionStorage.setItem('Chili', object_2_str)
    console.log('Chili inited.')
  }
  const initializeDesigns = () => {
    initializeMint()
    initializeChili()
  }

  const activatePreset = (key) => {
    const preset = presets.find(preset => preset.key === key)
    const colorArray = preset.array
    handleSelectItem('selected-preset', key)
    applyColors(colorArray)
  }

  useEffect(()=>{
    sessionStorage.clear()
    initializeChili()
    initializeMint()
   
    updatePresets()

  }, [])

  
  
  //states
  const [savePresetInitiated, setSavePreset] = useState(false)
  const [inputPresetName, setInputPresetName] = useState('')
  const handleInputChange = (e) => {
    setInputPresetName(e.target.value)
  }

  return <>
    <div id="panel-container">
        <div id="preset" className="panel non-selectable">
          <span>Saved Designs:</span><br/>
          {presets.length == 0 && <span>No saved designs.</span>}
          <div>
            {presets
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(set => (
              <div key={set.key} onClick={()=>activatePreset(set.key)} style={{'cursor': 'pointer'}}>
                <div className="set-thumbnail" style={{backgroundColor: set.array[3]}}></div>
                <span id={set.key}>{set.name}</span>
              </div>
            )
            )}
          </div>
        </div>
        
        <div id="customizer" className="panel non-selectable">
          <span>Choose your colors!</span><br/>
          <input id="Arms" type="color" value={colorArms} onChange={(event) => changeColor(event, 'arms')}></input><label htmlFor="Arms">Arms</label><br/>
          <input id="ArmPads" type="color" value={colorArmPads} onChange={(event) => changeColor(event, 'armpads')}></input><label htmlFor="ArmPads">Arm Pads</label><br/>
          <input id="back" type="color" value={colorBack} onChange={(event) => changeColor(event, 'back')}></input><label htmlFor="back">Back</label><br/>
          <input id="Body" type="color" value={colorBody} onChange={(event) => changeColor(event, 'body')}></input><label htmlFor="Body">Body</label><br/>
          <input id="Corner" type="color" value={colorCorner} onChange={(event) => changeColor(event, 'corner')}></input><label htmlFor="Corner">Corner</label><br/>
          <input id="Pillows" type="color" value={colorPillows} onChange={(event) => changeColor(event, 'pillows')}></input><label htmlFor="Pillows">Pillows</label><br/>
          <input id="Legs" type="color" value={colorLegs} onChange={(event) => changeColor(event, 'legs')}></input><label htmlFor="Legs">Legs</label><br/>
          <input id="Pole" type="color" value={colorPole} onChange={(event) => changeColor(event, 'pole')}></input><label htmlFor="Pole">Pole</label><br/>
          <input id="SeatCushion" type="color" value={colorSeatCushion} onChange={(event) => changeColor(event, 'seatcushion')}></input><label htmlFor="SeatCushion">Seat Cushion</label><br/>
          <input id="Shell" type="color" value={colorShell} onChange={(event) => changeColor(event, 'shell')}></input><label htmlFor="Shell">Shell</label><br/>
          <input id="SideCushion" type="color" value={colorSideCushion} onChange={(event) => changeColor(event, 'sidecushion')}></input><label htmlFor="SideCushion">Side Cushion</label><br/>
          <input id="Wheels" type="color" value={colorWheels} onChange={(event) => changeColor(event, 'wheels')}></input><label htmlFor="Wheels">Wheels</label><br/>
            
          
          {!savePresetInitiated ? 
          (
            <button id="save-button" onClick={() => {setSavePreset(true)}}>Save Design</button>
          ) 
          : 
          (
            <div>
              <input type="text" placeholder="Enter design name" 
              style={{'marginBottom': '1rem', 'marginTop': '1rem', 'padding': '0.2rem'}}
              onChange={(e) => handleInputChange(e)}
              />
              {nameExists === true && <span style={{'color': 'red', display: 'inline-block'}}>Pick a different name.</span>}
              <button onClick={()=> saveColorSet(inputPresetName)}>OK</button>
            </div> 
          )
          }
        </div>

    </div>
    </>
}

export default Panel