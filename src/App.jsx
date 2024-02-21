import { useState, createContext } from 'react'
import './App.css'

export const theContext = createContext()

function App({children, currentPresetChange}) {
  const [colorArms, setColorArms] = useState()
  const [colorArmPads, setColorArmPads] = useState()
  const [colorBack, setColorBack] = useState()
  const [colorBody, setColorBody] = useState()
  const [colorCorner, setColorCorner] = useState()
  const [colorPillows, setColorPillows] = useState()
  const [colorLegs, setColorLegs] = useState()
  const [colorPole, setColorPole] = useState()
  const [colorSeatCushion, setColorSeatCushion] = useState()
  const [colorShell, setColorShell] = useState()
  const [colorSideCushion, setColorSideCushion] = useState()
  const [colorWheels, setColorWheels] = useState()

  const [currentPreset, setCurrentPreset] = useState()

  return (
    <theContext.Provider
      value ={{
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
        colorWheels, setColorWheels,
        currentPreset, setCurrentPreset
      }}
    >
      {children}
    </theContext.Provider>
  )
}

export default App
