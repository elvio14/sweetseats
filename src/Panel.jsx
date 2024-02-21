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

    const addPreset = (key, array) => {
      const newPreset = {key: key, colorArray: array}
      setPresets([...presets, newPreset])
    }

    const updatePresets = () => {
      for(let i = 0; i < sessionStorage.length; i++){
        const key = sessionStorage.key(i)
        const value = sessionStorage.getItem(key)

        addPreset(key, value)
      }
    }

    const saveColorSet = (setName) => {
        const statesArray = [
          colorArms, colorArmPads, colorBack, colorBody,
          colorCorner, colorPillows, colorLegs, colorPole,
          colorSeatCushion, colorShell, colorSideCushion, colorWheels]
  
        const arrayStr = JSON.stringify(statesArray)
  
        sessionStorage.setItem(setName, arrayStr)
  
        updatePresets()
      }

    const applyColors = (colorsData) => {
      for(let i = 0; i < 12; i++ ){
        const color = colorsData[i]
        statesMap[parts[i]](color)
      }
    }

    //INITIAL COLOR
    const initializeColors = () => {
      const color_1 = "#5caaab"
      const color_2 = "#258580"
      const color_3 = "#ccffff"
      const color_4 = "#409696"
      const colorArray = 
      [
        color_1, color_2, color_1, color_4,
        color_1, color_3, color_2, color_4,
        color_1, color_2, color_3, color_3
      ]
      applyColors(colorArray)
    }

    const applyColorsFromFile = (key) => {
        const colorArray = sessionStorage.getItem(key)
  
        if(!colorArray) {
          console.error("Error getting colorArray from sessionStorage.")
        }else{
          applyColors(colorArray)
        }
      }

    useEffect(()=>{
      initializeColors()
    }, [])

    useEffect(()=>{
        saveColorSet('Mint')
        updatePresets()
      }, [])
    

    return <>
    <div id="panel-container">
        <div id="preset" className="panel non-selectable">
          <span>Color Presets:</span>
          <div>
            {presets.map(set => (
              <div key={set.key}>
                <div className="set-thumbnail" style={{backgroundColor: set.colorArray[0] }}></div>
                {set.key}
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
        </div>

    </div>
    </>
}

export default Panel